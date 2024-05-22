"use client";
import { VoiceProvider } from "@humeai/voice-react";
import Controls from "./Controls";
import Messages from "./Messages";
import { useParams } from "next/navigation";

export default function ClientComponent({
  accessToken,
}: {
  accessToken: string;
}) {
  const params = useParams();

  return (
    <VoiceProvider
      auth={{ type: "accessToken", value: accessToken }}
      configId={params.configId as string}
    >
      {/* <Messages /> */}
      <Controls />
    </VoiceProvider>
  );
}
