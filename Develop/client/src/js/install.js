const installButton = document.getElementById('buttonInstall');
window.addEventListener('beforeinstallprompt', (event) => {
     window.deferredPrompt = event;
     installButton.classList.remove('hidden');
});

installButton.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
     return;
    }
    promptEvent.prompt();
    window.deferredPrompt = null;
    installButton.classList.add('hidden');
});

window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
});