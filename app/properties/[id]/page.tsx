import Image from "next/image";
import ReservationSidebar from "@/app/components/Properties/ReservationSidebar";
import apiSevice from "@/app/apiSevice";

const PropertyDetailPage = async ({ params }: { params: { id: string } }) => {
  const property = await apiSevice.get(`/api/properties/${params.id}`);
  console.log(property)
  return (
    <div className="max-w-[1500px] mx-auto px-6 pb-6 ">
      <div className="w-full h-[64vh] overflow-hidden rounded-xl relative">
        <Image
          fill
          src={property.image_url}
          alt="cabin-image1"
          className="hover:scale-110 object-cover transition h-full w-full"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-4">
        <div className="py-6 pr-6 col-span-3">
          <h1 className="text-4xl mb-4">{property.title}</h1>
          <span className="mb-6 block text-lg text-gray-600">
            {property.guests} Guests · {property.bedrooms} bedrooms ·{" "}
            {property.bathrooms} bathroom
          </span>
          <hr />
          <div className="flex py-6 items-center space-x-4">
            {property.landlord.avatar_url && (
              <Image
                src={property.landlord.avatar_url}
                width={40}
                height={40}
                alt="ProfilePicture"
                className="rounded-full"
              />
            )}

            <p>
              <strong>{property.landlord.name}</strong> is your host
            </p>
          </div>
          <hr />
          <p className="mt-6 text-lg">{property.description}</p>
        </div>
        <div>
          <ReservationSidebar property={property} />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetailPage;
