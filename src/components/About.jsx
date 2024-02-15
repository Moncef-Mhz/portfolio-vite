// eslint-disable-next-line no-undef
function About() {
  return (
    <div
      id="about"
      className=" bg-background space-y-5 md:grid md:grid-cols-4 w-full px-20  py-36"
    >
      <h1 className="lg:text-6xl md:text-5xl text-4xl font-bold text-text">
        About
      </h1>
      <div className="md:col-span-3 space-y-10">
        <p className="lg:text-2xl md:text-xl text-lg text-secondary md:tracking-wide leading-normal">
          I am Moncef Meharzi, a proficient Web Designer & Developer dedicated
          to crafting captivating digital experiences. With a blend of
          creativity and technical expertise, I specialize in designing and
          developing websites that not only look stunning but also function
          seamlessly.
        </p>
        <div className="space-y-5">
          <h1 className="lg:text-2xl md:text-xl text-lg text-secondary md:tracking-wide leading-normal">
            Worked as Freelancer on
          </h1>
          <div className="flex items-center gap-10">
            <img src="/Upwork.png" alt="" className="w-[50px]" />
            <img src="/Fiverr.png" alt="" className="w-[40px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
