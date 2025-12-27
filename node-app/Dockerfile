FROM node:18-alpine
WORKDIR /app

# Copy package files first (better for caching)
COPY package.json ./
# If you don't have a package-lock.json yet, remove the line below
COPY package-lock.json* ./ 

RUN npm install

# Copy everything else from the node-app folder
COPY . .

EXPOSE 3000
CMD ["node", "server.js"]