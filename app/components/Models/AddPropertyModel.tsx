"use client";
import Image from "next/image";
import Model from "./Model";
import useAddPropertyModel from "@/app/hooks/useAddPropertyModel";
import CustomButton from "../forms/CustomButton";
import { ChangeEvent, useState } from "react";
import Categories from "../AddProperty/categories";
import SelectCountry, { SelectCountryType } from "../forms/SelectCountry";
import apiSevice from "@/app/apiSevice";
import { useRouter } from "next/navigation";
import { Console } from "console";

const AddPropertyModel = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [dataCategory, setDataCategory] = useState("");
  const [dataTitle, setDataTitle] = useState("");
  const [dataDescription, setDataDescription] = useState("");
  const [dataPrice, setDataPrice] = useState("");
  const [dataBedrooms, setDataBedrooms] = useState("");
  const [dataBathrooms, setDataBathrooms] = useState("");
  const [dataGuests, setDataGuests] = useState("");
  const [dataCountry, setDataCountry] = useState<SelectCountryType>();
  const [dataImage, setDataImage] = useState<File | null>(null);

  const addPropertyModel = useAddPropertyModel();
  const router = useRouter();

  // setData

  const setCategory = (category: string) => {
    setDataCategory(category);
  };

  const setImage = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const tmpImage = event.target.files[0];

      setDataImage(tmpImage);
    }
  };

  // submit
  const submitForm = async () => {
    console.log("submitForm");
    if (
      dataCategory &&
      dataDescription &&
      dataTitle &&
      dataImage &&
      dataCountry &&
      dataPrice
    ) {
      const formData = new FormData();
      formData.append("category", dataCategory);
      formData.append("title", dataTitle);
      formData.append("description", dataDescription);
      formData.append("image", dataImage);
      formData.append("country", dataCountry.label);
      formData.append("country_code", dataCountry.value);
      formData.append("bathrooms", dataBathrooms);
      formData.append("bedrooms", dataBedrooms);
      formData.append("price_per_night", dataPrice);
      formData.append("guests", dataGuests);
      console.log("pageData", formData);
      const response = await apiSevice.post(
        "/api/properties/create/",
        formData
      );

      if (response.success) {
        console.log("SUCCESS :-D");
        router.push("/");
        addPropertyModel.close();
      } else {
        console.log("errors");
      }
    }
  };

  const content = (
    <div>
      {currentStep == 1 ? (
        <div>
          <h1 className="text-2xl mb-6">Choose category</h1>
          <Categories
            dataCategory={dataCategory}
            setCategory={(category) => setCategory(category)}
          />
          <CustomButton
            label="Next"
            onClick={() => setCurrentStep(2)}
            className=""
          />
        </div>
      ) : currentStep == 2 ? (
        <div>
          <h1 className="text-2xl mb-6">Describe your place</h1>
          <div className="pt-3 pb-6 space-y-4">
            <div className="flex flex-col space-y-2">
              <label>Title</label>
              <input
                type="text"
                value={dataTitle}
                onChange={(e) => setDataTitle(e.target.value)}
                className="w-full p-4 border border-gray-600 rounded-xl"
              />
              <label>Description</label>
              <textarea
                value={dataDescription}
                onChange={(e) => setDataDescription(e.target.value)}
                className="w-full min-h-[200px] p-4 border border-gray-600 rounded-xl"
              ></textarea>
            </div>
          </div>
          <CustomButton
            label="Previous"
            onClick={() => setCurrentStep(1)}
            className="bg-gray-900 hover:bg-gray-950 mb-2"
          />

          <CustomButton
            label="Next"
            onClick={() => setCurrentStep(3)}
            className=""
          />
        </div>
      ) : currentStep == 3 ? (
        <div>
          <h1 className="text-2xl mb-6">Details</h1>
          <div className="pt-3 pb-6 space-y-4">
            <div className="flex flex-col space-y-2">
              <label>Price per night</label>
              <input
                type="number"
                value={dataPrice}
                onChange={(e) => setDataPrice(e.target.value)}
                className="w-full p-4 border border-gray-600 rounded-xl"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label>Bedrooms</label>
              <input
                type="number"
                value={dataBedrooms}
                onChange={(e) => setDataBedrooms(e.target.value)}
                className="w-full p-4 border border-gray-600 rounded-xl"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label>Bathrooms</label>
              <input
                type="number"
                value={dataBathrooms}
                onChange={(e) => setDataBathrooms(e.target.value)}
                className="w-full p-4 border border-gray-600 rounded-xl"
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label>Maximum number of Guests</label>
              <input
                type="number"
                value={dataGuests}
                onChange={(e) => setDataGuests(e.target.value)}
                className="w-full p-4 border border-gray-600 rounded-xl"
              />
            </div>
          </div>
          <CustomButton
            label="Previous"
            onClick={() => setCurrentStep(2)}
            className="bg-gray-900 hover:bg-gray-950 mb-2"
          />

          <CustomButton
            label="Next"
            onClick={() => setCurrentStep(4)}
            className=""
          />
        </div>
      ) : currentStep == 4 ? (
        <div>
          <h1 className="text-2xl mb-6">Location</h1>
          <div className="pt-3 pb-6 space-y-4">
            <SelectCountry
              value={dataCountry}
              onChange={(value) => setDataCountry(value as SelectCountryType)}
            />
          </div>
          <CustomButton
            label="Previous"
            onClick={() => setCurrentStep(3)}
            className="bg-gray-900 hover:bg-gray-950 mb-2"
          />

          <CustomButton
            label="Next"
            onClick={() => setCurrentStep(5)}
            className=""
          />
        </div>
      ) : (
        <div>
          <h1 className="text-2xl mb-6">Image</h1>
          <div className="pt-3 pb-6 space-y-4">
            <div className="py-4 px-6 bg-gray-600 text-white rounded-xl">
              <input type="file" accept="image/*" onChange={setImage} />
            </div>
            {dataImage && (
              <div className="w-[200px] h-[150px] relative ">
                <Image
                  fill
                  alt="Uploaded Image"
                  src={URL.createObjectURL(dataImage)}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            )}
          </div>
          <CustomButton
            label="Previous"
            onClick={() => setCurrentStep(4)}
            className="bg-gray-900 hover:bg-gray-950 mb-2"
          />
          <CustomButton label="Submit" onClick={submitForm} className="" />
        </div>
      )}
    </div>
  );
  return (
    <div>
      <Model
        isOpen={addPropertyModel.isOpen}
        close={addPropertyModel.close}
        label="Add property"
        content={content}
      />
    </div>
  );
};

export default AddPropertyModel;
