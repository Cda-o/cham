(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();
const messages = [
    "Cậu chắc chưa?",
    "Chắc chắn thật à??",
    "Cậu có chắc 100% không?",
    "Bae ơi, xin màaaa...",
    "Nào, suy nghĩ lại đi!",
    "Nếu cậu tiếp tục nói không, tớ sẽ buồn lắm đấy...",
    "Tớ sẽ rất buồn...",
    "Tớ sẽ cực kỳ cực kỳ cực kỳ buồn...",
    "Thôi được rồi, tớ sẽ không hỏi nữa...",
    "Đùa thôi, đồng ý đi mà! ❤️"

];
let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}