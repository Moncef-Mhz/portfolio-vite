// eslint-disable-next-line no-undef
// import Upwork from "public/Upwork.png";
function About() {
  return (
    <div
      id="about"
      className=" bg-background grid grid-cols-4 w-full px-20 py-28"
    >
      <h1 className="text-6xl font-bold text-text">About</h1>
      <div className="col-span-3 space-y-10">
        <p className="text-3xl text-secondary tracking-wider leading-normal">
          I am Moncef Meharzi, a proficient Web Designer & Developer dedicated
          to crafting captivating digital experiences. With a blend of
          creativity and technical expertise, I specialize in designing and
          developing websites that not only look stunning but also function
          seamlessly.
        </p>
        <div className="space-y-5">
          <h1 className="text-3xl text-secondary">Worked as Freelancer on</h1>
          <div className="flex items-center gap-10">
            <img src="/Upwork.png" alt="" />
            <img src="/Fiverr.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
