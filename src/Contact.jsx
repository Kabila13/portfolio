import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";


function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_zj4886g",
      "template_9f9u95e",
      form.current,
      {
        publicKey: "fT9qtfwL5K8Ue8Dzq",
      }
    )
    .then(() => {
        alert("Message sent successfully!");
        form.current.reset();
    })
    .catch(() => {
       alert("Failed to send message.");
    });
};
    return (
      <div id="contact" className="text-center pt-40 pb-35">
        <p className="font-extrabold text-4xl">
          Let's Connect
        </p>
        <p className="pt-5  text-gray-700">Drop me a message or connect with me on social media</p>
        <form ref={form} onSubmit={sendEmail} className="flex shadow-lg flex-col border-1 rounded-xl  border-gray-400 w-100 m-auto mt-10 ">
          <input type="text" name="name" required placeholder="Name" className="border hover:border-black hover:border-2 hover:cursor-pointer mt-4 w-90 ml-3 border-1 border-gray-400 rounded-md p-2"></input>
          <input type="email"name="email"required  placeholder="E-mail" className="border mt-4 w-90 ml-3 border-1 hover:border-black hover:border-2 hover:cursor-pointer border-gray-400 rounded-md p-2"></input>
          <textarea name="message" required placeholder="Your Message" className="border mt-4 w-90 ml-3 border-1 border-gray-400 hover:border-black hover:border-2 hover:cursor-pointer rounded-md p-2"></textarea>
          <button type="submit" className="border-2 border-emerald-700 m-5 text-emerald-800 hover:bg-emerald-700 hover:text-white py-2 hover:cursor-pointer rounded-full font-semibold">Send Message</button>
        </form>

        <p className="mt-3 text-emerald-900  font-bold text-xl">{status}</p>
        <p className="mt-10 mb-8 text-lg text-gray-600">Or connect directly</p>
        <a href="https://www.linkedin.com/in/kabila-m-56986b276" className="bg-emerald-600 text-white border px-6 py-2 mr-10 rounded-full hover:bg-emerald-800 shadow-2xl hover:transition duration-100  hover:text-white font-semibold">LinkedIn</a>
        <a href="https://wa.me/919025914764" className="bg-emerald-600 text-white border  px-6 py-2 mr-10 rounded-full hover:bg-emerald-800 shadow-2xl hover:transition duration-100  hover:text-white font-semibold">Whatsapp</a>
        <a href="https://www.instagram.com/_kabila_13" className="bg-emerald-600 text-white border  px-6 py-2 mr-10 rounded-full hover:bg-emerald-800 shadow-2xl hover:transition duration-100 hover:text-white font-semibold"> Instagram</a>
      </div>
    )
  }

  export default Contact;