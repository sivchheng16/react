# Use an official Node.js runtime as a parent image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install all dependencies (including dev dependencies)
RUN npm install --legacy-peer-deps || yarn install || pnpm install

# Copy the rest of the app
COPY . .

# Build the app
RUN npm run build

# Expose port (default Vite preview port)
EXPOSE 4173

# Start the app using Vite preview
CMD ["npm", "run", "preview"]
