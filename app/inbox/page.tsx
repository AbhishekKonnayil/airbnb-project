import React from "react";
import Conversation from "../components/inbox/Conversation";
import { getUserId } from "../lib/Action";
import apiSevice from "../apiSevice";

export type UserType = {
  id: string;
  name: string;
  avatar_url: string;
};

export type ConversationType = {
  id: string;
  users: UserType[];
};

const InboxPage = async () => {
  const userId = await getUserId();
  if (!userId) {
    <h1 className="text-2xl my-6"> You need to be authenticated </h1>;
  }

  const Conversations = await apiSevice.get("/api/chat/");
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6 space-y-4 ">
      <h1 className="text-2xl my-6">Inbox</h1>

      {Conversations?.map((conversation: ConversationType) => {
        return (
          <Conversation
            key={conversation.id}
            userId={userId ?? ""}
            conversation={conversation}
          />
        );
      })}
    </main>
  );
};
export default InboxPage;
