FROM node:12-alpine AS BUILD_IMAGE

COPY package.json package-lock.json ./

# install and create folder (to use Dockers caching mechansim)
RUN npm install && mkdir /app && mv ./node_modules ./app

WORKDIR /app

# copy the rest of the files into the created folder
COPY . .

# build
RUN npm run build

FROM nginx:alpine

COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

# remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*

# copy dist
COPY --from=BUILD_IMAGE /app/dist /usr/share/nginx/html

ENTRYPOINT ["nginx", "-g", "daemon off;"]