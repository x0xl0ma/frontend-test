FROM node:alpine
WORKDIR /home/vladislav/table_test
EXPOSE 3000
COPY ./ ./
RUN npm install
CMD ["npm", "start"]