### STAGE 1: Build ###
FROM node:12-alpine AS BUILD_IMAGE
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
RUN npm run build -- --prod

### STAGE 2: Run ###
FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
RUN rm -rf /usr/share/nginx/html/*
COPY --from=BUILD_IMAGE /app/dist/adesso-commuter-web /usr/share/nginx/html

# ENTRYPOINT ["nginx", "-g", "daemon off;"]