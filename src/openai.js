import { OpenAI } from "openai";  // OpenAIクラスをインポート

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,  // 環境変数からAPIキーを取得
});

// getAIResponse 関数を定義してエクスポート
export const getAIResponse = async (prompt) => {
  try {
    const response = await openai.completions.create({
      model: "text-davinci-003",
      prompt: prompt,
      max_tokens: 100,
    });
    return response.choices[0].text;  // APIの応答からテキストを取得
  } catch (error) {
    console.error("Error fetching AI response:", error);
    return null;
  }
};

export default openai;
