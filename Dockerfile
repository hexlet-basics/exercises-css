FROM hexletbasics/base-image:latest

WORKDIR /exercises-css

RUN npm i -g htmlhint
RUN npm i -g jsdom jsdom-global
RUN npm i -g chai@4.4.1 chai-dom
RUN npm i -g @testing-library/dom
RUN npm i -g @github/query-selector

COPY . .

ENV NODE_PATH /usr/lib/node_modules:/exercises-css/src
