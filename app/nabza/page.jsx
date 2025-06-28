"use client";
import React, { useState } from "react";
import shape from "../../Public/images/Shape-orange.png";
import Image from "next/image";
// import groub from "/images/groub ksa.png";
import Typewriter from "typewriter-effect";
import { useInView } from "react-intersection-observer";
const Page = () => {
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
  const team = [
    {
      name: " ريم السبيعي",
      role: "مسؤولة خدمة عملاء ",
      image: "/images/Bent2-removebg-preview.png",
      bio: "ريم وجه الشركة المشرق، تتواصل مع العملاء بكل احترافية ولباقة. تساعد في توجيههم خلال خطوات إعداد السيرة الذاتية وتتابع معهم لضمان رضاهم التام عن الخدمة",

      direction: "left", // الحركة من اليسار
    },
    {
      name: "فيصل الحربي",
      role: "مصمم جرافيك",
      bio: "يتميز فيصل بإبداعه في تصميم قوالب سِيَر ذاتية جذابة ومرتبة باستخدام أحدث أدوات التصميم. يحرص على أن تكون كل سيرة ذاتية فريدة من نوعها وتعكس هوية صاحبها",

      image: "/images/53ebcdc0-be3f-4369-8b72-fbd1399a27b4.png",
      direction: "center", // الحركة من الأعلى
    },
    {
      name: "عبدالله القحطاني",
      role: " مدير تنفيذي (CEO)",
      bio: "يمتلك عبدالله خبرة تفوق 10 سنوات في إدارة المشاريع وتطوير الأعمال. قاد تأسيس الشركة برؤية واضحة لتقديم خدمات احترافية في كتابة وتصميم السير الذاتية لتناسب سوق العمل المحلي والعالمي",

      image: "/images/Person-Hero-Seactaion-removebg-preview.png",
      direction: "right", // الحركة من اليمين
    },
    {
      name: "رؤي سامي",
      role: " خبيرة كتابة سِيَر ذاتية",
      bio: "متخصصة في كتابة السير الذاتية بأسلوب احترافي يجمع بين البساطة والجاذبية. ساعدت مئات العملاء في الحصول على فرص عمل من خلال سير ذاتية تبرز نقاط قوتهم ومهاراتهم",

      image: "/images/hhhh-removebg-preview.png",
      direction: "bottom", // الحركة من الأسفل
    },
  ];

  return (
    <>
      <div className="absolute top-[36rem] left-0 w-full h-1/6 bg-[#153d3e] clip-path-top"></div>
      <h1 className="text-3xl font-semibold text-center font-tajawal  text-[#fff] w-fit py-4 mx-auto px-6 mt-20  rounded-tl-2xl border border-dashed  border-r-red-900 border-l-red-900 border-b-fuchsia-700 border-t-fuchsia-700 rounded-br-2xl  bg-orange-300 mb-16">
        {" "}
        من نحن
      </h1>
      <div
        className="flex flex-col md:flex-row justify-between items-center gap-6 pt-5 bg-[#153d3e00] px-4 md:px-8"
        ref={ref}
      >
        <img
          src="/images/groub ksa.png"
          className="h-[40vh] w-auto md:h-[50vh] mt-10 md:mt-20"
          alt="groub"
        />

        <div className="text-base md:text-xl font-tajawal text-center md:text-right md:pr-5 font-semibold opacity-90 text-gray-500 mt-6 md:mt-16 leading-loose">
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
      <section className="py-16 font-tajawal bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center font-tajawal  text-[#fff] w-fit py-4 mx-auto px-6 mt-20  rounded-tl-2xl border border-dashed  border-r-red-900 border-l-red-900 border-b-fuchsia-700 border-t-fuchsia-700 rounded-br-2xl  bg-orange-300 mb-16">
            تعرف على فريقنا
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((person, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-2xl p-6 text-center hover:shadow-xl transition"
              >
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-36 h-32 mx-auto rounded-full object-cover mb-4"
                />
                <h3 className="text-2xl py-2 text-orange-300 font-bold">
                  {person.name}
                </h3>
                <p className="text-gray-700 font-semibold mb-2">
                  {person.role}
                </p>
                <p className="text-sm text-gray-600">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
