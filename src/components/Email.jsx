import EmailJS from "@emailjs/browser";

function SendEmail(details) {
  //   EmailJS.init(import.meta.env.USER_ID_URI);
  EmailJS.send(
    "service_qa962ei",
    "template_cz26abt",
    {
      from_name: details.name,
      from_email: details.email,
      subject: details.subject,
      message: details.message,
    },
    { publicKey: "uwhROqWmI4wov7edK" }
  ).then(
    () => {
      console.log("SUCCESS!");
    },
    (err) => {
      console.log("FAILED", err.text);
    }
  );
}

export default SendEmail;
