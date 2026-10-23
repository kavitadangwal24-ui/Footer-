import { useState } from "react";
import { ChevronDown } from "lucide-react";
import footerConfig from "../data/footerConfig";

function FooterLinks() {
  const [openColumn, setOpenColumn] = useState(null);

  return (
    <div className="footer-links">
      {footerConfig.linkColumns.map((column, index) => {
        const isOpen = openColumn === index;

        return (
          <nav
            className={`footer-link-column ${isOpen ? "is-open" : ""}`}
            key={column.title}
            aria-label={column.title}
          >
            <button
              className="footer-link-heading"
              type="button"
              aria-expanded={isOpen}
              onClick={() =>
                setOpenColumn(isOpen ? null : index)
              }
            >
              <span>{column.title}</span>

              <ChevronDown
                className="footer-accordion-icon"
                size={18}
                aria-hidden="true"
              />
            </button>

            <ul className="footer-link-list">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a href={link.url}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        );
      })}
    </div>
  );
}

export default FooterLinks;
