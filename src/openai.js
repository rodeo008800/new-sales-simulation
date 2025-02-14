// src/openai.js

import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,  // 環境変数からAPIキーを取得
});

const openai = new OpenAIApi(configuration);

export default openai;
