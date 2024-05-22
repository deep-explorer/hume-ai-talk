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
          <div className="flex gap-4 items-center">
            <img
              src={situation.icon}
              height={108}
              width={108}
              alt={situation.caption}
            />
            <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
              {situation.caption}
            </h5>
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
    icon: "/images/introducing-yourself.png",
    configId: process.env.NEXT_PUBLIC_HUME_INTRODUCTION_CONFIG_ID,
  },
  {
    caption: "Receiving a compliment",
    icon: "/images/receiving-a-compliment.png",
    configId: process.env.NEXT_PUBLIC_HUME_RECEIVING_COMPLIMENT_CONFIG_ID,
  },
  {
    caption: "Giving a compliment",
    icon: "/images/giving-a-compliment.png",
    configId: process.env.NEXT_PUBLIC_HUME_GIVING_COMPLIMENT_CONFIG_ID,
  },
];
