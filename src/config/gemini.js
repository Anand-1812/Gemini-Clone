const API_KEY = "AIzaSyD0cSM1CXHDEvN5c1b2hnrXFKzyR0L6JKc"; // ⚠ visible to anyone in browser — only for testing!

async function main(prompt) {
  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              role: "user",
              parts: [{ text: prompt }],
            },
          ],
        }),
      }
    );

    const data = await response.json();
    console.log(data.candidates?.[0]?.content?.parts?.[0]?.text || "No output");
  } catch (err) {
    console.error("Error calling Gemini API:", err);
  }
}

export default main;

