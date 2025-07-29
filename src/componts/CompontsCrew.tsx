"use client"
import { dataCrewType } from '@/type';
import Image from 'next/image'
import React, { useState } from 'react'

interface CompontsCrewType{
  postCrew:dataCrewType[]
}
function CompontsCrew({postCrew}:CompontsCrewType) {
  const [itemCrew, setItemCrew] =
        useState<dataCrewType>(postCrew[0]);
  return (
    <>
      <div
        className=" grid gap-5 md:flex md:max-w-full md:flex-row-reverse md:justify-between 
          md:gap-24 lg:gap-36 xl:gap-40"
      >
        <div
          className="flex items-center justify-center md:max-w-[550px] 
            "
        >
          <Image
            src={itemCrew.images.png}
            alt=""
            width={400}
            height={400}
            className="border-b border-gray-400 px-3"
          />
        </div>

        <div className="text-center md:text-start">
          <div className="md:hidden flex justify-center md:justify-start gap-10 pb-6">
            {postCrew.map((item) => (
              <span
                key={item.name}
                onClick={() => setItemCrew(item)}
                className={`size-4 rounded-full block cursor-pointer 
                  ${
                    itemCrew.name == item.name
                      ? "bg-white animate-ping-shadow2"
                      : "bg-gray-700 hover:bg-gray-400"
                  } `}
              ></span>
            ))}
          </div>
          <div className="">
            <p className="text-2xl text-[#D0D6F9] pb-4 font-bellefari">
              {itemCrew.role.toUpperCase()}
            </p>
            <h1 className="text-4xl pb-6 font-bellefari">
              {itemCrew.name.toUpperCase()}
            </h1>
            <div className="flex justify-center px-8 md:px-0 ">
              <p className="max-w-[500px] text-[#D0D6F9] font-extralight pb-10">
                {itemCrew.bio}
              </p>
            </div>
          </div>
          <div className="hidden md:flex justify-center md:justify-start gap-10 pb-6">
            {postCrew.map((item) => (
              <span
                key={item.name}
                onClick={() => setItemCrew(item)}
                className={`size-4 rounded-full block cursor-pointer 
                  ${
                    itemCrew.name == item.name
                      ? "bg-white animate-ping-shadow2"
                      : "bg-gray-700 hover:bg-gray-400"
                  } `}
              ></span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default CompontsCrew