function Hero() {
  return (
    <div
      id="home"
      className="relative h-screen  flex items-center justify-center flex-col space-y-10 w-auto"
    >
      <div className="text-center w-[90%]">
        <h1 className="text-width  font-bold text-text resize ">
          Hey,{" "}
          <span className="md:text-2xl sm:text-xl text-lg ">
            I&rsquo;m Moncef
          </span>
        </h1>
        <h1 className="text-width  font-bold text-text text-center">
          WEB{" "}
          <span className="gradient1 animate-spin select-none">DESIGNER</span> &{" "}
          <span className="gradient2 select-none">DEVELOPER</span>
        </h1>
      </div>
      <div className="text-text -rotate-90 text-sm  gap-2 absolute flex  items-center h-full  left-14  ">
        <div className="relative">
          <div className="w-3 absolute h-3 rounded-full bg-green-500 animate-ping"></div>
          <div className="w-3 h-3 rounded-full bg-green-500 "></div>
        </div>
        <h1>Online</h1>
      </div>
      <div className="  duration-150 flex items-end absolute justify-center left-0 bottom-10  w-full ">
        <div className="w-[40px] h-[80px] rounded-full group cursor-pointer duration-150 flex justify-center py-[5px]  border-[5px]  ">
          <div className="w-[20px] h-[20px] border-[5px]  group-hover:translate-y-[40px] rounded-full  duration-150"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
