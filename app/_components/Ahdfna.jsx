"use client";
import React from "react";
import { FaHeart, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { GiTeamIdea } from "react-icons/gi";
import { SiPrefect } from "react-icons/si";
import { IoSchoolOutline } from "react-icons/io5";
import { FiTrendingUp } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
import {
  FaBolt,
  FaClock,
  FaHandHoldingHand,
  FaHandshakeSimple,
  FaHandsPraying,
  FaHeadset,
  FaLayerGroup,
  FaLock,
  FaPalette,
  FaPenNib,
} from "react-icons/fa6";
const Ahdfna = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, // مدة التأثير
      once: false, // ظهور العنصر مرة واحدة فقط
    });
  }, []);

  const steps = [
    {
      id: 1,
      title: "تصاميم عصرية ",
      description:
        "قدم تصاميم سير ذاتية حديثة، أنيقة، ومتوافقة مع معايير التوظيف العالمية، لتلفت أنظار أصحاب العمل منذ النظرة الأولى",
      icon: <FaPalette />,
    },
    {
      id: 2,
      title: "الاحترافية في الكتابة",
      description:
        "نلتزم بكتابة سير ذاتية احترافية خالية من الأخطاء اللغوية والإملائية، باستخدام لغة قوية وواضحة تعكس مهاراتك وخبراتك بشكل مميز",

      icon: <FaPenNib />,
    },
    {
      id: 3,
      title: "تخصيص لكل مجال ",
      description:
        "نقوم بتخصيص السير الذاتية حسب مجال العمل (إداري، تقني، طبي، إلخ) لضمان إبراز النقاط المهمة لكل تخصص.",
      icon: <FaLayerGroup />,
    },
    {
      id: 4,
      title: " التركيز على نقاط القوة",
      description:
        "نساعدك على عرض مهاراتك وإنجازاتك بأفضل صورة، وتسليط الضوء على نقاط قوتك بطريقة تسويقية فعالة",

      icon: <FaBolt />,
    },
  ];
  const stepss = [
    {
      id: 5,
      title: "خبرة بالسوق السعودي والخليجي",
      description:
        "نمتلك خبرة واسعة في متطلبات سوق العمل السعودي والخليجي، ونراعي المعايير المحلية عند إعداد السير الذاتية.",
      icon: <FaMapMarkerAlt />,
    },
    {
      id: 6,
      title: "سرعة الإنجاز",
      description:
        "نلتزم بتسليم السيرة الذاتية خلال وقت قياسي، مع الحفاظ على أعلى مستوى من الجودة والاتقان",
      icon: <FaClock />,
    },
    {
      id: 7,
      title: "خدمة ما بعد التسليم",
      description:
        "نوفر تعديلات مجانية بعد التسليم لفترة محددة، لضمان رضاك الكامل عن السيرة الذاتية.",
      icon: <FaHeadset />,
    },
    {
      id: 8,
      title: "حفظ خصوصيتك",
      description:
        "نلتزم بالحفاظ الكامل على سرية بياناتك ومعلوماتك الشخصية، ولا تتم مشاركتها مع أي جهة خارجية",
      icon: <FaLock />,
    },
  ];
  const visibleSteps = steps.slice(0, 4);
  const visibleStepss = stepss.slice(0, 4);
  return (
    <>
      <div className="bg-[#fff7ed6a]">
        <div className="max-w-6xl mx-auto p-6 text-center font-tajawal relative mt-20">
          <h1 className="text-3xl font-semibold text-center  text-[#fff] w-fit py-4 mx-auto px-6 mt-20  rounded-tl-2xl border border-dashed  border-r-red-900 border-l-red-900 border-b-fuchsia-700 border-t-fuchsia-700 rounded-br-2xl  bg-orange-300 mb-16">
            معاير ومبادئ سيرتك
          </h1>

          {/* الحاوية الرئيسية مع وضع relative لإتاحة رسم SVG */}
          <div className="relative">
            {/* خط SVG المستقيم الذي يربط بين الأرقام فقط */}
            <svg
              className="hidden md:block absolute top-0 left-0 w-full h-full pointer-events-none"
              viewBox="0 0 1000 200"
              preserveAspectRatio="none"
            >
              <line
                x1="60"
                y1="15"
                x2="900"
                y2="15"
                stroke="gray"
                strokeDasharray="8,5"
                strokeWidth="2"
              />
            </svg>

            {/* شبكة العرض لسطح المكتب */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-32 relative font-tajawal z-10">
              {visibleSteps.map((step, index) => (
                <div
                  key={step.id}
                  className="flex flex-col items-center"
                  data-aos="fade-up"
                  data-aos-delay={index * 600} // كل عنصر يتأخر عن اللي قبله بـ 300ms
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-orange-300 text-white rounded-full">
                    {step.id}
                  </div>
                  <div className="mt-3 text-5xl text-[#153d3e]">
                    {step.icon}
                  </div>
                  <h3 className="font-bold text-orange-500 text-xl mt-6 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* عرض الجوال: خط عمودي مكسر */}
          <div className="md:hidden relative mt-8">
            <svg
              className="absolute left-1/2 transform -translate-x-1/2 h-full w-28 pointer-events-none"
              viewBox="0 0 1 500"
              preserveAspectRatio="none"
            >
              <line
                x1="0.8"
                y1="5"
                x2="0.8"
                y2="200"
                stroke="gray"
                strokeDasharray="8,5"
                strokeWidth="1"
              />
            </svg>
          </div>
        </div>
        <div className="max-w-6xl mx-auto p-6 text-center relative mt-20">
          {/* الحاوية الرئيسية مع وضع relative لإتاحة رسم SVG */}
          <div className="relative">
            {/* خط SVG المستقيم الذي يربط بين الأرقام فقط */}
            <svg
              className="hidden md:block absolute top-0 left-0 w-full h-full pointer-events-none"
              viewBox="0 0 1000 200"
              preserveAspectRatio="none"
            >
              <line
                x1="60"
                y1="15"
                x2="900"
                y2="15"
                stroke="gray"
                strokeDasharray="8,5"
                strokeWidth="2"
              />
            </svg>

            {/* شبكة العرض لسطح المكتب */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-32 font-tajawal relative z-10">
              {visibleStepss.map((step, index) => (
                <div
                  key={step.id}
                  className="flex flex-col items-center"
                  data-aos="fade-up"
                  data-aos-delay={index * 600} // تأخير العنصر بناءً على ترتيبه (1 ثانية لكل عنصر)
                >
                  {/* الرقم داخل الدائرة */}
                  <div className="w-12 h-12 flex items-center font-tajawal justify-center bg-orange-300 text-white rounded-full">
                    {step.id}
                  </div>
                  {/* الأيقونة تظهر أسفل الرقم */}
                  <div className="mt-3 text-5xl text-[#153d3e]">
                    {step.icon}
                  </div>
                  <h3 className="font-bold text-orange-500 text-xl mt-6 mb-1">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-700">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* عرض الجوال: خط عمودي مكسر */}
          <div className="md:hidden relative mt-8">
            <svg
              className="absolute left-1/2 transform -translate-x-1/2 h-full w-28 pointer-events-none"
              viewBox="0 0 1 500"
              preserveAspectRatio="none"
            >
              <line
                x1="0.8"
                y1="5"
                x2="0.8"
                y2="200"
                stroke="gray"
                strokeDasharray="8,5"
                strokeWidth="1"
              />
            </svg>
          </div>
        </div>
  
      </div>
    </>
  );
};

export default Ahdfna;
