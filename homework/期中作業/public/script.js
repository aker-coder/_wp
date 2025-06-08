async function sendMessage() {
    const userInput = document.getElementById('userInput').value;
    const responseDiv = document.getElementById('response');

    try {
        const response = await fetch('/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: userInput })
        });

        const data = await response.json(); // 只讀一次
        responseDiv.innerText = data.reply;
    } catch (error) {
        console.error('API 請求失敗:', error);
        responseDiv.innerText = '伺服器錯誤，請稍後再試。';
    }
}