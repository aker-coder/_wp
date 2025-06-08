async function sendMessage() {
    const userInput = document.getElementById('userInput');
    const chatBox = document.getElementById('chatBox');
    const message = userInput.value.trim();
    if (!message) return;

    // 顯示使用者訊息
    chatBox.innerHTML += `<div class="user-message">你：${message}</div>`;
    userInput.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;

    try {
        const response = await fetch('/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message })
        });
        const data = await response.json();
        chatBox.innerHTML += `<div class="ai-message">AI：${data.reply}</div>`;
        chatBox.scrollTop = chatBox.scrollHeight;
    } catch (error) {
        chatBox.innerHTML += `<div class="ai-message" style="color:red;">伺服器錯誤，請稍後再試。</div>`;
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}