import React, { useState } from 'react';
import { getAIResponse } from './openai'; // openai.jsの関数をインポート

function App() {
  const [userMessage, setUserMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const handleInputChange = (event) => {
    setUserMessage(event.target.value);
  };

  const handleSendMessage = async () => {
    if (!userMessage) return;

    setChatHistory((prev) => [...prev, { sender: "user", text: userMessage }]);
    
    const aiResponse = await getAIResponse(userMessage);

    setChatHistory((prev) => [...prev, { sender: "ai", text: aiResponse }]);

    setUserMessage("");
  };

  return (
    <div className="App">
      <h1>営業シミュレーション</h1>
      <div className="chat-container">
        {chatHistory.map((msg, index) => (
          <div key={index} className={msg.sender}>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>
      <input 
        type="text" 
        value={userMessage} 
        onChange={handleInputChange} 
        placeholder="メッセージを入力" 
      />
      <button onClick={handleSendMessage}>送信</button>
    </div>
  );
}

export default App;
