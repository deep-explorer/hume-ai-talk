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
        content:
          process.env.OPENAI_SYSTEM_PROMPT_FEEDBACK ||
          "The user is asking for feedback on a message",
      },
      { role: "user", content: JSON.stringify(body.messages) },
    ],
    model: "gpt-3.5-turbo",
  });

  console.log({ chatCompletion });
  return new Response(
    JSON.stringify({ feedback: chatCompletion.choices[0].message.content }),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
}
