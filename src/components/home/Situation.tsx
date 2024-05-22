"use client";

import { situations } from "@/components/situation/SituationDescription";
import { Card } from "flowbite-react";

export const Situation = () => {
  return (
    <div className="flex gap-6">
      {situations.map((situation) => (
        <Card
          key={situation.caption}
          href={`/${situation.configId}`}
          className="max-w-sm"
        >
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
      ))}
    </div>
  );
};
