# Dockerfile for NestJS API (development)
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 5000
RUN npx prisma generate
CMD ["npm", "run", "start:dev"]
