FROM node:14 AS build-env
ADD . /app
WORKDIR /app

RUN npm i
RUN npm run build
RUN npm ci --only=production

FROM gcr.io/distroless/nodejs:14
COPY --from=build-env /app/src /app/src
COPY --from=build-env /app/.next /app/.next
COPY --from=build-env /app/node_modules /app/node_modules
COPY --from=build-env /app/public /app/public
COPY --from=build-env /app/package.json /app/package.json
COPY --from=build-env /app/package-lock.json /app/package-lock.json

WORKDIR /app

EXPOSE 3000

CMD ["./src/index.js"]
