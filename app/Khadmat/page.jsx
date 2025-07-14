"use client";
import React from "react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import ServiceCard from "../_components/ServiceCard";
import axios from "axios";
import {Commet} from "react-loading-indicators"


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
  const [loading,setLoading] = useState(false);
  
  useEffect(()=>{
    const fetchServices = async()=>{
      setLoading(true);
        const response = await axios.get(`${baseUrl}/clientService/getServices`);
      if (response.data.success){
        setServices(response.data.services)
        setLoading(false);
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

          {loading && 
          (
            <div style={{ display: "flex", justifyContent: "space-around" }}>
            <Commet className="justify-center" color="#153d3d" size="medium" text="" textColor="#1e1e1e" />
            </div>
          )}
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
