# # Pull Docker Hub base image
# FROM node:14.16.0-alpine3.10
# # Set working directory
# WORKDIR /usr/app
# # Install app dependencies
# COPY package*.json ./
# COPY package-lock.json ./
# RUN npm install -qy
# # Copy app to container
# COPY . .
# # Run the "dev" script in package.json
# CMD ["npm", "run", "dev"]
FROM node:16-alpine
WORKDIR /backend
COPY package.json ./
COPY package-lock.json ./
COPY ./ ./
RUN npm i
EXPOSE 4000
CMD ["npm", "run", "start"]