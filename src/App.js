import React, { useState, useEffect } from "react";
import { getAIResponse } from './openai';  // getAIResponse をインポート

const App = () => {
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAIResponse = async () => {
      try {
        console.log("Sending request to OpenAI...");
        const aiResponse = await getAIResponse("Say hello!");
        console.log("AI Response:", aiResponse);
        setResponse(aiResponse);
      } catch (error) {
        console.error("Error fetching AI response:", error);
      } finally {
        setLoading(false);
      }
    };
    

    fetchAIResponse();
  }, []);

  return (
    <div className="App">
      <h1>AI Response:</h1>
      {loading ? (
        <p>Loading...</p>  // ローディング中
      ) : (
        <p>{response}</p>  // レスポンスを表示
      )}
    </div>
  );
};

export default App;
