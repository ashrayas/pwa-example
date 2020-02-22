'use strict';

let deferredInstallPrompt = null;
const installButton = document.getElementById('install_button');
installButton.addEventListener('click', installPWA);
window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);

function saveBeforeInstallPromptEvent(evt) {
    deferredInstallPrompt = evt;
    installButton.removeAttribute('hidden');
}

function installPWA(evt) {
    deferredInstallPrompt.prompt();
    evt.srcElement.setAttribute('hidden', true);
    deferredInstallPrompt.userChoice
    .then((choice) => {
    if (choice.outcome === 'accepted') {
        console.log('User installing pwa app', choice);
        // you could call to add installer counter for analytics here
    } else {
        console.log('User didnt install', choice);
        // or who refuse to install counter
    }
    deferredInstallPrompt = null;
    });
}