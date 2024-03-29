FROM node:9.4

# Create app directory
WORKDIR /usr/src/app

# Expose port for service
EXPOSE 5000

# Install and configure `serve`.
RUN npm install -g serve

# Copy source code to image
COPY . .

# Install dependencies
RUN npm install

# start app
CMD ["npm", "start"]
