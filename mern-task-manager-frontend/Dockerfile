# Use Node.js image to build React app
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json ./
RUN npm install

# Copy app source
COPY . .

# Build the React app
RUN npm run build

# Serve with nginx
FROM nginx:alpine

# Copy build files to nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expose nginx port
EXPOSE 80
