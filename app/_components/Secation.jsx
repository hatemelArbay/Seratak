import React from "react";
import Image from "next/image";
const Secation = () => {
  return (
    <>
      <div className="min-h-screen font-tajawal flex flex-col md:flex-row items-center justify-center px-4 md:px-16 py-12 bg-white">
        {/* النص */}
        <div className="w-full md:w-1/2 text-center  md:text-right">
          <h1 className="text-5xl font-bold w-[30rem] max-md:w-96 text-shadow-lg  text-orange-300 mb-4">
            ثقة راسخة في السوق السعودي والخليجي
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            بفضل خبرتنا الواسعة وفهمنا العميق لمتطلبات سوق العمل، نُعد الخيار
            المفضل لدى نخبة من خبراء التوظيف في مختلف المجالات داخل السوق
            السعودي والخليجي.
          </p>
        </div>
        {/* الصور */}
        <div className="grid grid-cols-3 grid-rows-2 w-full md:w-1/2 mb-10 md:mb-0">
          {/* أعلى الصور */}
          <div className="col-span-1 row-span-1">
        <img
  src="/images/person9.png"
  alt="شخص 1"
  className="rounded-full mr-6 border -mb-8 border-dashed border-[#153d3e] shadow-2xl w-48 h-48"
/>

          </div>
          <div className="col-span-1 row-span-1"></div>
          <div className="col-span-1 row-span-1">
      <img
        src="/images/fakar.png"
        alt="شخص 2"
        className="rounded-full border -mb-8 border-[#153d3e] border-dashed shadow-2xl -mr-6 w-48 h-48"
      />

          </div>

          {/* الصورة الوسطى */}
          <div className="col-span-1 row-span-1"></div>
          <div className="col-span-1 row-span-1">
<img
  src="/images/dayra.jpg"
  alt="صورة وسط"
  className="rounded-full animate-pulse text-green-700 w-60 h-56"
/>

          </div>
          <div className="col-span-1 row-span-1"></div>

          {/* أسفل الصور */}
          <div className="col-span-1 row-span-1">
<img
  src="/images/prefect.png"
  alt="شخص 3"
  className="rounded-full object-cover border mr-6 border-[#153d3e] border-dashed shadow-2xl -mt-16 w-48 h-48"
/>

          </div>
          <div className="col-span-1 row-span-1"></div>
          <div className="col-span-1 row-span-1">
<img
  src="/images/pksa-removebg-preview.png"
  alt="pksa"
  className="rounded-full border border-[#153d3e] shadow-2xl border-dashed -mt-16 w-48 h-48"
/>

          </div>
        </div>
      </div>
    </>
  );
};

export default Secation;
