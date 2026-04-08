# Build
FROM node:22.12.0-alpine  AS build

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

#----------------------------
FROM nginx:stable-alpine AS final

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /dist /usr/share/nginx/html