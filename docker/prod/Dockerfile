FROM oven/bun:latest AS build

WORKDIR /app

COPY package.json bun.lock ./
RUN bun install

# lazy to make docker ignore 
COPY ./env ./env
COPY ./configs ./configs
COPY ./tsconfig.json ./tsconfig.json
COPY ./src ./src
COPY ./public ./public
COPY ./index.html ./index.html

RUN bun build-app

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html
COPY configs/nginx.conf /etc/nginx/conf.d

CMD [ "nginx", "-g", "daemon off;" ]