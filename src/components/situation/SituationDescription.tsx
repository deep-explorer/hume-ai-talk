"use client";

import { Card } from "flowbite-react";
import { useParams } from "next/navigation";

export const SituationDescription = () => {
  const params = useParams();

  const situation = situations.find(
    (situation) => situation.configId === params.configId
  );

  return (
    <>
      {situation ? (
        <Card className="max-w-sm">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <img
                src={situation.icon}
                height={48}
                width={48}
                alt={situation.caption}
                className="rounded-lg"
              />
              <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                {situation.caption}
              </h5>
            </div>

            <div className="text-sm">
              <b>
                <i>Objective:</i>
              </b>
              <p>{situation.objective}</p>
            </div>
            <div className="text-sm">
              <b>
                <i>Style:</i>
              </b>
              <p>{situation.style}</p>
            </div>
            <div className="text-sm">
              <b>
                <i>Do:</i>
              </b>
              <ul>
                {situation.do.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="text-sm">
              <b>
                <i>Don&apos;t:</i>
              </b>
              {situation.dont.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
        </Card>
      ) : (
        <p>invalid situation</p>
      )}
    </>
  );
};

export const situations = [
  {
    caption: "Introducing yourself",
    icon: "/images/introducing-yourself.webp",
    configId: process.env.NEXT_PUBLIC_HUME_INTRODUCTION_CONFIG_ID,

    objective: "Make a positive first impression and establish a connection.",
    style: "Friendly and confident.",
    do: [
      "Greet warmly",
      "State your name clearly",
      "Mention your role or relevant detail",
      "Keep it brief and relevant",
      "Show interest in others",
    ],
    dont: [
      "Don't mumble or speak too softly",
      "Avoid overloading with information",
      "Don't interrupt others",
      "Avoid using jargon or complex terms",
    ],
  },
  {
    caption: "Receiving a compliment",
    icon: "/images/receiving-a-compliment.webp",
    configId: process.env.NEXT_PUBLIC_HUME_RECEIVING_COMPLIMENT_CONFIG_ID,

    objective: "Acknowledge and appreciate the compliment.",
    style: "Humble and grateful.",
    do: [
      "Thank the person sincerely",
      "Acknowledge the compliment",
      "Express appreciation",
      "Return the compliment if appropriate",
      "Be modest",
    ],
    dont: [
      "Don't dismiss the compliment",
      "Avoid bragging or boasting",
      "Don't deflect or downplay the compliment",
      "Avoid being overly self-critical",
    ],
  },
  {
    caption: "Giving a compliment",
    icon: "/images/giving-a-compliment.webp",
    configId: process.env.NEXT_PUBLIC_HUME_GIVING_COMPLIMENT_CONFIG_ID,

    objective: "Make someone feel good and appreciated.",
    style: "Sincere and specific.",
    do: [
      "Be genuine and specific",
      "Deliver the compliment with a smile",
      "Use positive language",
      "Be timely and appropriate",
      "Focus on the person, not just appearance",
    ],
    dont: [
      "Don't exaggerate or be insincere",
      "Avoid backhanded compliments",
      "Don't make it about yourself",
      "Avoid comparing or competing",
      "Don't make it awkward or uncomfortable",
    ],
  },
];
