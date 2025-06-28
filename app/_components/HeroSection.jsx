"use client";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaSnapchatGhost,
  FaWhatsapp,
} from "react-icons/fa";
// import insta from "/images/Insta.jpg";
import { FaSnapchat, FaTiktok, FaX, FaXTwitter } from "react-icons/fa6";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
export default function HeroSection() {
  const { ref, inView } = useInView({
    triggerOnce: false, // يعد مرة واحدة فقط
    threshold: 0.5, // لما نص العنصر يظهر
  });
  return (
    <section className="relative bg-[#153d3e] text-white overflow-hidden h-[90vh] pb-12 pt-24 px-6 md:px-16 lg:flex lg:items-center lg:justify-between">
      {/* Left Content */}
      <motion.div
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="max-w-xl mt-20 order-1 lg:order-1"
      >
        <h1 className="text-4xl md:text-5xl font-tajawal font-bold leading-tight mb-6">
          خلّي سيرتك تتكلم عنك <br />
        </h1>

        <p className="text-gray-300 font-tajawal font-semibold text-lg mb-6">
          في سيرتك، نُحول خبراتك وإنجازاتك إلى سيرة ذاتية احترافية تُعبّر عنك
          بأفضل صورة
        </p>

        <div className="flex items-center my-12 gap-8 mb-8">
          <a
            href="#"
            className="bg-black px-1 py-1 rounded-full font-semibold text-sm shadow hover:bg-gray-200 transition"
          >
            <FaTiktok className="text-white size-11" />
          </a>
          <a
            href="#"
            className="bg-yellow-400  px-1 py-1 rounded-full font-semibold text-sm shadow hover:bg-gray-200 transition"
          >
            <FaSnapchatGhost className="text-white   size-11" />
          </a>
          <a
            href="#"
            className="bg-black px-1 py-1 rounded-full font-semibold text-sm shadow hover:bg-gray-200 transition"
          >
            <FaXTwitter className="text-white size-11" />
          </a>
          <a className="flex items-center bg-gray-100 gap-2 text-white border border-white px-1 py-1 rounded-full hover:bg-white hover:text-black transition">
            <FaWhatsapp className="text-green-500 size-11" />
          </a>

          <a
            href="#"
            className="bg-slate-50 px-1 py-1 rounded-full font-semibold text-sm shadow hover:bg-gray-200 transition"
          >
            <img
              src="/images/Insta.jpg"
              className="w-12 rounded-full"
              alt="Instagram"
            />
          </a>
        </div>

        <div
          ref={ref}
          className="flex gap-12 mt-12 font-tajawal text-sm text-gray-400"
        >
          <div>
            <p className="text-orange-400 mb-4 font-semibold text-xl">
              العملاء
            </p>
            <span className="text-gray-100 font-semibold text-2xl">
              {inView && <CountUp end={2400} duration={2} />}+
            </span>
          </div>
          <div>
            <p className="text-orange-400 mb-4 font-semibold text-xl">
              سنوات الخبرة
            </p>
            <span className="text-gray-100 mr-8 font-semibold text-2xl">
              {inView && <CountUp end={8} duration={2} />}+
            </span>
          </div>
          <div>
            <p className="text-orange-400 mb-4 font-semibold text-xl">
              الجنسيات
            </p>
            <span className="text-gray-100 mr-4 font-semibold text-2xl">
              {inView && <CountUp end={23} duration={2} />}+
            </span>
          </div>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="mt-10 lg:mt-0 order-2 lg:order-2 max-sm:hidden"
      >
        <img
          src="/images/Person-Hero-Seactaion.png"
          alt="Person"
          width="600"
          height="600"
          className="mx-auto lg:mx-0 mt-32 max-sm:hidden"
        />
      </motion.div>
    </section>
  );
}
