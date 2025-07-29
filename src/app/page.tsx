import Link from "next/link";

export default function Home() {
  return (
    <div
      className="grid lg:flex  items-center lg:justify-around gap-20 lg:gap-0 py  
      text-center lg:text-left
    bg-[url('/assets/home/background-home-mobile.jpg')]
    md:bg-[url('/assets/home/background-home-tablet.jpg')] 
    lg:bg-[url('/assets/home/background-home-desktop.jpg')] bg-no-repeat
    bg-cover"
    >
      <div className=" pb-12">
        <p className="text-2xl font-extralight text-[#D0D6F9]">
          SO&#44; YOU WANT TO TRAVEL TO
        </p>
        <h2 className="text-[100px] lg:text-9xl lg:pb-10 font-bellefari">
          SPACE
        </h2>
        <div className="flex justify-center">
          <p className="max-w-[400px]  font-extralight text-[#D0D6F9]">
            Let&#39;s face it&#59; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back&#44; and relax because we&#39;ll give you a truly out
            of this world experience!
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <Link
          href="/destination"
          className="bg-white text-black size-52 lg:size-60 flex justify-center items-center
        rounded-full text-3xl hover:animate-ping-shadow1 font-bellefari"
        >
          EXPLORE
        </Link>
      </div>
    </div>
  );
}
