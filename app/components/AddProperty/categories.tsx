import Image from "next/image";
import cabinImage from "../../../public/cabins.jpg";
import NationalParksImage from "../../../public/National parks.jpg";
import CavesImage from "../../../public/Caves.jpg";
import FarmsImage from "../../../public/Farms.jpg";
interface categoriesProps {
  dataCategory: string;
  setCategory: (category: string) => void;
}

const Categories: React.FC<categoriesProps> = ({
  dataCategory,
  setCategory,
}) => {
  return (
    <div>
      <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
        <div className="pt-3 flex items-center cursor-pointer pb-6 space-x-12">
          <div
            onClick={() => setCategory("Cabins")}
            className={`flex flex-col items-center space-y-2 pb-4 border-b-2 ${
              dataCategory == "Cabins" ? "border-gray-800" : "border-white"
            } opacity-60 hover:border-gray-200 hover:opacity-100`}
          >
            <Image src={cabinImage} alt="Cabins" width={24} height={24} />
            <span className="text-xs">Cabins</span>
          </div>
          <div
            onClick={() => setCategory("National Parks")}
            className={`flex flex-col items-center space-y-2 pb-4 border-b-2 ${
              dataCategory == "National Parks"
                ? "border-gray-800"
                : "border-white"
            } opacity-60 hover:border-gray-200 hover:opacity-100`}
          >
            <Image
              src={NationalParksImage}
              alt="National Parks"
              width={24}
              height={24}
            />
            <span className="text-xs">National Parks</span>
          </div>
          <div
            onClick={() => setCategory("Caves")}
            className={`flex flex-col items-center space-y-2 pb-4 border-b-2 ${
              dataCategory == "Caves"
                ? "border-gray-800"
                : "border-white"
            } opacity-60 hover:border-gray-200 hover:opacity-100`}>
            <Image src={CavesImage} alt="Caves" width={24} height={24} />
            <span className="text-xs">Caves</span>
          </div>
          <div
            onClick={() => setCategory("Farms")}
            className={`flex flex-col items-center space-y-2 pb-4 border-b-2 ${
              dataCategory == "Farms"
                ? "border-gray-800"
                : "border-white"
            } opacity-60 hover:border-gray-200 hover:opacity-100`}>
            <Image src={FarmsImage} alt="Farms" width={24} height={24} />
            <span className="text-xs">Farms</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Categories;
