FROM node:13-alpine AS BUILD_IMAGE
WORKDIR /app

# copy contents
COPY . /app

# install and build
RUN npm install
RUN npm run build -- --prod

FROM nginx:alpine

COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

# remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# copy dist
COPY --from=BUILD_IMAGE /app/dist /usr/share/nginx/html

EXPOSE 4200 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]