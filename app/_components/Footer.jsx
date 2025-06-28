// components/Footer.tsx
import Link from "next/link";
import { FaCcVisa } from "react-icons/fa6";
import { RiMastercardLine } from "react-icons/ri";
import { GrPaypal } from "react-icons/gr";
import { FaCcApplePay } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#153d3e] text-white py-10 px-4 font-tajawal max-md:text-center">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-4">
        {/* Your Logo and Description */}
        <div>
          <img
            src="/images/logo-removebg-preview.png" // غيّر ده لمسار شعار شركتك
            alt="Your Company Logo"
            className="mx-auto md:mx-0 mb-4 w-28 h-auto"
          />
          <p className="text-lg pl-5 text-center">
            في سيرتك، نُحول خبراتك وإنجازاتك إلى سيرة ذاتية احترافية تُعبّر عنك
            بأفضل صورة
          </p>
        </div>

        {/* Page Links */}
        <div className="pr-6">
          <h3 className="text-lg font-bold text-orange-200 max-md:ml-4 mb-2">
            روابط مهمة
          </h3>
          <ul className="space-y-2 no-underline text-lg font-tajawal text-[#fff]">
            <li className="">
              <Link href="/" className="no-underline">
                <span className="hover:underline no-underline text-white">
                  الصفحة الرئيسية
                </span>
              </Link>
            </li>
            <li>
              <Link href="/services" className="no-underline">
                <span className="hover:underline no-underline text-white">
                  الخدمات
                </span>
              </Link>
            </li>
            <li>
              <Link href="/packages" className="no-underline">
                <span className="hover:underline no-underline text-white">
                  الباقات
                </span>
              </Link>
            </li>
            <li>
              <Link href="/about" className="no-underline">
                <span className="hover:underline no-underline text-white">
                  من نحن
                </span>
              </Link>
            </li>
            <li>
              <Link href="/contact" className="no-underline">
                <span className="hover:underline no-underline text-white">
                  تواصل معنا
                </span>
              </Link>
            </li>
            <li>
              <Link href="/testimonials" className="no-underline">
                <span className="hover:underline no-underline text-white">
                  آراء العملاء
                </span>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mr-16 max-md:mr-0 text-orange-200 mb-2">
            العنوان
          </h3>
          <div>
            <p className="text-lg -mr-12 max-w-80 max-md:mr-0">
              القاهرة: مدينة نصر -مكرم عبيد بجوار برج السحيلي
            </p>
          </div>
        </div>
        {/* Payment Methods */}
        <div>
          <h3 className="text-lg font-semibold mr-16 max-md:mr-0 text-orange-200 mb-2">
            وسائل الدفع
          </h3>
          <div className="flex justify-center md:justify-start gap-4 mt-4 items-center">
            <FaCcVisa className="h-16 w-10" />
            <RiMastercardLine className="h-16 w-10" />
            <GrPaypal className="h-16 w-10" />
            <FaCcApplePay className="h-16 w-10" />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-200 pt-4 text-center text-sm text-gray-100">
        © {new Date().getFullYear()} جميع الحقوق محفوظة - SEMO
      </div>
    </footer>
  );
};

export default Footer;
