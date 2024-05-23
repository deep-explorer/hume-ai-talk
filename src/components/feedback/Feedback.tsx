"use client";

import { useChatContext } from "@/lib/hooks/useChat";
import { Button, Card } from "flowbite-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const Feedback = () => {
  const router = useRouter();
  const { messages } = useChatContext();
  const [feedback, setFeedback] = useState("");

  useEffect(() => {
    if (messages.length > 0) {
      fetch("/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: messages.map(
            (message) => `${message.message.role}: ${message.message.content}`
          ),
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          console.log(res);
          setFeedback(res.feedback);
        })
        .catch(console.error);
    } else {
      // router.push("/");
    }
  }, [messages]);

  let topAverages;
  let topHighest;
  if (messages.length > 0) {
    topAverages = Object.keys(
      messages.map((message) => message.models.prosody?.scores || {})[0]
    )
      .map((key) => ({
        key,
        value:
          messages
            .map((message) => message.models.prosody?.scores[key] || 0)
            .reduce((a, b) => a + b, 0) / messages.length,
      }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 3);

    topHighest = Object.keys(
      messages.map((message) => message.models.prosody?.scores || {})[0]
    )
      .map((key) => ({
        key,
        value: messages
          .map((message) => message.models.prosody?.scores[key] || 0)
          .sort((a, b) => b - a)[0],
      }))
      .sort((a, b) => b.value - a.value)
      .slice(0, 3);
  }

  return (
    <div className="flex flex-col gap-40">
      {messages.length > 0 ? (
        <div className="flex gap-40">
          <Card className="w-[500px]">
            <h2 className="text-3xl font-bold text-center">Feedback</h2>
            <p className="flex flex-col gap-4">
              {feedback.split("\n").map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
          </Card>
          <Card className="w-[500px]">
            <div className="flex">
              <div className="w-[50%] p-2">
                <h2 className="text-xl font-semibold mb-4">Top averages</h2>
                <div className="flex flex-col gap-2">
                  {topAverages?.map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2" key={index}>
                        <p>{item.key}</p>
                        <p className="text-gray-500">{item.value.toFixed(3)}</p>
                      </div>
                      <div className="h-1 bg-gray-200 rounded-full">
                        <div
                          className="h-1 bg-indigo-500 rounded-full"
                          style={{ width: `${item.value * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-[50%] p-2">
                <h2 className="text-xl font-semibold mb-4">Highest peaks</h2>
                <div className="flex flex-col gap-2">
                  {topHighest?.map((item, index) => (
                    <div key={index}>
                      <div className="flex justify-between mb-2" key={index}>
                        <p>{item.key}</p>
                        <p className="text-gray-500">{item.value.toFixed(3)}</p>
                      </div>
                      <div className="h-1 bg-gray-200 rounded-full">
                        <div
                          className="h-1 bg-cyan-500 rounded-full"
                          style={{ width: `${item.value * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      ) : (
        <p className="text-2xl text-center">
          <i>No conversation</i>
        </p>
      )}
      <div className="flex gap-8 justify-center">
        <Button color="blue" onClick={() => router.back()} className="w-40">
          Try again
        </Button>
        <Button
          color="purple"
          onClick={() => router.push("/")}
          className="w-40"
        >
          Select situation
        </Button>
      </div>
    </div>
  );
};
