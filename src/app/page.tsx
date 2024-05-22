import { Card } from "flowbite-react";

export default async function Page() {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-3xl font-bold text-center">
        Select a social situation
      </h2>
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
    </div>
  );
}

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
