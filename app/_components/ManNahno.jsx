"use client";
import React, { useState } from "react";
import shape from "../../Public/images/Shape-orange.png";
import Image from "next/image";
import groub from "../../Public/images/groub ksa.png";
import Typewriter from "typewriter-effect";
import { useInView } from "react-intersection-observer";

const ManNahno = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [startTyping, setStartTyping] = useState(false);
  const [doneTyping, setDoneTyping] = useState(false);

  React.useEffect(() => {
    if (inView && !doneTyping) {
      setStartTyping(true);
    }
  }, [inView, doneTyping]);

  const text = `
في سيرتك، نحن لا نكتب السير الذاتية فقط — نحن نحكي قصتك.
منذ أكثر من ثماني سنوات، ونحن نعيد تعريف الطريقة التي يُقدَّم بها الأشخاص إلى العالم المهني.
بخبرة عميقة وبصمة واضحة في مجال كتابة السير الذاتية، نجحنا في تقديم خدماتنا لمئات العملاء من جنسيات وثقافات مختلفة،
ما أكسبنا فهمًا فريدًا لاحتياجات كل فرد وسوق.
نحن نؤمن أن السيرة الذاتية ليست مجرد ورقة، بل هي أول انطباع، أول فرصة، وأحيانًا، بداية لمستقبل جديد.
ولهذا السبب، نعتمد على منهجية خاصة تمزج بين الاحترافية والتفرد،
لنقدم لك سيرة ذاتية تعكس شخصيتك، تبرز نقاط قوتك، وتفتح لك أبواب الفرص.
في سيرتك، كل كلمة تُكتب بعناية، كل تصميم يُختار بذوق، وكل عميل يُعامل كقصة نجاح جديدة.
نحن لا نبيع خدمة، نحن نبني جسرًا بينك وبين مستقبلك.
`;

  return (
    <>
      <div className="absolute top-[36rem] left-0 w-full h-1/6 bg-[#153d3e] clip-path-top"></div>
      <h1 className="text-3xl font-semibold text-center  text-[#fff] w-fit py-4 mx-auto px-6 mt-56 rounded-tl-2xl border border-dashed  border-r-red-900 border-l-red-900 border-b-fuchsia-700 border-t-fuchsia-700 rounded-br-2xl  bg-orange-300 mb-8">
        {" "}
        من نحن
      </h1>
      <div
        className="flex justify-between items-center py-5 bg-[#153d3e00] px-8"
        ref={ref}
      >
    <img src={groub} className="h-[50vh] mt-20 w-[35rem]" alt="groub" />
        <div className="text-xl font-tajawal text-center pr-5 font-semibold opacity-90 text-gray-500 mt-16 leading-loose">
          {doneTyping ? (
            <div>{text}</div>
          ) : startTyping ? (
            <Typewriter
              options={{
                strings: [text],
                autoStart: true,
                delay: 25,
              }}
              onInit={(typewriter) => {
                typewriter
                  .callFunction(() => {
                    setStartTyping(true);
                  })
                  .start()
                  .callFunction(() => {
                    setDoneTyping(true);
                  });
              }}
            />
          ) : null}
        </div>
      </div>
    </>
  );
};

export default ManNahno;
