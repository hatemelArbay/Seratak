"use client";
import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ServiceCard from "../_components/ServiceCard";
import axios from "axios";
// const services = [
//   {
//     title: "كتابة سيرة ذاتية احترافية",
//     description:
//       "نكتب لك سيرة ذاتية مصممة خصيصاً لسوق العمل السعودي بمعايير عالمية.",
//   },
//   {
//     title: "تصميمات عصرية للسيرة الذاتية",
//     description:
//       "أكثر من 10 قوالب جذابة تلائم مختلف التخصصات والوظائف داخل السعودية.",
//   },
//   {
//     title: "تحسين وتحديث السيرة",
//     description: "نقوم بمراجعة سيرتك الذاتية وتطويرها لتكون أكثر جاذبية وقوة.",
//   },
//   {
//     title: "إنشاء حساب LinkedIn احترافي",
//     description:
//       "نبني لك بروفايل لينكدإن متكامل يزيد فرص ظهورك للجهات الوظيفية.",
//   },
//   {
//     title: "كتابة خطاب تقديم (Cover Letter)",
//     description: "نعد لك خطاباً مخصصاً ومقنعاً لزيادة فرص قبولك في الوظائف.",
//   },
//   {
//     title: "استشارة مهنية عبر Zoom",
//     description: "جلسة شخصية لمساعدتك في تحديد أهدافك المهنية وتطوير مسارك.",
//   },
//   {
//     title: "إعداد سيرة ذاتية بالعربية والإنجليزية",
//     description:
//       "نقدم لك سيرتين ذاتيتين باللغة العربية والإنجليزية لتوسيع فرصك.",
//   },
//   {
//     title: "تنسيق السيرة للوظائف الحكومية والخاصة",
//     description:
//       "ننسق سيرتك الذاتية لتناسب متطلبات التقديم في القطاعين الحكومي والخاص.",
//   },
//   {
//     title: "متابعة وتحديث السيرة بعد التوظيف",
//     description:
//       "نساعدك في تحديث سيرتك الذاتية مع تغير مسارك المهني بعد التوظيف.",
//   },
//   {
//     title: "نصائح للمقابلات الشخصية",
//     description: "نقدم لك نصائح مخصصة لتخطي المقابلات الشخصية بنجاح.",
//   },
//   {
//     title: "دعم بناء ملف مهني متكامل (Portfolio)",
//     description: "نساعدك في تجهيز ملف مهني يعكس خبراتك ومهاراتك بشكل احترافي.",
//   },
//   {
//     title: "ترجمة السيرة الذاتية باحترافية",
//     description: "خدمة ترجمة احترافية للسيرة الذاتية بين العربية والإنجليزية.",
//   },
//   {
//     title: "تحضير ملفات التقديم الإلكترونية",
//     description: "نجهز لك ملفات السيرة الذاتية بصيغ PDF و Word جاهزة للتقديم.",
//   },
//   {
//     title: "دعم كتابة ملخص السيرة الذاتية (Summary)",
//     description: "نساعدك في كتابة ملخص جذاب يبرز نقاط قوتك ومهاراتك.",
//   },
//   {
//     title: "متابعة العميل للتعديلات",
//     description:
//       "نتواصل معك لتعديل سيرتك الذاتية حسب ملاحظاتك لضمان الرضا الكامل.",
//   },
//   {
//     title: "نصائح تطوير ملف LinkedIn",
//     description: "نرشدك لكيفية تحسين بروفايل لينكدإن لزيادة فرص التوظيف.",
//   },
//   {
//     title: "كتابة سيرة ذاتية للطلاب والخريجين الجدد",
//     description: "نصمم سير ذاتية مميزة تناسب الطلاب والخريجين لتعزيز فرصهم.",
//   },
//   {
//     title: "تصميم سيرة متجاوبة للعرض على الجوال",
//     description:
//       "نصمم سيرتك الذاتية بشكل متجاوب لتكون سهلة القراءة على الهواتف الذكية.",
//   },
// ];
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, type: "spring", stiffness: 100 },
  }),
  hover: {
    scale: 1.05,
    boxShadow:
      "0 10px 15px rgba(255, 179, 102, 0.5), 0 4px 6px rgba(21, 61, 62, 0.3)",
    transition: { duration: 0.3 },
  },
};

const Page = () => {
    const baseUrl = process.env.NEXT_PUBLIC_BASEURL;
  const [services , setServices ] = useState([]);
  
  useEffect(()=>{
    const fetchServices = async()=>{
      console.log(baseUrl);
      const response = await axios.get(`${baseUrl}/clientService/getServices`);
      if (response.data.success){
        setServices(response.data.services)
      }
    }
    fetchServices();
  },[])
  return (
    <section className="bg-[#f9f9f9] py-16 px-4 md:px-20 font-tajawal">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#153d3e] text-center mb-12">
          خدماتنا الاحترافية لكتابة السير الذاتية
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
            key={index}
            title={service.title}
            body={service.body}
            />
          ))}
        </div>

        <div className="mt-16 bg-[#153d3e] text-white p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-semibold mb-4">
            مستعد تبدأ رحلتك المهنية؟ خلنا نجهز لك أفضل سيرة ذاتية.
          </h3>
          <Link
            href="/twasal"
            className="bg-[#ffb366] text-[#153d3e] font-bold py-3 px-6 rounded-xl hover:bg-[#ff9933] transition-all"
          >
            اطلب سيرتك الآن
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Page;
