"use client";

import { ConversationType } from "@/app/inbox/page";
import { useRouter } from "next/navigation";

interface ConversationProps {
  userId: string;
  conversation: ConversationType;
}
const conversation: React.FC<ConversationProps> = ({
  userId,
  conversation,
}) => {
  const router = useRouter();
  const otherUser = conversation.users.find((user) => user.id !== userId);
  console.log("All users:", conversation.users);
  console.log("Current userId:", userId);
  console.log("Found otherUser:", otherUser);
  return (
    <div className="border border-gray-300 py-4 px-6 rounded-xl cursor-pointer">
      <p className="text-xl mb-6">{otherUser?.name}</p>

      <p
        onClick={() => router.push(`/inbox/${conversation.id}`)}
        className="text-airbnb-dark"
      >
        Go to Conversation
      </p>
    </div>
  );
};

export default conversation;
