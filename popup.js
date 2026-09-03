const darkModeButton = document.getElementById("darkModeButton");
const lightModeButton = document.getElementById("lightModeButton");

lightModeButton.addEventListener("click", () => {
    chrome.tabs.query(
        { active: true, currentWindow: true },
        (tabs) => {
            chrome.tabs.sendMessage(tabs[0].id, {
                action: "disableDarkMode"
            });
        }
    );
});

darkModeButton.addEventListener("click", () => {

    chrome.tabs.query(
        { active: true, currentWindow: true },
        (tabs) => {

            chrome.tabs.sendMessage(tabs[0].id, {
                action: "enableDarkMode"
            });

        }
    );

});
