# The base image node:8.11.2-alpine
FROM node:8.11.2-alpine as node

# Create a directory where our app will be placed
RUN mkdir -p /usr/src/app

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/app

# Copy dependency definitions
COPY package*.json ./

# Install dependecies
RUN npm install

# Copy the rest of the project into the image
COPY . .

# Run the angular in product
RUN npm run build-prod

# The base image nginx:1.13.12-alpine
FROM nginx:1.13.12-alpine

# Copy dist content to html nginx folder, config nginx to point in index.html
COPY --from=node /usr/src/app/dist/angular-ngrx  /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
