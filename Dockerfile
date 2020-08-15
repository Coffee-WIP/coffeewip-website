FROM alpine:3.12.0
RUN apk add --update \
    nodejs>12.17.0-r0 \
    npm>12.17.0-r0

WORKDIR /app
COPY package*.json ./
COPY tsconfig.json .

# Cleans only leaving code necessary on production
RUN npm ci --only=production
RUN npm install --save-dev typescript @types/react @types/node

COPY . .
RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start" ]
