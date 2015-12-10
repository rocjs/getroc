FROM node:5.2.0
RUN npm install -g roc
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app/package.json
RUN npm install
COPY . /usr/src/app
RUN roc build --build-disableProgressbar true
CMD ["roc", "start"]
EXPOSE 3000
