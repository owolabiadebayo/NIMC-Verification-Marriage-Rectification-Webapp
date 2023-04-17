FROM python:3.9.16-slim-bullseye
LABEL MAINTAINER="adamadaniel321@gmail.com"

RUN apt-get update -y
RUN apt-get install -y --fix-missing \
    git \
    python3.9-dev \
    python3-pip

COPY requirements.txt /code/requirements.txt
WORKDIR /code
RUN pip3 install --no-cache-dir --upgrade -r /code/requirements.txt

COPY . /code
# EXPOSE 8080

ENTRYPOINT ["uvicorn", "api:app", "--host", "0.0.0.0", "--port", "8080", "--reload"]