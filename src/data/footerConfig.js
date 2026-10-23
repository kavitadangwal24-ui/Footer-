
const footerConfig = {
  brand: {
    name: "Elevate",
    logoText: "Elevate.",
    description:
      "We create thoughtful digital experiences that help businesses grow, connect with people, and build lasting relationships.",
    homeUrl: "#home",
  },

  socials: [
    { name: "Instagram", url: "https://www.instagram.com/" },
    { name: "LinkedIn", url: "https://www.linkedin.com/" },
    { name: "Facebook", url: "https://www.facebook.com/" },
    { name: "X", url: "https://x.com/" },
    { name: "YouTube", url: "https://www.youtube.com/" },
  ],

  linkColumns: [
    {
      title: "Explore",
      links: [
        { label: "Home", url: "#home" },
        { label: "About Us", url: "#about" },
        { label: "Our Services", url: "#services" },
        { label: "Our Projects", url: "#projects" },
        { label: "Contact Us", url: "#contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Latest Articles", url: "#articles" },
        { label: "Guides", url: "#guides" },
        { label: "FAQs", url: "#faq" },
        { label: "Help Center", url: "#help" },
        { label: "Community", url: "#community" },
      ],
    },
    {
      title: "Customer Support",
      links: [
        { label: "Shipping Information", url: "#shipping" },
        { label: "Returns & Refunds", url: "#returns" },
        { label: "Track Your Order", url: "#track-order" },
        { label: "Contact Support", url: "mailto:hello@example.com" },
      ],
    },
  ],

  contact: {
    heading: "Get in touch",
    address: "Your business address, India",
    phone: "+91 00000 00000",
    phoneLink: "+910000000000",
    email: "hello@example.com",
    countryCode: "IN",
  },

  newsletter: {
    title: "Stay in the loop",
    description:
      "Get useful updates, fresh ideas, and news delivered straight to your inbox.",
    placeholder: "Enter your email address",
    emailLabel: "Email address",
    buttonText: "Subscribe",
    loadingText: "Subscribing...",
    successMessage: "Thanks for subscribing! You're on the list.",
    errorMessage: "Please enter a valid email address.",
  },

  trustItems: [
    "Secure Payments",
    "Trusted Service",
    "Easy Returns",
  ],

  paymentLabel: "Payment methods",
  paymentMethods: ["UPI", "Visa", "Mastercard", "RuPay"],

  legalLinks: [
    { label: "Privacy Policy", url: "#privacy" },
    { label: "Terms & Conditions", url: "#terms" },
    { label: "Cookie Policy", url: "#cookies" },
  ],

  copyrightText: "All rights reserved.",
  backToTopLabel: "Back to top",

  organization: {
    name: "Elevate",
    logo: "/logo.png",
  },
};

export default footerConfig;
