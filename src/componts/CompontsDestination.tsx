"use client";
import { dataDestinationsType } from "@/type";
import Image from "next/image";
import React, { useState } from "react";

interface CompontsDestinationType{
    post:dataDestinationsType[]
}
function CompontsDestination({post}:CompontsDestinationType) {
    const [itemDestination, setItemDestination] =
      useState<dataDestinationsType>(post[0]);
  return (
    <>
      <div
        className=" grid gap-5 md:flex md:max-w-full md:justify-between 
      md:gap-24 lg:gap-36 xl:gap-40"
      >
        <div className="flex items-center justify-center md:max-w-[550px]">
          <Image
            src={itemDestination.images.png}
            alt=""
            width={400}
            height={400}
          />
        </div>

        <div className="text-center md:text-start">
          <div className="text-xl font-extralight flex justify-center md:justify-start gap-10 pb-6 cursor-pointer">
            {post.map((item) => (
              <span
                key={item.name}
                onClick={() => setItemDestination(item)}
                className={`text-[15px]  ${
                  item.name == itemDestination.name
                    ? "border-b-2 border-white"
                    : "hover:border-b hover:border-gray-400"
                }`}
              >
                {item.name.toUpperCase()}
              </span>
            ))}
          </div>
          <div className="">
            <h1 className="text-8xl pb-6 font-bellefari">
              {itemDestination.name.toUpperCase()}
            </h1>
            <div className="flex justify-center px-8 md:px-0 ">
              <p className="max-w-[500px] text-[#D0D6F9] font-extralight pb-10 border-b border-[#D0D6F9]">
                {itemDestination.description}
              </p>
            </div>
            <div className="md:flex items-center gap-16">
              <div className="py-5">
                <p className="font-extralight">AVG. DISTANCE</p>
                <p className="text-3xl font-bellefari">
                  {itemDestination.distance.toUpperCase()}
                </p>
              </div>
              <div className="">
                <p className="font-extralight">EST. TRAVEL TIME</p>
                <p className="text-3xl font-bellefari">
                  {itemDestination.travel.toUpperCase()}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompontsDestination;
