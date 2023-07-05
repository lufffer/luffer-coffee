import emailjs from "@emailjs/browser";

export default async function sendForm(form: HTMLFormElement) {
  return await emailjs.sendForm(
    process.env.SERVICE,
    process.env.TEMPLATE,
    form,
    process.env.ID
  );
}
