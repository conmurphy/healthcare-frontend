# Use node as base image
FROM node:10.16.0-alpine

# Set the working directory to /
WORKDIR /

# Copy Package JSON
COPY package*.json ./

# Optionally define proxy environment
#ARG http_proxy=http://proxy-wsa.esl.cisco.com:80
#ARG https_proxy=http://proxy-wsa.esl.cisco.com:80

# Install requirements
RUN npm install 

# Used for lab proxy
RUN npm install global-agent

# Copy all files
ADD . /

# Expose port 5000
EXPOSE 5000/tcp

# Run it
#CMD [ "node -r 'global-agent/bootstrap'", "shim.js"]
#CMD [ "node", "shim.js"]
ENTRYPOINT ["/bin/sh", "-c" , "node -r 'global-agent/bootstrap' shim.js"] 

