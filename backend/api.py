from typing import List

import pandas as pd
from fastapi import FastAPI, Response, status
from tensorflow.python.keras.models import load_model

from model import Answers

app = FastAPI()
model = load_model('./models/best_model.h5')

questions_map = {
    "X1": "the availability of information about the city services",
    "X2": "the cost of housing",
    "X3": "the overall quality of public schools",
    "X4": "your trust in the local police",
    "X5": "the maintenance of streets and sidewalks",
    "X6": "the availability of social community events"
}


@app.get("/healthz", status_code=200)
def healthz(response: Response):
    response.status_code = status.HTTP_200_OK
    # TODO: if the service isn't ready yet, return HTTP_503
    # Not ready would be something like: model not loaded
    return {
        "is_healthy": True, "error_message": ""
    }


@app.post("/happiness", status_code=200)
def get_happiness(answers: Answers):
    data = {"X1": [answers.X1], "X2": [answers.X2], "X3": [answers.X3], "X4": [answers.X4], "X5": [answers.X5],
            "X6": [answers.X6]}

    df = pd.DataFrame(data)
    prediction = float(model.predict(df)[0][0])
    print(prediction)
    return {
        "happiness": 0 if prediction < 0.5 else 1,
        "confidence": 1 - prediction if prediction < 0.5 else prediction,
        "recommendations": find_better(answers, prediction)
    }


def find_better(answers: Answers, original_score: float) -> List:
    original_data = {"X1": [answers.X1], "X2": [answers.X2], "X3": [answers.X3], "X4": [answers.X4], "X5": [answers.X5],
                     "X6": [answers.X6]}

    data = {"X1": [answers.X1], "X2": [answers.X2], "X3": [answers.X3], "X4": [answers.X4], "X5": [answers.X5],
            "X6": [answers.X6]}

    predictions = []
    idx = 0
    for x in ["X1", "X2", "X3", "X4", "X5", "X6"]:
        data[x][0] = original_data[x][0] + 1.0
        if data[x][0] > 5:
            data[x][0] = 5
        df = pd.DataFrame(data)
        prediction = float(model.predict(df)[0][0])
        if prediction > original_score:
            content = "Increasing {} would result in a higher happiness score".format(questions_map[x])
            predictions.append({"idx": idx, "content": content})
            idx += 1

        data[x][0] = original_data[x][0] - 1.0
        if data[x][0] < 1:
            data[x][0] = 1
        df = pd.DataFrame(data)
        prediction = float(model.predict(df)[0][0])
        if prediction > original_score:
            content = "Decreasing {} would result in a higher happiness score".format(questions_map[x])
            predictions.append({"idx": idx, "content": content})
            idx += 1

        data[x][0] = original_data[x][0]

    print(predictions)

    return predictions
