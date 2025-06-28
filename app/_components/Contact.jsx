"use client";

import { useForm, ValidationError } from "@formspree/react";
import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";
import WorldFlag from "react-world-flags";
import axios from "axios";

// import bak from "/images/Bakat.png";
const customStyles = {
  control: (provided) => ({
    ...provided,
    backgroundColor: "white",
    border: "1px solid #ccc",
    boxShadow: "none",
    padding: "1px",
    width: "18rem",
    right: "30px",
    borderRadius: "50px",
    "&:hover": {
      borderColor: "#aaa",
    },
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "white",
    // جعل النص باللون الأبيض
  }),
  input: (provided) => ({
    ...provided,
    color: "white",
    // جعل النص المكتوب باللون الأبيض
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "gray",
    font: "bold", // جعل النص الإرشادي باللون الأبيض
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: "white",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "#fff" : "white",
    color: "black",
    cursor: "pointer",
  }),
};

const Contact = () => {
  const [state, handleSubmit] = useForm("mpwadaeg");
  const [phone, setPhone] = useState("");

  const handleChange = (value) => {
    setPhone(value);
  };
  const [countries, setCountries] = useState([]);

  const [selectedCountry, setSelectedCountry] = useState(null);
  useEffect(() => {
    const fetchCountries = async () => {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      const countryData = response.data.map((country) => ({
        value: country.cca2, // رمز الدولة
        label: country.name.common, // اسم الدولة
        flag: country.cca2.toLowerCase(), // علم الدولة
      }));
      setCountries(countryData);
    };

    fetchCountries();
  }, []);

  const handleeChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };
  return (
    <section id="contact" className="contact py-40 px-6">
      <h1 className="text-3xl font-semibold text-center font-tajawal  text-[#fff] w-fit py-4 mx-auto px-6 mt-20  rounded-tl-2xl border border-dashed  border-r-red-900 border-l-red-900 border-b-fuchsia-700 border-t-fuchsia-700 rounded-br-2xl  bg-orange-300 mb-16">
        تواصل معنا{" "}
      </h1>
      <div className="flex flex-col md:flex-row m justify-between items-center gap-8">
        <form
          onSubmit={handleSubmit}
          className="w-full md:w-1/2 bg-gray-50 h-[70vh] shadow-lg rounded-lg p-6"
        >
          <div className="flex justify-between max-md:grid">
            <div className="col-span-6 sm:col-span-3 mb-4">
              <label htmlFor="email" className="text-lg font-medium"></label>
              <input
                required
                type="text"
                id="text"
                placeholder=" ⫷الاسم الأول"
                name="email"
                className="p-2 border w-[18rem] rounded-full text-gray-700 bg-white border-gray-300 bg-transparent max-sm:w-[20rem] mt-2"
              />
              <ValidationError
                prefix="Text"
                field="text"
                errors={state.errors}
              />
            </div>
            <div className="col-span-6 sm:col-span-3 mb-4">
              <label htmlFor="email" className="text-lg font-medium"></label>
              <input
                required
                type="text"
                id="text"
                placeholder=" ⫷الاسم الاخير"
                name="email"
                className="p-2 border w-[18rem] rounded-full text-gray-700 bg-white border-gray-300 bg-transparent max-sm:w-[20rem] mt-2"
              />
              <ValidationError
                prefix="Text"
                field="text"
                errors={state.errors}
              />
            </div>
          </div>
          <div className="flex my-6 max-sm:gap-56 max-lg:gap-0">
            <PhoneInput
              country={"eg"}
              value={phone}
              onChange={handleChange}
              inputClass="!border !bg-white  !text-gray-700  !border-gray-300 !rounded-full !w-[18rem] !h-10 !py-2 !px-4 "
              containerClass="w-full max-sm:w-[26rem] max-w-xs"
            />
            <Select
              required
              options={countries}
              value={selectedCountry}
              styles={customStyles}
              onChange={handleeChange}
              className="w-full max-w-xs max-lg:-mr-9"
              classNamePrefix="react-select"
              placeholder=" الدولة"
              getOptionLabel={(e) => (
                <div className="flex items-center max-sm:w-[26rem] max-lg:px-0">
                  <WorldFlag
                    code={e.flag}
                    style={{ width: 24, height: 16, marginRight: 10 }}
                  />
                  {e.label}
                </div>
              )}
            />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="email" className="text-lg font-medium"></label>
            <input
              required
              type="email"
              id="email"
              placeholder="عنوان البريد الالكتروني"
              name="email"
              className="p-2 border border-gray-300 text-gray-700 mt-6 bg-white rounded-full"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex flex-col mb-6">
            <label htmlFor="message" className="text-lg font-medium"></label>
            <textarea
              required
              name="message"
              id="message"
              placeholder="اكتب رسالتك"
              className="p-2 border border-gray-300 text-gray-600 rounded-lg mt-6 bg-white"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button
            type="submit"
            disabled={state.submitting}
            className="w-full bg-[#153d3e] text-white py-2 mt-8 rounded-full hover:bg-[#153d3e] transition"
          >
            ارسال
          </button>

          {state.succeeded && (
            <p className="flex items-center mt-4 text-green-600">
              <Lottie
                className="w-10 mr-2"
                loop={false}
                animationData={doneAnimation}
              />
              لقد تم ارسال رسالتك بنجاح 🤗{" "}
            </p>
          )}
        </form>

        <div className="w-full md:w-1/2 flex justify-center max-lg:mr-8">
          <img src="/images/Bakat.png" alt="image" className="max-md:hidden" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
