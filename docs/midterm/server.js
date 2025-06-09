const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const fetch = require('node-fetch');

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/chat', async (req, res) => {
    const userMessage = req.body.message;
    const apiKey = process.env.GROQ_API_KEY;
    const endpoint = 'https://api.groq.com/openai/v1/chat/completions';

    try {
        const response = await fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({ model: "llama3-8b-8192", messages: [{ role: "user", content: userMessage }] })
        });

        const text = await response.text();
        console.log(text);
        let data;
        try {
            data = JSON.parse(text);
        } catch (e) {
            return res.status(500).json({ error: 'API 回傳非 JSON', raw: text });
        }
        // 檢查 choices 結構
        if (!data.choices || !data.choices[0] || !data.choices[0].message) {
            return res.status(500).json({ error: 'API 回傳格式錯誤', raw: data });
        }
        res.json({ reply: data.choices[0].message.content });
    } catch (error) {
        console.error('API 呼叫失敗:', error);
        res.status(500).json({ error: 'API 連接失敗' });
    }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`伺服器運行在 http://localhost:${PORT}`));