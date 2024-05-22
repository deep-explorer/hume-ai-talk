"use client";
import { useVoice, VoiceReadyState } from "@humeai/voice-react";
import { Button } from "flowbite-react";
import { FaPlay } from "react-icons/fa";
import { FaStop } from "react-icons/fa";
import { AudioRecorderWithVisualizer } from "./AudioVisualizer";
import { useRouter } from "next/navigation";

export default function Controls() {
  const router = useRouter();
  const { connect, disconnect, readyState } = useVoice();

  return (
    <div className="flex flex-col gap-36 w-[350px]">
      <div className="">
        <AudioRecorderWithVisualizer
          isRecording={readyState === VoiceReadyState.OPEN}
        />
      </div>

      <div className="flex justify-center">
        {readyState === VoiceReadyState.OPEN ? (
          <Button
            onClick={() => {
              disconnect();
              router.push("/feedback");
            }}
            color={"failure"}
          >
            <FaStop className="mr-2 h-5 w-5" /> Finish
          </Button>
        ) : (
          <Button
            onClick={() => {
              connect()
                .then(() => {
                  /* handle success */
                })
                .catch(() => {
                  /* handle error */
                });
            }}
          >
            <FaPlay className="mr-2 h-5 w-5" /> Start
          </Button>
        )}
      </div>
    </div>
  );
}
