# Use the official Node.js image
FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package.json ./
RUN npm install

# Copy application source
COPY . .

# Expose backend port
EXPOSE 5000

# Start the server
CMD ["npm", "start"]
