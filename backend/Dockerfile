# Use a slim Node.js image
FROM node:alpine

# Set working directory for the application
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies (may take longer)
RUN npm install

# Copy the application code
COPY . .

# Set the port environment variable (optional)
ENV PORT=8080

# Expose the port
EXPOSE 8080

CMD [ "npm", "start" ]
