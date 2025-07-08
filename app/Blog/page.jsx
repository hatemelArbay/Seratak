import React from "react";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="min-h-screen font-tajawal bg-gray-100 p-8">
        <h1 className="text-3xl font-semibold text-center font-tajawal  text-[#fff] w-fit py-4 mx-auto px-6 mt-20  rounded-tl-2xl border border-dashed  border-r-red-900 border-l-red-900 border-b-fuchsia-700 border-t-fuchsia-700 rounded-br-2xl  bg-orange-300 mb-16">
          المقالات
        </h1>
        <div className="flex">
          <div className=" min-w-96 text-center mx-auto">
            <Link href="../TestArticle">
              <div className="bg-white rounded-2xl border border-t-orange-300 shadow p-6 hover:shadow-md transition cursor-pointer">
                <h2 className="text-xl font-semibold text-gray-800">
                  أهمية تعلم البرمجة
                </h2>
                <p className="text-gray-500 mt-2">
                  اضغط لقراءة المقال الكامل...
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
