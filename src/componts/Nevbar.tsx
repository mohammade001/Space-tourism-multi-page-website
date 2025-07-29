"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import MobileNevbar from "./MobileNevbar";
import { listPagesType } from "@/type";

function Nevbar() {
  const listPages:listPagesType[] = [
    {
      number: "00",
      name: "HOME",
      link: "/",
    },
    {
      number: "01",
      name: "DESTINATION",
      link: "/destination",
    },
    {
      number: "02",
      name: "CREW",
      link: "/crew",
    },
    {
      number: "03",
      name: "TECHNOLOGY",
      link: "/technology",
    },
  ];
  const urlPage = usePathname();
  const [open, setOpen] = useState<boolean>(false)

  return (
    <div className="py-10 pl-10 flex items-center w-full  md:gap-12 absolute top-0 left-0">
      <div className="">
        <Link href="/">
          <Image
            src="/assets/shared/logo.svg"
            alt="logo"
            width={45}
            height={45}
          />
        </Link>
      </div>
      <div className="flex items-center w-full relative pl-0 md:pl-[250px] xl:pl-[400px] :">
        <div className="w-0 hidden xl:block xl:w-[450px]  z-20 h-[1px] bg-gray-500 absolute left-0" />
        <div
          className="hidden bg-gray-500/40 backdrop-blur-sm py-6  lg:pr-28 lg:pl-14 px-4 w-full md:flex justify-around"
        >
          {listPages.map((item) => (
            <Link
              href={item.link}
              key={item.number}
              className={`py-4 ${
                item.link == urlPage ? "border-b-2 border-white" : ""
              }`}
            >
              <span className="hidden xl:inline">{item.number}</span>{" "}
              {item.name}
            </Link>
          ))}
        </div>
      </div>
      <button
        className="md:hidden cursor-pointer pr-10"
        onClick={() => {
          setOpen(true);
        }}
      >
        <Image
          src="/assets/shared/icon-hamburger.svg"
          alt="hamburger"
          width={45}
          height={45}
        />
      </button>
      <MobileNevbar
        isOpen={open}
        fuClose={() => {
          setOpen(false);
        }}
        listPages={listPages}
        urlPage={urlPage}
      />
    </div>
  );
}

export default Nevbar;
