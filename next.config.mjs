// import { withNextVideo } from "next-video/process";
// import config from './next-i18next.config.js'; 
// const { i18n } = config;
// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     output: 'export',
//   // i18n: {
//   //   locales: ["ar", "en", "fa", "tr", "fr"], // قائمة اللغات
//   //   defaultLocale: "ar", // اللغة الافتراضية
//   // },
//    i18n,
//   localeDetection: false,
//   // باقي الإعدادات...
// };

// export default withNextVideo(nextConfig);

import { withNextVideo } from "next-video/process";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Comment or remove i18n:
  // i18n: {
  //   locales: ["ar", "en", "fa", "tr", "fr"],
  //   defaultLocale: "ar",
  // },
  // Remove localeDetection too
};

export default withNextVideo(nextConfig);
