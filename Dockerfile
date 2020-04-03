FROM node:12 AS base
WORKDIR /usr/src/app

COPY . .
RUN npm ci
RUN npm run build -- --prod


FROM nginx

COPY --from=base /usr/src/app/dist/software-practices-monitor-ui /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80/tcp
