"use client";
import { ConversationType } from "@/app/inbox/page";
import CustomButton from "../forms/CustomButton";
import React, { useEffect, useRef, useState } from "react";
import useWebSocket from "react-use-websocket";
import { MessageType } from "@/app/inbox/[id]/page";
import { UserType } from "@/app/inbox/page";

interface ConversationDetailsProps {
  conversation: ConversationType;
  userId: string;
  token: string;
  messages: MessageType[];
}

const ConversationDetails: React.FC<ConversationDetailsProps> = ({
  conversation,
  userId,
  token,
  messages,
}) => {
  const [realtimeMessages, setRealtimeMessages] = useState<MessageType[]>([]);
  const messagesDiv = useRef<HTMLDivElement>(null);
  const [newMessage, setNewMessage] = useState("");
  const otherUser = conversation.users?.find((user) => user.id != userId);
  const myUser = conversation.users?.find((user) => user.id == userId);
  const { sendJsonMessage, lastJsonMessage, readyState } = useWebSocket(
    `ws://127.0.0.1:8000/ws/${conversation.id}/?token=${token}`,
    {
      share: false,
      shouldReconnect: () => true,
    }
  );

  useEffect(() => {
    console.log("connection state changed", readyState);
  }, [readyState]);

  useEffect(() => {
    if (
      lastJsonMessage &&
      typeof lastJsonMessage == "object" &&
      "name" in lastJsonMessage &&
      "body" in lastJsonMessage
    ) {
      const message: MessageType = {
        id: "",
        name: lastJsonMessage.name as string,
        body: lastJsonMessage.body as string,
        send_to: otherUser as UserType,
        send_by: myUser as UserType,
        conversationId: conversation.id,
      };

      setRealtimeMessages((realtimeMessages) => [...realtimeMessages, message]);
    }
    scrollToBottom();
  }, [lastJsonMessage]);

  const sendMessage = async () => {
    console.log("sendMessage");
    sendJsonMessage({
      event: "chat_message",
      data: {
        body: newMessage,
        name: myUser?.name,
        send_to_id: otherUser?.id,
        conversation_id: conversation.id,
      },
    });

    setNewMessage("");

    setTimeout(() => {
      scrollToBottom();
    }, 50);
  };

  const scrollToBottom = () => {
    if (messagesDiv.current) {
      messagesDiv.current.scrollTop = messagesDiv.current.scrollHeight;
    }
  };

  return (
    <>
      <div
        ref={messagesDiv}
        className="max-h-[400px] overflow-auto flex flex-col space-y-4"
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`w-[80%] py-4 px-6 rounded-xl ${
              message.send_by.name == myUser?.name
                ? "ml-[20%]  bg-blue-200"
                : "bg-gray-200"
            }`}
          >
            <p className="font-bold text-gray-500">{message.send_by.name}</p>
            <p>{message.body}</p>
          </div>
        ))}

        {realtimeMessages.map((message, index) => (
          <div
            key={index}
            className={`w-[80%] py-4 px-6 rounded-xl ${
              message.name == myUser?.name
                ? "ml-[20%]  bg-blue-200"
                : "bg-gray-200"
            }`}
          >
            <p className="font-bold text-gray-500">{message.name}</p>
            <p>{message.body}</p>
          </div>
        ))}
      </div>
      <div className="mt-4 py-4 px-6 flex border border-gray-300 rounded-xl space-x-4 items-center">
        <input
          type="text"
          placeholder="Type your message..."
          className="bg-gray-200 w-full p-4 rounded-xl"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <CustomButton
          label="Send"
          onClick={sendMessage}
          className="w-[100px]"
        />
      </div>
    </>
  );
};

export default ConversationDetails;
