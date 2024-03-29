import { techIcons } from "../utils";
function Tech() {
  return (
    <div
      id="tech"
      className="md:px-20 px-10 py-36 w-full  space-y-10 bg-secondary"
    >
      <h1 className="lg:text-6xl md:text-5xl text-4xl font-bold text-background">
        Tech & Use
      </h1>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {techIcons.map((item) => (
          <div
            key={item.name}
            className="bg-background group relative  shadow-2xl flex flex-col items-center gap-4 duration-150 overflow-hidden justify-center  h-[140px] w-[140px] rounded-lg"
          >
            <item.icon
              size={50}
              color="white"
              className="group-hover:-translate-y-5 translate-y-0 duration-200"
            />
            <div className="translate-y-[200px] absolute bottom-10 group-hover:translate-y-5 uppercase opacity-0 group-hover:opacity-100 duration-200 text-text">
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tech;
