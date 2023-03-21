import axios from 'axios';

export default async function chatgptApi(text, person) {

    const apiKey = process.env.REACT_APP_CHATGPT_KEY

    const data = JSON.stringify({
        prompt: `${text}. Fale como se fosse ${person}, termine o texto questionando ou perguntando algo e resuma em aproximadamente 75 palavras.`,
        max_tokens: 200,
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