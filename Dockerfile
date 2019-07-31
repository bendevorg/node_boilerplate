FROM node:12-alpine

# Create app directory
WORKDIR /app

ARG environment
ENV ENVIRONMENT ${environment}

# Add bash git and openssh
RUN apk add --no-cache bash git openssh

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm i --production

# Bundle app source
COPY . .

EXPOSE 8080
CMD ["bash", "tools/app.sh"]