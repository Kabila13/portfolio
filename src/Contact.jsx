
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
        <div id="contact" className="text-center px-5 sm:px-8 md:px-12 lg:px-20 py-16 md:py-24">
            <p className="font-extrabold text-3xl sm:text-4xl">Let's Connect</p>
            <p className="pt-5 text-gray-700 text-sm sm:text-base">Drop me a message or connect with me on social media</p>
            <form ref={form} onSubmit={sendEmail} className="flex shadow-lg flex-col border rounded-xl border-gray-400 w-full max-w-lg mx-auto mt-10 p-4 sm:p-6">
                <input type="text" name="name" required placeholder="Name" className="mt-4 w-full border border-gray-400 rounded-md p-3 hover:border-black focus:outline-emerald-700"/>
                <input type="email" name="email" required placeholder="E-mail" className="mt-4 w-full border border-gray-400 rounded-md p-3 hover:border-black focus:outline-emerald-700"/>
                <textarea name="message" required placeholder="Your Message" rows="5" className="mt-4 w-full border border-gray-400 rounded-md p-3 hover:border-black focus:outline-emerald-700"></textarea>
                <button type="submit" className="border-2 border-emerald-700 mt-6 mx-2 sm:mx-5 text-emerald-800 hover:bg-emerald-700 hover:text-white py-3 rounded-full font-semibold transition duration-300"> Send Message</button>
            </form>
            <p className="mt-3 text-emerald-900 font-bold text-xl">{status}</p>
            <p className="mt-10 mb-8 text-base sm:text-lg text-gray-600">Or connect directly</p>
            <div className="flex flex-wrap justify-center gap-4">
                <a href="https://www.linkedin.com/in/kabila-m-56986b276" target="_blank" rel="noopener noreferrer" className="bg-emerald-600 text-white px-5 sm:px-6 py-2 rounded-full hover:bg-emerald-800 shadow-lg transition duration-300 font-semibold">LinkedIn</a>
                <a href="https://wa.me/919025914764" target="_blank" rel="noopener noreferrer" className="bg-emerald-600 text-white px-5 sm:px-6 py-2 rounded-full hover:bg-emerald-800 shadow-lg transition duration-300 font-semibold">Whatsapp</a>
                <a href="https://www.instagram.com/_kabila_13" target="_blank" rel="noopener noreferrer"                    className="bg-emerald-600 text-white px-5 sm:px-6 py-2 rounded-full hover:bg-emerald-800 shadow-lg transition duration-300 font-semibold"> Instagram</a>
            </div>
        </div>
    );
}

export default Contact;
