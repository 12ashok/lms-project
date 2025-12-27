FROM node:18-alpine
WORKDIR /app

# Only copy package.json first
COPY package.json ./

# Install dependencies
RUN npm install

# Now copy the rest of the files
COPY . .

EXPOSE 3000
CMD ["node", "server.js"]
