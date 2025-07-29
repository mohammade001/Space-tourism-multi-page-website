"use client";
import { dataTechnologyType } from "@/type";
import Image from "next/image";
import { useEffect, useState } from "react";

function Page() {
  const [dataTechnology, setDataTechnology] = useState<dataTechnologyType[]>(
    []
  );
  const [postTechnology, setPostTechnology] = useState<dataTechnologyType>({
    name: "Launch vehicle",
    images: {
      portrait: "/assets/technology/image-launch-vehicle-portrait.jpg",
      landscape: "/assets/technology/image-launch-vehicle-landscape.jpg",
    },
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  });

  useEffect(() => {
    async function dataTechnology() {
      try {
        const result = await fetch(
          "http://space-tourism-multi-page-website.vercel.app/api/dataTechnology"
        );
        if (!result.ok) {
          throw new Error("error in result api");
        }
        const data: dataTechnologyType[] = await result.json();
        setDataTechnology(data);
      } catch (error){
          console.error("API fetch error:", error);
          }
    }
    dataTechnology();
  }, []);
  

  return (
    <div
      className=" py md:pl-12 lg:pl-36 
    bg-[url('/assets/technology/background-technology-mobile.jpg')]
    sm:bg-[url('/assets/technology/background-technology-tablet.jpg')]
    lg:bg-[url('/assets/technology/background-technology-desktop.jpg')] bg-no-repeat
    bg-cover"
    >
      <p className="text-2xl font-extralight pb-10 md:pb-14 text-center md:text-start">
        <span className="text-[#D0D6F9]">03 </span>
        Space launch 101
      </p>
      <div
        className=" grid gap-5 md:flex md:max-w-full md:flex-row-reverse md:justify-between 
            md:gap-24 lg:gap-36 xl:gap-40"
      >
        <div className="flex items-center justify-center md:max-w-[1000px] ">
          <Image
            src={postTechnology.images.landscape}
            alt=""
            width={800}
            height={800}
            className=" md:hidden"
          />
          <Image
            src={postTechnology.images.portrait}
            alt=""
            width={500}
            height={500}
            className=" hidden md:block"
          />
        </div>

        <div className="md:flex md:gap-6 md:items-center text-center md:text-start">
          <div className=" flex justify-center  md:flex-col gap-10 pb-6 font-bellefari">
            {dataTechnology.map((item, index) => (
              <span
                key={item.name}
                onClick={() => setPostTechnology(item)}
                className={`size-14 border-gray-700 border rounded-full flex justify-center items-center 
                  text-2xl cursor-pointer 
                    ${
                      postTechnology?.name == item.name
                        ? "bg-white text-black"
                        : "bg-transparent hover:bg-gray-400"
                    }
                         `}
              >
                {index + 1}
              </span>
            ))}
          </div>
          <div className="">
            <p className="text-xl text-[#D0D6F9]">THE TERMINOLOGY...</p>
            <p className="text-4xl md:text-5xl pb-4 font-bellefari">
              {postTechnology.name.toUpperCase()}
            </p>
            <div className="flex justify-center px-8 md:px-0 ">
              <p className="max-w-[500px] text-[#D0D6F9] font-extralight pb-10">
                {postTechnology.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
