"use client";

import { FaCheckCircle } from "react-icons/fa";
import { MdOutlineWorkspacePremium, MdWorkspacePremium } from "react-icons/md";
import { PiCrownSimpleFill } from "react-icons/pi";
import HeroSection from "../_components/HeroSection";
import { FaDiamond } from "react-icons/fa6";
import { GiSilverBullet } from "react-icons/gi";
import Link from "next/link";
import { useEffect ,useState} from "react";
import axios from "axios";

const packages = [
  {
    name: "الباقة الفضية",
    icon: <GiSilverBullet className="text-[#153d3e] text-4xl" />,
    services: [
      "سيرة ذاتية بنظام ATS المعتمد بلغة عربية",
      "خطاب توظيفي باللغة العربية",
      "تعديل مجاني مرة واحدة",
      "نصائح سريعة لتحسين السيرة الذاتية بصيغة PDF",
      "تسليم خلال 3 أيام عمل",
    ],
    color: "border-[#ccc]",
  },
  {
    name: "باقة الماس",
    icon: <FaDiamond className="text-blue-400 text-4xl" />,
    services: [
      "سيرة ذاتية بنظام ATS المعتمد متعددة اللغات",
      "خطاب توظيفي متعدد اللغات",
      "تطوير وتحسين حساب لينكد إن",
      "التقديم على الوظائف",
      "مراجعة مخصصة مع مستشار مهني",
      "تصميم احترافي اختياري للسيرة الذاتية",
      "دعم عبر واتساب لمدة أسبوع",
    ],
    color: "border-blue-200",
  },
  {
    name: "الباقة الذهبية",
    icon: <PiCrownSimpleFill className="text-yellow-400 text-4xl" />,
    services: [
      "سيرة ذاتية بنظام ATS المعتمد متعددة اللغات",
      "خطاب توظيفي متعدد اللغات",
      "تطوير وتحسين حساب لينكد إن",
      "تصميم احترافي للسيرة الذاتية (نسخة PDF و Word)",
      "مراجعة مجانية خلال 7 أيام بعد التسليم",
    ],
    color: "border-yellow-500",
  },
  {
    name: "الباقة المميزة",
    icon: <MdOutlineWorkspacePremium className="text-yellow-600 text-4xl" />,
    services: [
      "سيرة ذاتية بنظام ATS المعتمد متعددة اللغات",
      "خطاب توظيفي متعدد اللغات",
      "تطوير وتحسين حساب لينكد إن",
      "التقديم على الوظائف",
      "التدرب على مقابلات العمل مع خبير مهني متخصص",
      "تصميم بصري مخصص يناسب المجال الوظيفي",
      "جلسة استشارية مهنية (30 دقيقة)",
      "دعم شخصي لمدة أسبوعين بعد التسليم",
    ],
    color: "border-yellow-700",
  },
];

const Page = () => {
      const baseUrl = process.env.NEXT_PUBLIC_BASEURL;
      const [bundles,setBundles]= useState([]);

  useEffect(()=>{
    const fetchBundles =async()=>{
      const response = await axios.get(`${baseUrl}/clientBundle/getBundles`);
      if (response){
        setBundles(response.data.bundles);
        
      }
    }
    fetchBundles();
  },[])
  return (
    <>
      <div className="absolute top-[36rem] left-0 w-full h-1/6 bg-[#153d3e] clip-path-top"></div>
      <section id="packages" className="bg-gray-100 font-tajawal py-16 px-4">
        <h2 className="text-3xl font-bold text-center my-10 text-[#153d3e]">
          اختر الباقة الأنسب أو صمّم باقتك الخاصة!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {bundles.map((pkg, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl hover:scale-105 shadow-2xl p-6 flex flex-col items-center border-t-4 ${pkg.color} hover:shadow-xl transition`}
              style={{ 
                borderTopColor: pkg.color,
                 borderTopWidth: '4px',

              }}
            >
              <div className="mb-4 text-4xl">{pkg.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-[#153d3e]">
                {pkg.title}
              </h3>
              <ul className="text-gray-700 space-y-2 w-full text-right">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <b className="text-orange-400 pl-1">✔</b>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="https://wa.me/01060711302"
                className="mt-6 bg-[#153d3e] text-white px-5 py-2 rounded-md hover:bg-[#1c4d4e] transition"
              >
                اشترك الآن
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-16 w-96 mx-auto bg-[#153d3e] text-white p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-semibold mb-8">
            صمم باقاتك التي تناسبك الأن{" "}
          </h3>
          <Link
            href="/twasal"
            className="bg-[#ffb366]  text-[#153d3e] font-bold py-3 px-6 rounded-xl hover:bg-[#ff9933] transition-all"
          >
            اطلب سيرتك
          </Link>
        </div>
      </section>
    </>
  );
};

export default Page;
