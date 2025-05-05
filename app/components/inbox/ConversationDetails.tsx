"use client";
import CustomButton from "../forms/CustomButton";

const ConversationDetails = () => {
  return (
    <>
      <div className="max-h-[400px] overflow-auto flex flex-col space-y-4">
        <div className="w-[80%] py-4 px-6 rounded-xl bg-gray-200">
          <p className="font-bold text-gray-500">Abhijith</p>
          <p>this is a random test message from Abhijith</p>
        </div>
        <div className="w-[80%] ml-[20%] py-4 px-6 rounded-xl bg-blue-200">
          <p className="font-bold text-gray-500">Abhshek</p>
          <p>this is a random test message from Abhishek</p>
        </div>
      </div>
      <div className="mt-4 py-4 px-6 flex border border-gray-300 rounded-xl space-x-4 items-center">
        <input
          type="text"
          placeholder="Type your message..."
          className="bg-gray-200 w-full p-4 rounded-xl"
        />
        <CustomButton
          label="Send"
          onClick={() => console.log("clicked")}
          className="w-[100px]"
        />
      </div>
    </>
  );
};

export default ConversationDetails;
