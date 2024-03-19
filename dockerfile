FROM node:20-alpine

WORKDIR /DailyMoodTracker

COPY package*.json .

RUN npm install

COPY . . 

EXPOSE 5137

CMD ["npm", "run" , "dev"]

