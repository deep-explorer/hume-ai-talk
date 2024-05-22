"use client";

import { Button } from "flowbite-react";
import { useRouter } from "next/navigation";

export const Feedback = () => {
  const router = useRouter();

  return (
    <div className="flex gap-4">
      <Button color="blue" onClick={() => router.back()}>
        Try again
      </Button>
      <Button color="purple" onClick={() => router.push("/")}>
        Select another situation
      </Button>
    </div>
  );
};
