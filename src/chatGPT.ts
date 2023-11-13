import axios, { AxiosResponse } from 'axios';

// Set your OpenAI API key
const apiKey: string = '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';

// Set the endpoint for the ChatGPT API
const apiUrl: string = 'https://api.openai.com/v1/chat/completions';
const imageApi: string = 'https://api.openai.com/v1/images/generations';

// Function to make a request to the ChatGPT API
export async function callChatGPT(prompt: string): Promise<string> {
  try {
    // Make a POST request to the ChatGPT API
    const response: AxiosResponse = await axios.post(
      apiUrl,
      {
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: prompt },
        ],
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    // Extract and return the generated message
    const generatedMessage: string = response.data.choices[0].message.content;
    return generatedMessage;
  } catch (error: any) {
    console.error('Error calling ChatGPT API:', error.message);
    throw error;
  }
}

// Function to make a request to the ChatGPT API
export async function genImage(prompt: string): Promise<string> {
  try {
    // Make a POST request to the ChatGPT API
    const response: AxiosResponse = await axios.post(
      imageApi,
      {
        model: 'dall-e-3',
        prompt,
        n: 1,
        size: '1024x1024',
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    // Extract and return the generated message
    console.log(response.data);
    console.log(JSON.stringify(response.data));
    // const generatedMessage: string = response.data.choices[0].message.content;
    return response.data;
  } catch (error: any) {
    console.error('Error calling ChatGPT API:', error.message);
    throw error;
  }
}

// Example usage
// callChatGPT(userPrompt)
//   .then((generatedMessage: string) => {
//     console.log('Generated Message:', generatedMessage);
//   })
//   .catch((error: Error) => {
//     console.error('Error:', error.message);
//   });
