# Use the official Node.js image.
FROM node:14-alpine

# Create and set the working directory.
WORKDIR /app

# Copy package.json and package-lock.json files.
COPY package.json package-lock.json ./

# Install dependencies.
RUN npm install --verbose

# Copy the rest of the application code.
COPY . .

# Command to run the application.
CMD ["npm", "start"]

