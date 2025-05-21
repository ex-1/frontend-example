FROM oven/bun:latest

WORKDIR /app

COPY package.json bun.lock ./

RUN bun install

COPY ./src ./src
COPY ./configs ./configs
COPY ./env ./env
COPY ./public ./public
COPY ./index.html ./index.html

CMD [ "bun", "dev" ]