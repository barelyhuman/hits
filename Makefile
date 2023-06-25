APP_NAME=hits

build:
	yarn build

start: build
	pm2 start --name ${APP_NAME} node .output/server/index.mjs

restart:
	pm2 restart ${APP_NAME} --update-env

logs:
	pm2 logs ${APP_NAME}

kill:
	pm2 del ${APP_NAME}