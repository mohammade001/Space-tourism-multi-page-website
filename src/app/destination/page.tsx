import CompontsDestination from "@/componts/CompontsDestination";
import { dataDestinations } from "@/constan";
import { dataDestinationsType } from "@/type";

async function page() {
  const post: dataDestinationsType[] = await dataDestinations();

  
  return (
    <div
      className=" py  md:px-12 lg:px-36 
    bg-[url('/assets/destination/background-destination-mobile.jpg')]
    sm:bg-[url('/assets/destination/background-destination-tablet.jpg')]
    lg:bg-[url('/assets/destination/background-destination-desktop.jpg')] bg-no-repeat
    bg-cover"
    >
      <p className="text-2xl font-extralight pb-10 md:pb-14 text-center md:text-start">
        <span className="text-[#D0D6F9]">01 </span>
        PICK YOUR DESTINATION
      </p>
      <CompontsDestination post={post}/>
    </div>
  );
}

export default page;
