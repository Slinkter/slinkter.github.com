import { FaFacebook, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const ContactLinks = () => {
    return (
        <div className="flex justify-center space-x-6 md:space-x-10 m-4 mb-10">
            <a
                href="https://www.linkedin.com/in/luis-jhonatan-cueva-rojas-88b61266/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaLinkedin className="text-blue-700" size={30} />
            </a>
            <a
                href="https://github.com/Slinkter"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaGithub className="text-gray-700" size={30} />
            </a>
            <a
                href="https://x.com/LuchoJhony"
                target="_blank"
                rel="noopener noreferrer"
            >
                <FaTwitter className="text-blue-400" size={30} />
            </a>
        </div>
    );
};

export default ContactLinks;
