"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "/images/cv.jpg",
  "/images/cv4.jpg",
  "/images/cv2.jpg",
  // أضف المزيد حسب الحاجة
];

const Cv = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // تغيير الصورة كل 3 ثوانٍ

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#fff7ed6a] font-tajawal mt-40 h-auto py-16 mx-4 my-16">
      <h1
        className="text-3xl font-semibold text-center text-[#fff] w-fit py-4 mx-auto px-6 mt-2 rounded-tl-2xl border border-dashed border-r-red-900 border-l-red-900 border-b-fuchsia-700 border-t-fuchsia-700 rounded-br-2xl bg-orange-300 mb-8"
        style={{ fontFamily: "Exo 2, sans-serif" }}
      >
        اختر نموذجك
      </h1>
      <motion.div
        className="flex flex-col lg:flex-row items-center justify-center text-xl px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* النصوص */}
        <div className="grid max-w-3xl w-full lg:ml-10">
          <motion.h1
            className="text-gray-700 font-bold px-1 py-2 text-3xl leading-9"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            سيرتك الذاتية هي مفتاحك الأول للفرصة. نحن نصنع لك سيرة ذاتية
            احترافية تبرز مهاراتك وخبراتك بأفضل شكل، وتجذب أنظار أصحاب العمل من
            أول نظرة
          </motion.h1>

          <motion.h1
            className="text-gray-700 font-bold px-1 py-2 text-2xl leading-9"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <b className="text-orange-500 px-1">✔</b>
            تصميم أنيق ومنظم
          </motion.h1>

          <motion.h1
            className="text-gray-700 font-bold px-1 py-2 text-2xl leading-9"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <b className="text-orange-500 px-1">✔</b>
            صياغة قوية وجذابة
          </motion.h1>

          <motion.h1
            className="text-gray-700 font-bold px-1 py-2 text-2xl leading-9"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            <b className="text-orange-500 px-1">✔</b>
            كتابة سيرة ذاتية متوافقة مع معايير القبول الحديثة
          </motion.h1>

          <motion.h1
            className="text-gray-700 font-bold px-1 py-2 text-2xl leading-9 max-lg:leading-10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            <b className="text-orange-500 px-1">✔</b>
            تحديث وتطوير السير الذاتية القديمة
          </motion.h1>

          <motion.h1
            className="text-gray-700 font-bold px-1 py-2 text-2xl leading-9 max-lg:leading-10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <b className="text-orange-500 px-1">✔</b>
            تصاميم متنوعة تناسب جميع المستويات (مبتدئ – محترف – تنفيذي)
          </motion.h1>

          <motion.h1
            className="text-gray-700 font-bold px-1 py-2 leading-9 max-lg:leading-10"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
          >
            <br />
          </motion.h1>

          <p className="text-2xl text-yellow-500 mx-auto font-bold py-6">
            ابدأ رحلتك المهنية مع سيرة ذاتية تليق بك ولا تترك فرصتك للصدفة، تميز
            معنا وابدأ بقوة
          </p>
        </div>

        {/* الصورة - تظهر فقط على الشاشات الكبيرة */}
        <motion.div
          key={currentImage}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-[31rem] h-[40rem] hidden lg:block relative"
        >
          <img
            src={images[currentImage]}
            alt="CV Example"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Cv;
