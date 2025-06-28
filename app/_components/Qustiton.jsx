"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import {
  FaCrown,
  FaBookOpen,
  FaGlobeAmericas,
  FaLaptopCode,
} from "react-icons/fa";

const icons = [
  {
    icon: <FaCrown size={50} className="text-yellow-500" />,
    title: "القيادة والتميز",
    description: "نص يوضح أهمية القيادة في تحقيق النجاح والتميز.",
    description2: "نص يوضح أهمية القيادة في تحقيق النجاح والتميز.",
    description3: "نص يوضح أهمية القيادة في تحقيق النجاح والتميز.",
  },
  {
    icon: <FaBookOpen size={50} className="text-purple-600" />,
    title: "المعرفة والتعليم",
    description: "المعرفة هي الأساس لبناء المستقبل وتطوير المجتمعات.",
  },
  {
    icon: <FaGlobeAmericas size={50} className="text-green-600" />,
    title: "العالمية والانفتاح",
    description: "نحن نؤمن بالتواصل والانفتاح على العالم لتحقيق التقدم.",
  },
  {
    icon: <FaLaptopCode size={50} className="text-blue-600" />,
    title: "التقنية والبرمجة",
    description: "البرمجة تمثل لغة المستقبل ومحور التطور التكنولوجي.",
  },
];

export default function ImageSlider() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2.2,
      spacing: 15,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: {
          perView: 3,
          spacing: 20,
        },
      },
      "(min-width: 1024px)": {
        slides: {
          perView: 4,
          spacing: 25,
        },
      },
    },
  });

  return (
    <div className="px-4 py-6">
      <div ref={sliderRef} className="keen-slider">
        {icons.map((item, index) => (
          <div
            key={index}
            className="keen-slider__slide flex flex-col items-center"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl border-2 border-[#153d3e] w-full h-80 flex flex-col justify-end items-center pt-20 pb-4 px-3 text-center">
              <div className="absolute -top-10 w-28 h-28 rounded-xl bg-white shadow-lg border-2 border-gray-300 flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {item.title}
              </h3>
              <p className="text-lg py-1 text-gray-600">{item.description}</p>
              <p className="text-lg py-1 text-gray-600">{item.description2}</p>
              <p className="text-lg py-1 text-gray-600">{item.description3}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
