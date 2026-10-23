import {
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Globe,
} from "lucide-react";

import footerConfig from "../data/footerConfig";
import SocialIcons from "./SocialIcons";
import FooterLinks from "./FooterLinks";
import Newsletter from "./Newsletter";
import BackToTop from "./BackToTop";
import "./Footer.css";

function Footer() {
  const {
    brand,
    contact,
    trustItems,
    paymentMethods,
    paymentLabel,
    legalLinks,
    copyrightText,
    organization,
  } = footerConfig;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: organization.name,
    logo: organization.logo,
    email: contact.email,
    telephone: contact.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.address,
      addressCountry: contact.countryCode,
    },
    sameAs: footerConfig.socials.map((social) => social.url),
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-top">
            <section
              className="footer-brand"
              aria-label={`${brand.name} brand`}
            >
              <a
                className="footer-logo"
                href={brand.homeUrl}
                aria-label={`${brand.name} home`}
              >
                {brand.logoText}
              </a>

              <p className="footer-description">
                {brand.description}
              </p>

              <SocialIcons />
            </section>

            <FooterLinks />
          </div>

          <div className="footer-middle">
            <section
              className="footer-contact"
              aria-labelledby="contact-heading"
            >
              <h3 id="contact-heading">{contact.heading}</h3>

              <p>
                <MapPin size={18} aria-hidden="true" />
                <span>{contact.address}</span>
              </p>

              <p>
                <Phone size={18} aria-hidden="true" />
                <a href={`tel:${contact.phoneLink}`}>
                  {contact.phone}
                </a>
              </p>

              <p>
                <Mail size={18} aria-hidden="true" />
                <a href={`mailto:${contact.email}`}>
                  {contact.email}
                </a>
              </p>
            </section>

            <Newsletter />
          </div>

          <section
            className="footer-trust"
            aria-label="Trust and payment information"
          >
            <div className="trust-items">
              {trustItems.map((item) => (
                <span className="trust-badge" key={item}>
                  <ShieldCheck size={17} aria-hidden="true" />
                  {item}
                </span>
              ))}
            </div>

            <div
              className="payment-methods"
              aria-label={paymentLabel}
            >
              <span className="payment-label">
                <Globe size={16} aria-hidden="true" />
                {paymentLabel}
              </span>

              <div className="payment-list">
                {paymentMethods.map((method) => (
                  <span className="payment-badge" key={method}>
                    {method}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <div className="footer-bottom">
            <p>
              © {new Date().getFullYear()} {brand.name}.{" "}
              {copyrightText}
            </p>

            <nav
              className="legal-links"
              aria-label="Legal information"
            >
              {legalLinks.map((link) => (
                <a href={link.url} key={link.label}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </footer>

      <BackToTop />
    </>
  );
}

export default Footer;
