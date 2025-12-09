import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaYoutube,
  FaFacebook,
  FaTwitch,
} from "react-icons/fa";
import { SiKick } from "react-icons/si";

const ContactLinks = () => {
  return (
    <div className="contact-links">
      <a
        href="https://www.linkedin.com/in/luis-jhonatan-cueva-rojas-88b61266/"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-link"
        aria-label="LinkedIn"
      >
        <FaLinkedin className="text-blue-700" size={30} />
      </a>
      <a
        href="https://github.com/Slinkter"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-link"
        aria-label="GitHub"
      >
        <FaGithub className="text-gray-700 dark:text-gray-300" size={30} />
      </a>
      <a
        href="https://x.com/LuchoJhony"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-link"
        aria-label="Twitter (X)"
      >
        <FaTwitter className="text-blue-400" size={30} />
      </a>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-link"
        aria-label="YouTube"
      >
        <FaYoutube className="text-red-600" size={30} />
      </a>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-link"
        aria-label="Facebook"
      >
        <FaFacebook className="text-blue-600" size={30} />
      </a>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-link"
        aria-label="Twitch"
      >
        <FaTwitch className="text-purple-600" size={30} />
      </a>
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="contact-link"
        aria-label="Kick"
      >
        <SiKick className="text-green-500" size={30} />
      </a>
    </div>
  );
};

export default ContactLinks;
