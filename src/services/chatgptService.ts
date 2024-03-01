import axios from "axios";

export default async function chatgptApi(
  text: string,
  person: string,
  lang: string
) {
  const apiKey = import.meta.env.VITE_REACT_APP_CHATGPT_KEY;
  const numberOfWords = 50;

  const data = JSON.stringify({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: `You are ${person}, make a small text with up to ${numberOfWords} words. The text should be in ${lang}`
      },
      {
        role: "user",
        content: text
      }
    ]
  });

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
  };

  try {
    const apiResponse = await axios({
      url: `https://api.openai.com/v1/chat/completions`,
      method: "POST",
      headers,
      data,
    });
    console.log('apiResponse', apiResponse);
    return apiResponse?.data;
  } catch (error) {
    console.log("error", error);
    // @todo - log errors
  }
}
