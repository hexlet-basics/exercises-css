FROM hexletbasics/base-image:latest

WORKDIR /exercises-css

ENV PATH=$PATH:/exercises-css/node_modules/.bin

COPY package.json package-lock.json .

RUN npm ci

COPY . .

ENV NODE_PATH=/usr/lib/node_modules:/exercises-css/src
