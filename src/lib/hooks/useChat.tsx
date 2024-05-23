"use client";

import {
  AssistantTranscriptMessage,
  UserTranscriptMessage,
} from "@humeai/voice";
import * as React from "react";

type Message = UserTranscriptMessage | AssistantTranscriptMessage;

interface ChatContext {
  messages: Message[];
  setMessages: (messages: Message[]) => void;
}

const ChatContext = React.createContext<ChatContext>({
  messages: [],
  setMessages: (messages: Message[]) => {},
});

export function useChatContext() {
  const context = React.useContext(ChatContext);
  if (!context) {
    throw new Error("useChatContext must be used within a ChatProvider");
  }
  return context;
}

interface FreeChatProviderProps {
  children: React.ReactNode;
}

export function ChatProvider({ children }: FreeChatProviderProps) {
  const [messages, setMessages] = React.useState<Message[]>([]);

  return (
    <ChatContext.Provider
      value={{
        messages,
        setMessages,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}
