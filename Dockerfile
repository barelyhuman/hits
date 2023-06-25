FROM node:18-alpine

WORKDIR /app

COPY . .

RUN yarn install --frozen-lockfile; yarn build;


CMD ["node",".output/server/index.mjs"]