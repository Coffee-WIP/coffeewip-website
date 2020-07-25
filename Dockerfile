FROM bitnami/node:12.18.3

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
