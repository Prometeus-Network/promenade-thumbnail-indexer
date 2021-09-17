FROM node:14-alpine
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package*.json yarn.lock /app/
COPY . /app
RUN apk --update --no-cache \
    add  \
    automake \
    git \
    alpine-sdk  \
    nasm  \
    autoconf  \
    build-base \
    zlib \
    zlib-dev \
    libpng \
    libpng-dev\
    libwebp \
    libwebp-dev \
    libjpeg-turbo \
    libjpeg-turbo-dev \
    libjpeg-turbo-utils \
    gifsicle \
    optipng
RUN yarn --frozen-lockfile
CMD yarn start

