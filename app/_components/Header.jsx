"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
// import logo from "/images/logo-removebg-preview.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");
  const pathname = usePathname();

  const links = [
    { name: "الصفحة الرئيسية", href: "/" },
    { name: "الخدمات", href: "/Khadmat" },
    { name: "الباقات", href: "/price" },
    { name: "نبذه عنا ", href: "/nabza" },
    { name: " شركاء النجاح", href: "/shorkai" },
    { name: "تواصل معنا", href: "/twasal" },
  ];

  useEffect(() => {
    const updateActiveLink = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      const fullPath = path + hash;
      setActiveLink(fullPath || "/");
    };

    updateActiveLink();
    window.addEventListener("hashchange", updateActiveLink);
    window.addEventListener("popstate", updateActiveLink);

    return () => {
      window.removeEventListener("hashchange", updateActiveLink);
      window.removeEventListener("popstate", updateActiveLink);
    };
  }, []);

  return (
    <header className="w-full bg-[#153d3e] font-tajawal shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <img
          src="/images/logo-removebg-preview.png"
          className="w-32"
          alt="Logo"
        />

        {/* روابط الديسكتوب */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.name}
              className={`text-xl no-underline font-semibold transition-colors duration-300 ${
                pathname === link.href
                  ? "text-orange-200"
                  : "text-white hover:text-orange-200"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* <button className="ml-4 text-white font-bold">AR | EN</button> */}

        {/* أيقونة الموبايل */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* قائمة الموبايل */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-3">
          {links.map((link) => (
            <Link
              href={link.href}
              key={link.name}
              className={`block font-semibold ${
                activeLink === link.href ? "text-orange-500" : "text-gray-700"
              }`}
            >
              {link.name}
            </Link>
          ))}
          {/* <button className="block mt-2 text-gray-700 font-semibold">
            AR | EN
          </button> */}
        </div>
      )}
    </header>
  );
}
