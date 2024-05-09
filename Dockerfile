FROM node:18-alpine

WORKDIR /root

RUN npm install -g aws-ses-v2-local

CMD ["aws-ses-v2-local"]
