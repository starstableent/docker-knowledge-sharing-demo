# Base image which is built upon
FROM ubuntu:18.04

# Configuration
COPY . /
RUN apt update
RUN apt remove cmdtest
RUN apt install -y npm
RUN npm install -g yarn
RUN yarn install

# Starting the app
CMD node index.js