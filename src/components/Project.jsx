import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import { projects } from "../utils";

function Project() {
  return (
    <div
      id="work"
      className="bg-background space-y-10  md:px-20 px-10 py-20 md:py-28"
    >
      <div className="flex items-center text-white gap-5">
        <h1 className="lg:text-6xl md:text-5xl text-4xl font-bold text-text ">
          Projects
        </h1>
        {/* <FiCornerRightDown size={45} /> */}
      </div>
      {/* WideScreen */}
      <div className="hidden md:block">
        <div className="flex flex-col">
          {projects.map((item) => (
            <div
              id="project"
              key={item.id}
              className="border-b flex cursor-pointer relative items-center gap-4 group hover:bg-secondary justify-between first:border-t px-5 duration-100 py-8"
            >
              <img
                src={item.img}
                alt={item.title}
                id="img"
                className={`absolute z-10  left-[600px] shadow-lg duration-300 ease-linear w-[300px] rounded-md hidden group-hover:block`}
              />
              <div className="flex items-center justify-center gap-4">
                <div className="flex items-center justify-center gap-2">
                  {item.icon.map((ic) => (
                    <div
                      key={ic.icon}
                      className="text-text group-hover:text-background text-2xl"
                    >
                      <ic.icon />
                    </div>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-7 bg-text group-hover:bg-background w-[1px]"></div>
                  <h1 className="text-text  group-hover:text-background text-xl capitalize">
                    {item.title}
                  </h1>
                  <div className="h-[2px] w-5 bg-text group-hover:bg-background"></div>
                  <h1 className="text-text  group-hover:text-background text-xl  ">
                    {item.description}
                  </h1>
                </div>
              </div>
              <div className="text-xl text-text group-hover:text-background hidden group-hover:block">
                <HiOutlineArrowTopRightOnSquare />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/*MobileScreen */}
      <div className="md:hidden grid gap-4 grid-cols-1 ">
        {projects.map((item) => (
          <div key={item.id} className="text-text p-2 rounded bg-[#2b2b2b]">
            <div className="overflow-hidden ">
              <img
                src={item.img}
                alt={item.title}
                className="rounded-sm  select-none hover:scale-110 duration-150"
              />
            </div>
            <div className="p-1 flex item-center justify-between">
              <h1 className="text-lg capitalize">{item.title}</h1>
              <h1 className="text-lg capitalize">{item.description}</h1>
            </div>
            <div className="flex px-1 my-2 flex-wrap gap-2">
              {item.icon.map((ic) => (
                <h1
                  key={ic.name}
                  className="bg-background hover:text-text cursor-pointer px-2 py-1 rounded-md text-text/60 capitalize"
                >
                  {ic.name}
                </h1>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
