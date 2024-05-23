// export const dynamic = 'force-dynamic' // defaults to auto

import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"], // This is the default and can be omitted
});

export async function POST(request: Request) {
  const body = await request.json();

  console.log({ body });

  const chatCompletion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `You are a highly skilled social skills improvement coach. Your primary task is to help users enhance their social interactions and responses. In this session, you will provide one-time feedback on a specific user query. Offer clear, supportive, and constructive feedback to help the user develop confidence and improve their conversational abilities. Your feedback should follow the structure of "Good," "Bad," and "Do," with each section containing a few concise words, focusing solely on the user's message.`,
      },
      { role: "user", content: JSON.stringify(body.messages) },
    ],
    model: "gpt-3.5-turbo",
  });

  console.log({ chatCompletion });
  return Response.json({ feedback: chatCompletion.choices[0].message.content });
}
