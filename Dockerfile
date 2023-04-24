FROM node:16-alpine
ENV NODE_ENV=production
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production
COPY . .
RUN npm install -g http-server
RUN npm run build-storybook
CMD [ "http-server", "./storybook-static" ]
