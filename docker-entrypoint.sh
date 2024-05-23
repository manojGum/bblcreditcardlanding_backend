#!/bin/sh
cd /opt/app && yarn config set network-timeout 600000 -g && yarn install
cd /opt/app && yarn build
cd /opt/app && yarn start