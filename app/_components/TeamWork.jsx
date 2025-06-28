"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaLinkedin } from "react-icons/fa";

const teamMembers = [
  {
    name: "فريدة صابر",
    role: "مطور واجهة امامية",
    img: "/images/Bent2-removebg-preview.png",
    direction: "left", // الحركة من اليسار
  },
  {
    name: "احمد علي",
    role: "مدير عام",
    img: "/images/53ebcdc0-be3f-4369-8b72-fbd1399a27b4.png",
    direction: "center", // الحركة من الأعلى
  },
  {
    name: "أحمد حسانين",
    role: "مهندس برمجيات",
    img: "/images/Person-Hero-Seactaion-removebg-preview.png",
    direction: "right", // الحركة من اليمين
  },
  {
    name: "رؤي سامي",
    role: "مدير علاقات",
    img: "/images/hhhh-removebg-preview.png",
    direction: "bottom", // الحركة من الأسفل
  },
];

function TeamMember({ member }) {
  // تحديد اتجاه الدخول بناءً على member.direction
  let initialX = 0;
  let initialY = 0;

  if (member.direction === "left") initialX = -200;
  if (member.direction === "right") initialX = 200;
  if (member.direction === "bottom") initialY = 200;
  if (member.direction === "center") initialY = -200;

  return (
    <motion.div
      initial={{ opacity: 0, x: initialX, y: initialY }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="flex flex-col items-center max-w-xs text-center"
    >
      <div className="w-56 h-56 clip-hexagon bg-[#153d3efb] overflow-hidden shadow-lg">
        <img
          src={member.img}
          alt={member.name}
          className="w-full h-full pt-2 clip-hexagon"
        />
      </div>
      <h4 className="mt-4 text-xl font-tajawal font-bold text-orange-400">
        {member.name}
      </h4>
      <p className="text-lg font-tajawal text-gray-500 mt-1">{member.role}</p>
    </motion.div>
  );
}

export default function TeamSection() {
  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-12">
        <p className="text-gray-400 uppercase text-sm"></p>
        <h1 className="text-3xl font-semibold text-center font-tajawal  text-[#fff] w-fit py-4 mx-auto px-6 mt-20  rounded-tl-2xl border border-dashed  border-r-red-900 border-l-red-900 border-b-fuchsia-700 border-t-fuchsia-700 rounded-br-2xl  bg-orange-300 mb-16">
          فريق العمل
        </h1>
      </div>

      <div className="relative flex flex-col items-center gap-9 md:gap-12">
        {/* Top middle member */}
        <div className="z-10">
          <TeamMember member={teamMembers[1]} />
        </div>

        {/* Two members left and right */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-9 md:gap-32">
          <TeamMember member={teamMembers[0]} />
          <TeamMember member={teamMembers[2]} />
        </div>

        {/* Bottom middle member */}
        <div className="z-10">
          <TeamMember member={teamMembers[3]} />
        </div>
      </div>
    </section>
  );
}
