import React from "react";

const Page = () => {
  const partners = [
    { name: "شركة Alpha", logo: "/images/zahra.jpg" },
    { name: "شركة Alpha", logo: "/images/tasec.jpg" },
    { name: "شركة Alpha", logo: "/images/takafl.jpg" },
    { name: "شركة Alpha", logo: "/images/taka.jpg" },
    { name: "شركة Alpha", logo: "/images/sondok.jpg" },
    { name: "شركة Alpha", logo: "/images/sembs.jpg" },

    { name: "شركة Alpha", logo: "/images/saka.jpg" },
    { name: "شركة Alpha", logo: "/images/neyom.jpg" },
    { name: "شركة Alpha", logo: "/images/gamil.jpg" },
    { name: "شركة Alpha", logo: "/images/fatem.jpg" },
    { name: "شركة Alpha", logo: "/images/faisal.jpg" },
    { name: "شركة Alpha", logo: "/images/elsendy.jpg" },
    { name: "شركة Alpha", logo: "/images/Elmaray.jpg" },

    { name: "شركة Alpha", logo: "/images/beaa.jpg" },
    { name: "شركة Alpha", logo: "/images/aramko.jpg" },
    { name: "شركة Alpha", logo: "/images/alam.jpg" },
    { name: "شركة Alpha", logo: "/images/Akadmeya.jpg" },

    { name: "شركة Alpha", logo: "/images/tallem.jpg" },
    { name: "شركة Alpha", logo: "/images/Tourist.jpg" },
    { name: "شركة Alpha", logo: "/images/Malya.jpg" },
    { name: "شركة Alpha", logo: "/images/kahrba-Ksa.jpg" },
    { name: "شركة Alpha", logo: "/images/Health.jpg" },
    { name: "شركة Alpha", logo: "/images/Gamat-Ksa.jpg" },
  ];
  return (
    <>
      <div className="absolute top-[36rem] left-0 w-full h-1/6 bg-[#153d3e] clip-path-top"></div>

      <section className="py-16 font-tajawal bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl text-orange-300 font-bold my-10">
            شركاء النجاح داخل المملكة العربية السعودية
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-16  mt-5 items-center justify-center">
            {partners.map((partner, index) => (
              <div key={index} className="flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-32 object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
