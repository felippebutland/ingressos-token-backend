FROM gcr.io/k8s-skaffold/pack

WORKDIR /usr/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "run", "dev"]