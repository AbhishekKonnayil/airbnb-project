import ConversationDetails from "@/app/components/inbox/ConversationDetails";
import { getAccessToken, getUserId } from "@/app/lib/Action";
import React from "react";
import { UserType } from "../page";
import apiSevice from "@/app/apiSevice";

export type MessageType = {
  id: string;
  name: string;
  body: string;
  conversationId: string;
  send_to: UserType;
  send_by: UserType;
};

const ConversationPage = async ({ params }: { params: { id: string } }) => {
  const userId = await getUserId();
  const token = await getAccessToken();
  if (!userId || !token) {
    return (
      <main className="max-w-[1500px] mx-auto px-6 pb-6 ">
        <h1 className="text-2xl my-6"> user not authenticated</h1>
      </main>
    );
  }

  const conversation = await apiSevice.get(`/api/chat/${params.id}`);
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <ConversationDetails
        conversation={conversation.conversation}
        userId={userId}
        token={token}
        messages={conversation.messages}
      />
    </main>
  );
};

export default ConversationPage;
