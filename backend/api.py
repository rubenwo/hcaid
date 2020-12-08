import pandas as pd
from fastapi import FastAPI, Response, status
from model import Answers
from tensorflow.python.keras.models import load_model

app = FastAPI()
model = load_model('./models/best_model.h5')


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
    print("HELLO")
    data = {}
    data["X1"] = [answers.X1]
    data["X2"] = [answers.X2]
    data["X3"] = [answers.X3]
    data["X4"] = [answers.X4]
    data["X5"] = [answers.X5]
    data["X6"] = [answers.X6]

    df = pd.DataFrame(data)
    print(df.head())
    prediction = float(model.predict(df)[0][0])
    print(prediction)
    return {
        "happiness": 0 if prediction < 0.5 else 1,
        "confidence": 1 - prediction if prediction < 0.5 else prediction
    }
