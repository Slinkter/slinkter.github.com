import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaYoutube,
  FaFacebook,
  FaTwitch,
} from "react-icons/fa";
import { SiKick } from "react-icons/si";

const SOCIAL_LINKS = [
  {
    href: "https://www.linkedin.com/in/luis-jhonatan-cueva-rojas-88b61266/",
    icon: FaLinkedin,
    label: "LinkedIn",
    color: "text-blue-600",
  },
  {
    href: "https://github.com/Slinkter",
    icon: FaGithub,
    label: "GitHub",
    color: "text-content-muted",
  },
  {
    href: "https://x.com/LuchoJhony",
    icon: FaTwitter,
    label: "Twitter (X)",
    color: "text-sky-400",
  },
  { href: "#", icon: FaYoutube, label: "YouTube", color: "text-red-500" },
  { href: "#", icon: FaFacebook, label: "Facebook", color: "text-blue-500" },
  { href: "#", icon: FaTwitch, label: "Twitch", color: "text-purple-500" },
  { href: "#", icon: SiKick, label: "Kick", color: "text-green-500" },
];

/**
 * ContactLinks Component
 *
 * Renders a row of social/contact icon links.
 * Pure Tailwind — uses design tokens for backgrounds and borders.
 *
 * @component
 * @returns {React.JSX.Element}
 */
const ContactLinks = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
      {SOCIAL_LINKS.map(({ href, icon: Icon, label, color }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 bg-surface-elevated rounded-full shadow-sm hover:shadow-md transition-all hover:-translate-y-1 border border-separator focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary"
          aria-label={label}
        >
          <Icon className={color} size={30} />
        </a>
      ))}
    </div>
  );
};

export default ContactLinks;
