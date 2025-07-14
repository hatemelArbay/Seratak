import React from "react";

export default function PaymentSuccess() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50 text-right">
      <div className="bg-green-100 p-10 rounded-2xl shadow-xl text-green-800 max-w-md w-full text-center">
        <div className="text-6xl mb-4">✔️</div>
        <h1 className="text-3xl font-bold mb-4">شكرًا لك!</h1>
        <p className="text-lg mb-6">تمت عملية الدفع بنجاح.</p>
        <a
          href="/"
          className="inline-block bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg transition"
        >
          العودة إلى الصفحة الرئيسية
        </a>
      </div>
    </div>
  );
}
