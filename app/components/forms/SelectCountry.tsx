"use client";
import useCountries from "@/app/hooks/useCounrties";
import React from "react";
import Select from "react-select";

export type SelectCountryType = {
  label: string;
  value: string;
};

interface SelectCountryProps {
  value?: SelectCountryType;
  onChange: (value: SelectCountryType) => void;
}
const { getAll } = useCountries();

const SelectCountry: React.FC<SelectCountryProps> = ({ value, onChange }) => {
  return (
    <div>
      <Select
        placeholder="Anywhere"
        isClearable
        options={getAll()}
        value={value}
        onChange={(value) => onChange(value as SelectCountryType)}
      />
    </div>
  );
};
export default SelectCountry;
