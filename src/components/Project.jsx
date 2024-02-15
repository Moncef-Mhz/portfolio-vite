import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import { projects } from "../utils";
// import {  useState } from "react";

function Project() {
  // const [coords, setCoords] = useState({ x: 0, y: 0 });
  // const mouseMove = (e) => {
  //   let rect = e.currentTarget.getBoundingClientRect();
  //   let x = e.clientX - rect.left;
  //   let y = e.clientY - rect.top;

  //   setCoords({ x: x, y: y });
  // };

  return (
    <div id="work" className="bg-background space-y-10  px-20 py-28">
      <div className="flex items-center text-white gap-5">
        <h1 className="text-6xl font-bold text-text ">Projects</h1>
        {/* <FiCornerRightDown size={45} /> */}
      </div>
      <div className="flex flex-col">
        {projects.map((item) => (
          <div
            id="project"
            // onMouseEnter={mouseMove}
            key={item.id}
            className="border-b flex cursor-pointer relative items-center gap-4 group hover:bg-secondary justify-between first:border-t px-5 duration-100 py-8"
          >
            <img
              src={item.img}
              alt={item.title}
              id="img"
              // style={{ top: coords.y - 100, left: coords.x }}
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
  );
}

export default Project;
