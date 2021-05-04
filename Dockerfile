FROM node:12 AS FE-BUILD

ARG CI_COMMIT_SHA

WORKDIR /opt/app
COPY . .

RUN npm run -s build 

# ###############


FROM nginx:stable


COPY --from=FE-BUILD /opt/app/dist /usr/share/nginx/html

# EXPOSE 8080

CMD [ "nginx", "-g", "daemon off;" ]
