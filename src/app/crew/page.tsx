import CompontsCrew from '@/componts/CompontsCrew';
import { dataCrew } from '@/constan';
import { dataCrewType } from '@/type';
import React from 'react'

async function page() {
    const postCrew: dataCrewType[] = await dataCrew();
  
  return (
    <div
      className=" py xl:!pb-0 md:px-12 lg:px-36 
    bg-[url('/assets/crew/background-crew-mobile.jpg')]
    sm:bg-[url('/assets/crew/background-crew-tablet.jpg')]
    lg:bg-[url('/assets/crew/background-crew-desktop.jpg')] bg-no-repeat
    bg-cover"
    >
      <p className="text-2xl font-extralight pb-10 md:pb-14 text-center md:text-start">
        <span className="text-[#D0D6F9]">02 </span>
        Meet your crew
      </p>
      <CompontsCrew postCrew={postCrew}/>
    </div>
  );
}

export default page