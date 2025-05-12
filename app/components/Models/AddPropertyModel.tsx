"use client";
import Image from "next/image";
import Model from "./Model";
import useAddPropertyModel from "@/app/hooks/useAddPropertyModel";
import CustomButton from "../forms/CustomButton";
import { useState } from "react";
import Categories from "../AddProperty/categories";


const AddPropertyModel = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [dataCategory,setDataCategory]=useState("")




  const addPropertyModel = useAddPropertyModel();




  // setData


  const setCategory=(category:string)=>{
    setDataCategory(category)
  }


  
  const content = (
    <div>
      {currentStep == 1 ? (
        <div>
          <h1 className="text-2xl mb-6">Choose category</h1>
          <Categories
          dataCategory={dataCategory}
          setCategory={(category)=>setCategory(category)}/>
          <CustomButton
            label="Next"
            onClick={() => setCurrentStep(2)}
            className=""
          />
        </div>
      ) : (
        <p>step2</p>
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
