import express from "express";
import "dotenv/config";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/gemini', async (req, res) => {
    const { weatherData } = req.body;

    const prompt = `
        You are a weather forecast assistant.
        Based on this JSON weather data, write a short (2 to 4 sentences),
        natural, and useful summary in English, including a practical tip
        (e.g., whether an umbrella, coat, or sunscreen is needed).
        Do not invent numbers that are not in the data.
        Focus more on a practical tip than just giving technical details.

        Data: ${JSON.stringify(weatherData, null, 2)}
    `

        try {
            const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash-lite:generateContent`;

            const GeminiRes = await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json',
                    'x-goog-api-key': process.env.GEMINI_API_KEY
                 },
                body: JSON.stringify({
                    contents: [{ parts: [{ text: prompt }] }],
                }),
            });

            const GeminiData = await GeminiRes.json();
           
            if (!GeminiRes.ok) {
                return res.status(GeminiRes.status).json(GeminiData);
            }

            const text = GeminiData.candidates[0].content.parts[0].text;

            res.json({ text });

        } catch(err) {
            res.status(500).json({
                error: "Failed to generate AI summary"
            });
    }
})

app.listen(3000, () => {
    console.log("Backend running on port 3000");
});