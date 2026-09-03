console.log("Dark Mode extension content script loaded!");


chrome.runtime.onMessage.addListener((message) => {

    if (message.action === "enableDarkMode") {
        document.body.classList.add("extension-dark-mode");
    }

    if (message.action === "disableDarkMode") {
        document.body.classList.remove("extension-dark-mode");
    }

});