"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
export default function Pricing() {
  const plans = [
    {
      title: "اساسي",
      price: "$15",
      features: [
        "10GB HDD Space",
        "5 Email Addresses",
        "2 Subdomains",
        "4 Databases",
        "Basic Support",
      ],
    },
    {
      title: "متقدم",
      price: "$25",
      mostPopular: true,
      features: [
        "20GB HDD Space",
        "10 Email Addresses",
        "5 Subdomains",
        "8 Databases",
        "Advanced Support",
      ],
    },
    {
      title: "احترافي",
      price: "$45",
      features: [
        "50GB HDD Space",
        "20 Email Addresses",
        "10 Subdomains",
        "20 Databases",
        "Professional Support",
      ],
    },
  ];

  return (
    <>
      <div className="absolute -bottom-[44rem] left-0 w-full h-1/6 bg-[#fcffffc2] clip-path-top"></div>

      <section className="bg-[#f9e5ce57] py-16 px-4 font-tajawal my-8">
        <h1 className="mx-auto text-orange-500 font-tajawal my-20 items-center text-center font-bold text-5xl">
          الباقات المتوفرة{" "}
        </h1>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-6 justify-center items-stretch">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-xl shadow-lg p-6 w-full md:w-1/3 transition-transform hover:scale-105 ${
                plan.mostPopular ? "border-2 border-[#153d3e]" : ""
              }`}
            >
              {plan.mostPopular && (
                <div className="absolute -top-3 right-3 bg-[#153d3e] text-white text-xs font-bold px-2 py-1 rounded-sm shadow-md">
                  الأكثر شعبية{" "}
                </div>
              )}
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="text-xl text-orange-200 font-bold">
                  {plan.title}
                </div>
                <div className="text-4xl text-orange-500 font-bold">
                  {plan.price}
                </div>
                <ul className="mt-4 space-y-2 text-left w-full">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 py-4 text-xl  text-gray-700"
                    >
                      <span className="text-orange-500 font-bold">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
