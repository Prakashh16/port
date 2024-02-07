import emailJs from "@emailjs/browser";

export const sendMessage = (payload) => {
  emailJs
    .send("service_z7u4ofb", "template_0sk9r3r", payload, "5z79DN1vQaJa5TzEN")
    .then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
      },
      (err) => {
        console.log("FAILED...", err);
      }
    );
};

