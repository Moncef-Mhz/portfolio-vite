import { useState } from "react";
import SendEmail from "./Email";
import { TbSend } from "react-icons/tb";

function Contact() {
  const [details, setDetails] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleDetailsChange = (e) => {
    const { name, value } = e.target;

    setDetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    console.log(details);
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    if (!details.email || !details.message || !details.name || !details.subject)
      return;
    SendEmail(details);
  };

  return (
    <div
      id="contact"
      className=" bg-secondary space-y-20 px-10 md:px-20 py-16 md:flex md:items-center md:justify-between "
    >
      <div className="space-y-5 md:space-y-10 w-full">
        <h1 className="lg:text-6xl md:text-5xl text-4xl font-bold text-black md:text-start text-center">
          I&rsquo;ve been waiting <br /> for you{" "}
        </h1>
        <p className="md:text-start text-center text-base text-black">
          I went to hear from you, Let me know how i can help
        </p>
      </div>
      <div className="space-y-5  w-full ">
        <h1 className="text-center text-xl  ">Send me a message</h1>
        <form
          onSubmit={handleSendEmail}
          action=""
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            name="name"
            onChange={handleDetailsChange}
            value={details.name}
            placeholder="Full Name"
          />
          <input
            type="email"
            name="email"
            onChange={handleDetailsChange}
            value={details.email}
            placeholder="Email"
          />
          <input
            type="text"
            name="subject"
            onChange={handleDetailsChange}
            value={details.subject}
            placeholder="Subject"
          />
          {/* <input type="text" placeholder="Company" /> */}
          <textarea
            name="message"
            value={details.message}
            onChange={handleDetailsChange}
            id="desc"
            rows="5"
            placeholder="message"
          ></textarea>
          <button
            onSubmit={handleSendEmail}
            disabled={
              !details.email ||
              !details.message ||
              !details.name ||
              !details.subject
            }
            className="w-full flex items-center justify-center gap-3 text-center bg-background text-text rounded-md disabled:cursor-not-allowed disabled:opacity-75 py-2"
          >
            Send <TbSend size={20} />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
