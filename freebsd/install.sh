#!/bin/sh

pkg install -y git nano node npm mongodb44-4.4.1

sysrc mongod_enable=YES
service mongod start

cd /
git clone https://github.com/G-Ambatte/homebrewery.git

cd homebrewery
npm install
npm audit fix
npm run postinstall

cp freebsd/rc.d/homebrewery /etc/rc.d/
chmod +x /etc/rc.d/homebrewery

sysrc homebrewery_enable=YES
service homebrewery start