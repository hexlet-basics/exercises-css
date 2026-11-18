FROM hexletbasics/base-image

WORKDIR /exercises-css

ENV PATH=/exercises-css/bin:/exercises-css/node_modules/.bin:$PATH

COPY package.json package-lock.json .

RUN npm ci

COPY . .
