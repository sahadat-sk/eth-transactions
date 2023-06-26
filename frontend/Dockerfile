# Use a base Node.js image
FROM node:lts

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port your Next.js app will run on
EXPOSE 3000

# Run the Next.js application
CMD ["npm", "start"]
