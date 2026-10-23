
import footerConfig from "../data/footerConfig";

const socialLabels = {
  Instagram: "IG",
  LinkedIn: "in",
  Facebook: "f",
  X: "X",
  YouTube: "▶",
};

function SocialIcons() {
  return (
    <nav className="social-icons" aria-label="Social media links">
      {footerConfig.socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit our ${social.name} profile`}
          title={social.name}
        >
          <span aria-hidden="true">
            {socialLabels[social.name] || social.name.slice(0, 2)}
          </span>
        </a>
      ))}
    </nav>
  );
}

export default SocialIcons;
