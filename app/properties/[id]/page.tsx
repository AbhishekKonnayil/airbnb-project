import Image from "next/image";
import ReservationSidebar from "@/app/components/Properties/ReservationSidebar";
import apiSevice from "@/app/apiSevice";
import { getUserId } from "@/app/lib/Action";
import Link from "next/link";

const PropertyDetailPage = async ({ params }: { params: { id: string } }) => {
  const userId = await getUserId();
  const property = await apiSevice.get(`/api/properties/${params.id}`);
  console.log(property);
  return (
    <div className="max-w-[1500px] mx-auto px-6 pb-6 ">
      <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
        <Image
          fill
          src={property.image_url}
          alt="cabin-image1"
          className="hover:scale-110 object-cover transition h-full w-full"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
        <div className="py-6 pr-6 col-span-3">
          <h1 className="text-4xl mb-4">{property.title}</h1>
          <span className="mb-6 block text-lg text-gray-600">
            {property.guests} Guests · {property.bedrooms} bedrooms ·
            {property.bathrooms} bathroom
          </span>
          <hr />
          <Link href={`/Landlords/${property.landlord.id}`}>
            <div className="flex py-6 items-center space-x-4">
              {property.landlord.avatar_url ? (
                <Image
                  src={property.landlord.avatar_url}
                  width={40}
                  height={40}
                  alt="landlord name"
                  className="rounded-full"
                />
              ) : (
                <div className="h-[40px] w-[40px] bg-gray-400 rounded-4xl"></div>
              )}

              <p>
                <strong>{property.landlord.name}</strong> is your host
              </p>
            </div>
          </Link>

          <hr />
          <p className="mt-6 text-lg">{property.description}</p>
        </div>
        <div>
          <ReservationSidebar property={property} userId={userId} />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailPage;
