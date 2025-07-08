import React from "react";
import Link from "next/link";

const Page = () => {
  return (
    <>
      <div className="min-h-screen bg-gray-50 font-tajawal  p-6">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl border border-t-orange-200 shadow p-6">
          <Link href="/Blog">
            <span className="text-gray-500 text-lg animate-pulse">
              &larr; العودة للمقالات
            </span>
          </Link>

          <h1 className="text-2xl text-gray-400 font-bold mb-4 mt-2">
            أهمية تعلم البرمجة
          </h1>
          <p className="text-gray-700 leading-loose">
            البرمجة أصبحت من أهم المهارات في العصر الحديث. فهي لا تُستخدم فقط في
            تطوير المواقع والتطبيقات، بل تفتح الأبواب للإبداع وحل المشكلات. سواء
            كنت مهتماً بالتكنولوجيا أو لا، فإن تعلم البرمجة يمنحك القدرة على
            التفكير بشكل منطقي، وتنفيذ أفكارك، وبناء مستقبل مهني واعد.
          </p>
        </div>
      </div>
    </>
  );
};

export default Page;
