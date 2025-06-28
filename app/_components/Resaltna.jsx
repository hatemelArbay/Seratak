"use client";
import React from "react";

const Resaltna = () => {
  return (
    <>
      <div className="absolute top-[36rem] left-0 w-full h-1/6 bg-[#153d3e] clip-path-top max-md:none"></div>

      <section className="flex flex-col md:flex-row font-tajawal items-center gap-8 p-6">
        {/* الصورة */}
        <div className="md:w-1/2 w-full">
          <img
            src="/images/resala.png" // عدّل المسار حسب صورتك
            alt="وصف الصورة"
            className="w-full h-auto rounded-xl "
          />
        </div>

        {/* النص */}
        <div className="md:w-1/2 w-full text-right">
          <h2 className="text-4xl text-orange-400 font-bold mb-4"> رسالتنا</h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            نؤمن أن السيرة الذاتية هي أول خطوة نحو مستقبلك المهني لذلك صممنا
            منصتنا لتكون بسيطة، باللغة العربية، وبأسلوب يناسب سوق العمل السعودي
            سواء كنت تبدأ من الصفر أو تطور سيرتك الحالية نحن معك في كل خطوة ابدأ
            اليوم واصنع سيرة تفتح لك الأبواب وتترك انطباعًا قويًا منذ اللحظة
            الأولى
          </p>
        </div>
      </section>
    </>
  );
};

export default Resaltna;
