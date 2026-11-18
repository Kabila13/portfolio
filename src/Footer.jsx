import { Code, Globe, Mail } from "lucide-react";
function Footer() {
    return (
        <div className="relative bg-emerald-950 text-gray-200  text-center ">
            <div className="p-20">
            <h2 className='text-3xl font-extrabold'>KABILA M</h2>
            <p className="text-lg">Aspiring Developer</p>

            <div className="flex gap-15 justify-center mt-10">
                <a href="https://www.linkedin.com/in/kabila-m-56986b276"><Globe size={27}/></a>
            <a href="https://github.com/Kabila13/">< Code size={27}/></a>
            
            <a href="mailto:kabimano13@gmail.com"><Mail size={27} /></a>
        </div>
        </div>
        <p className="absolute bottom-0 w-full text-center"> © 2026 Kabila M. Thanks for visiting!</p>
        </div>
    )
}

export default Footer;