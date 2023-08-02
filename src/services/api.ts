import emailjs from "@emailjs/browser";

export default async function sendForm(form: HTMLFormElement) {
  return await emailjs.sendForm(
    "service_erzi7xl",
    "template_1ps1s56",
    form,
    "qIcdoN51ll0v6xXgl"
  );
}
