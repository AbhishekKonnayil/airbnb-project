import Image from "next/image";
import React from "react";
import ProfiePicture from "../../../public/profile_pic_1.jpg";
import ContactButton from "@/app/components/ContactButton";
import PropertiesList from "@/app/components/Properties/PropertiesList";
import apiSevice from "@/app/apiSevice";
import { getUserId } from "@/app/lib/Action";

const LandLordDetailPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const landlord = await apiSevice.get(`/api/auth/${id}`);
  const userId = await getUserId();
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6 ">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <aside className="col-span-1 mb-4">
          <div className="flex flex-col items-center p-6 rounded-xl border border-gray-300 shadow-xl ">
            <Image
              src={landlord.avatar_url}
              width={200}
              height={200}
              alt="landlord image"
              className="rounded-full"
            />
            <h1 className="mt-6 text-2xl">{landlord.name}</h1>
          </div>
        </aside>
        <div className=" col-span-1 md:col-span-3 pl-0 md:pl-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <PropertiesList landlord_id={id} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default LandLordDetailPage;
