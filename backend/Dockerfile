FROM python:3.7

RUN pip install fastapi uvicorn tensorflow pandas

EXPOSE 80

COPY . /

ENTRYPOINT  ["uvicorn", "api:app", "--host", "0.0.0.0", "--port", "80"]