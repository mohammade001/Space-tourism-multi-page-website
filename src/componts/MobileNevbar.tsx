import { MobileNevbarType } from "@/type";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";

function MobileNevbar({ isOpen, fuClose, listPages,urlPage }: MobileNevbarType) {
  return (
    <>
      <Transition as={Fragment} show={isOpen}>
        <Dialog as="div" onClose={fuClose} className="md:hidden ">
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <DialogBackdrop
              className="fixed inset-0 backdrop-blur-lg"
            />
          </TransitionChild>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-500"
            enterFrom=" top-[-80%]"
            enterTo=" top-[0%]"
            leave="ease-in duration-300"
            leaveFrom=" top-[0%]"
            leaveTo=" top-[-80%]"
          >
            <div className="fixed bg-gray-500/40 w-44 h-[50vh] px-7 py-8 top-0 right-0">
              <DialogPanel className="">
                <div className="text-right">
                  <button className="cursor-pointer" onClick={fuClose}>
                    <Image
                      src="/assets/shared/icon-close.svg"
                      alt="close"
                      width={15}
                      height={15}
                    />
                  </button>
                </div>
                <div className="grid">
                  {listPages.map((item) => (
                    <Link
                    onClick={fuClose}
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
              </DialogPanel>
            </div>
          </TransitionChild>
        </Dialog>
      </Transition>
    </>
  );
}

export default MobileNevbar;
