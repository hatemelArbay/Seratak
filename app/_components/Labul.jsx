"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

const ScrollAwareButton = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const cover = document.getElementById("cover");
    const footer = document.getElementById("footer");

    if (!cover || !footer) return;

    const observer = new IntersectionObserver(
      (entries) => {
        let show = true;

        entries.forEach((entry) => {
          if (entry.target.id === "cover" && entry.isIntersecting) {
            show = false;
          }
          if (entry.target.id === "footer" && entry.isIntersecting) {
            show = false;
          }
        });

        setVisible(show);
      },
      { threshold: 0.1 }
    );

    observer.observe(cover);
    observer.observe(footer);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    visible && (
      <a
        href="https://wa.me/966XXXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition-all duration-300"
      >
        <FaWhatsapp className="text-2xl size-10" />
      </a>
    )
  );
};

export default ScrollAwareButton;
