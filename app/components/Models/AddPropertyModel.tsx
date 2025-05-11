"use client";
import Image from "next/image";
import Model from "./Model";
import useAddPropertyModel from "@/app/hooks/useAddPropertyModel";

const AddPropertyModel = () => {
  const addPropertyModel = useAddPropertyModel();
  return (
    <div>
      <Model
        isOpen={addPropertyModel.isOpen}
        close={addPropertyModel.close}
        label="Add property"
        content={<p>efre</p>}
      />
    </div>
  );
};

export default AddPropertyModel;
