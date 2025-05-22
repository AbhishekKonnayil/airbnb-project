"use client";
import { useRouter } from "next/navigation";
import React from "react";
import UseLoginModel from "../hooks/useLoginModel";
import apiSevice from "../apiSevice";

interface ContactButtonProps {
  userId: string | null;
  landlordId: string;
}

const ContactButton: React.FC<ContactButtonProps> = ({
  userId,
  landlordId,
}) => {
  const loginModel = UseLoginModel();
  const router = useRouter();
  const startConversation = async () => {
    if (userId) {
      const conversation = await apiSevice.get(`/api/chat/start/${landlordId}`);

      if (conversation.conversation_id) {
        router.push(`/inbox/${conversation.conversation_id}`);
      }
    } else {
      loginModel.open();
    }
  };

  return (
    <div
      onClick={startConversation}
      className="py-4 px-6 bg-airbnb text-white rounded-xl mt-6 hover:bg-airbnb-dark transition-colors cursor-pointer "
    >
      Contact
    </div>
  );
};

export default ContactButton;
