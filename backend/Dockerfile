FROM python:3.9.15-slim-bullseye
LABEL MAINTAINER="adamadaniel321@gmail.com"
  
# Install dependencies
RUN apt-get update -y
RUN apt-get install -y --fix-missing \
    git \
    python3.9-dev \
    python3-pip

COPY requirements.txt /app/requirements.txt
WORKDIR /app
RUN pip3 install -r /app/requirements.txt
COPY . /app
# EXPOSE 8080
ENTRYPOINT [ "uvicorn", "api:app", "--reload"]
# ENTRYPOINT [ "uvicorn", "api:app", "--port 8080", "--reload"]