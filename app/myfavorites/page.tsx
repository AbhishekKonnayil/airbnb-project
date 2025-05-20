import PropertiesList from "../components/Properties/PropertiesList";
import { getUserId } from "../lib/Action";

const MyFavoritePage = async () => {
  const userId = getUserId();
  if (!userId) {
    return (
      <main className="max-w-[1500px] mx-auto px-6 pb-6 ">
        <h1 className="text-2xl my-6"> user not authenticated</h1>
      </main>
    );
  } else {
    return (
      <main className="max-w-[1500px] mx-auto px-6 pb-6 ">
        <h1 className="text-2xl my-6"> My Favorites</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <PropertiesList favorites={true} landlord_id={null} />
        </div>
      </main>
    );
  }
};

export default MyFavoritePage;
