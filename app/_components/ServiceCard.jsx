  "use client";
  import React from "react";
  import { motion } from "framer-motion";
  import Link from "next/link";
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
  const ServiceCard = ({title, body})=>{
    return(

              
                  <motion.div
                    // key={index}
                    // custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    whileHover="hover"
                    variants={cardVariants}
                    className="bg-white rounded-3xl p-6 border-t-4 border-[#ffb366] cursor-pointer"
                    style={{ boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
                  >
                    <div className="text-[#153d3e] text-2xl font-semibold mb-3">
                      {title}
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {body}
                    </p>
                  </motion.div>
          
   
    );
  }

  export default ServiceCard;