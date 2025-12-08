import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

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
    </div>
  );
};

export default ContactLinks;
