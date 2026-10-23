
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import footerConfig from "../data/footerConfig";

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <button
      className="back-to-top"
      type="button"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      aria-label={footerConfig.backToTopLabel}
      title={footerConfig.backToTopLabel}
    >
      <ArrowUp size={21} aria-hidden="true" />
    </button>
  );
}

export default BackToTop;
