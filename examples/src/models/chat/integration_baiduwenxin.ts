import { ChatBaiduWenxin } from "@langchain/community/chat_models/baiduwenxin";
import { HumanMessage } from "@langchain/core/messages";

// Default model is ERNIE-Bot-turbo
const ernieTurbo = new ChatBaiduWenxin({
  baiduApiKey: "YOUR-API-KEY", // In Node.js defaults to process.env.BAIDU_API_KEY
  baiduSecretKey: "YOUR-SECRET-KEY", // In Node.js defaults to process.env.BAIDU_SECRET_KEY
});

// Use ERNIE-Bot
const ernie = new ChatBaiduWenxin({
  modelName: "ERNIE-Bot", // Available models: ERNIE-Bot, ERNIE-Bot-turbo, ERNIE-Bot-4, ERNIE-Speed-8K, ERNIE-Speed-128K
  temperature: 1,
  baiduApiKey: "YOUR-API-KEY", // In Node.js defaults to process.env.BAIDU_API_KEY
  baiduSecretKey: "YOUR-SECRET-KEY", // In Node.js defaults to process.env.BAIDU_SECRET_KEY
});

const messages = [new HumanMessage("Hello")];

let res = await ernieTurbo.invoke(messages);
/*
AIChatMessage {
  text: 'Hello! How may I assist you today?',
  name: undefined,
  additional_kwargs: {}
  }
}
*/

res = await ernie.invoke(messages);
/*
AIChatMessage {
  text: 'Hello! How may I assist you today?',
  name: undefined,
  additional_kwargs: {}
  }
}
*/
