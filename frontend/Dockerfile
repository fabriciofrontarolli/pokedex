# Use a multi-stage build for efficiency
FROM node:alpine AS builder

# Set working directory for the build stage
WORKDIR /app

# Copy package.json and lock file
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code
COPY . .

# Build the Angular application (adjust script name if needed)
RUN npm run build

# Create a new stage for the final image (slim image)
FROM nginx:alpine

# Copy the dist content from the build stage
COPY --from=builder /app/dist/ui/browser /usr/share/nginx/html

# Expose the port (usually 80)
EXPOSE 80

# Use a basic Nginx configuration file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
