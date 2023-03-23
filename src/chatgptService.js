import axios from 'axios';

export default async function chatgptApi(text, person, lang) {

    const apiKey = process.env.REACT_APP_CHATGPT_KEY
    const numberOfWords = 60;
    const tokens = 200;    

    const data = JSON.stringify({
        prompt: `${text}. Fale como se fosse ${person}, termine o texto questionando ou perguntando algo, resuma em aproximadamente ${numberOfWords} palavras e em ${lang}`,
        max_tokens: tokens,
        n: 1,
        // stop: "."
    });

    const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
    };

    try {
        const apiResponse = await axios({
            url: `https://api.openai.com/v1/engines/${'text-davinci-003'}/completions`,
            method: 'POST',
            headers,
            data
        })
        return apiResponse?.data;
    } catch (error) {
        console.log('error', error)
    }

}