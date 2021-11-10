#################
#  Build Image  #
#################
FROM node:14-alpine AS build-env

COPY . /app 
COPY docker/entrypoint.sh /app

WORKDIR /app

RUN yarn
RUN yarn compile
RUN npx prisma generate

#################
# Runtime Image #
#################
FROM node:14-alpine AS runtime

WORKDIR /app

COPY --from=build-env /app .

ENTRYPOINT ["/app/docker/entrypoint.sh"]
CMD ["/app/entrypoint.sh"]
