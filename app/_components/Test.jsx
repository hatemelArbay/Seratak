"use client";

import React, { useState, useEffect } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

const Test = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: { perView: 3, spacing: 30 },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(max-width: 640px)": {
        slides: { perView: 1, spacing: 10 },
      },
    },
  });

  const clientImages = [
    "/images/taka.jpg",
    "/images/aramko.jpg",
    "/images/beaa.jpg",
    "/images/Elmaray.jpg",
    "/images/sondok.jpg",
    "/images/sembs.jpg",
  ];

  return (
    <section className="relative max-w-7xl mx-auto mt-56 px-4 font-tajawal select-none">
      <h1 className="text-3xl font-semibold text-center  text-[#fff] w-fit py-4 mx-auto px-6 mt-20  rounded-tl-2xl border border-dashed  border-r-red-900 border-l-red-900 border-b-fuchsia-700 border-t-fuchsia-700 rounded-br-2xl  bg-orange-300 mb-16">
        شركاء النجاح
      </h1>

      <div
        ref={sliderRef}
        className="keen-slider rounded-xl bg-gradient-to-tr from-[#e9f1f053] to-[#ffffff]   pr-16 py-16 shadow-lg"
      >
        {clientImages.map((src, idx) => (
          <div
            key={idx}
            className="keen-slider__slide flex justify-center items-center"
          >
            <div
              className="bg-white rounded-3xl shadow-xl p-8 cursor-pointer transform transition-transform duration-500 hover:scale-110 hover:shadow-[0_0_25px_rgba(255,153,51,0.6)]"
              style={{ perspective: "1000px" }}
            >
              <img
                src={src}
                alt={`عميل ${idx + 1}`}
                className="w-48 h-28 object-contain mx-auto"
                loading="lazy"
                draggable={false}
              />
            </div>
          </div>
        ))}
      </div>

      {/* أزرار التنقل */}
      <button
        onClick={() => instanceRef.current?.prev()}
        aria-label="السابق"
        className="absolute top-1/2 left-6 -translate-y-1/2 rounded-full bg-[#ffb366] p-3 text-[#153d3e] shadow-2xl transition hover:bg-[#ff9933] active:scale-90"
      >
        <ArrowLeft size={24} />
      </button>
      <button
        onClick={() => instanceRef.current?.next()}
        aria-label="التالي"
        className="absolute top-1/2 right-6 -translate-y-1/2 rounded-full bg-[#ffb366] p-3 text-[#153d3e] shadow-2xl transition hover:bg-[#ff9933] active:scale-90"
      >
        <ArrowRight size={24} />
      </button>

      {/* النقاط */}
      <div className="flex justify-center mt-8 space-x-3">
        {clientImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              currentSlide === idx
                ? "bg-[#ff9933] shadow-[0_0_10px_rgba(255,153,51,0.7)]"
                : "bg-[#d1d5db]"
            }`}
            aria-label={`الشريحة رقم ${idx + 1}`}
          />
        ))}
      </div>

      {/* زر المزيد */}
      <div className="flex justify-center mt-10">
        <Link
          href="../shorkai"
          className="bg-[#ffb366] no-underline hover:bg-[#ff9933] text-[#fff] font-semibold rounded-2xl px-8 py-3 shadow-lg transition"
        >
          المزيد
        </Link>
      </div>
    </section>
  );
};

export default Test;
