# PWA EXAMPLE
This project show minimalist code required to create a PWA project with only 2 objective :
1. installable in mobile and desktop
2. offline handler

There's only 4 required file to make web application into PWA :

## manifest
this is a json file contain basic configuration which will be used when generating PWA application

## service worker
a javascript that will register service worker into web app and handle file caching management and offline handler

## install
a javascript which contain how to trigger install action through html button and execute any action desired based on user reaction to PWA install request

## offline
a html file contain UI that will be shown to user when offline condition is detected when opening web app