"use client";
import { useState } from "react";

export default function HostedCheckoutForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    street1: "",
    city: "",
    state: "",
    country: "",
    zip: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");


    for (const [key, value] of Object.entries(formData)) {
      if (!value.trim()) {
        setError(`❌ الرجاء تعبئة حقل ${key}.`);
        return;
      }
    }

    setLoading(true);
    try {
      const response = await fetch("/api/create-payment-page", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      setLoading(false);

      if (data.payment_url) {
        window.location.href = data.payment_url; 
      
      } else {
        setError(data.error || "❌ فشل بدء عملية الدفع.");
      }
    } catch (err) {
      setLoading(false);
      setError("❌ حدث خطأ أثناء الاتصال بالخادم، حاول مرة أخرى.");
    }
  };

  return (
    <div dir="rtl" className="max-w-2xl mx-auto bg-white p-8 rounded-3xl shadow-2xl border border-gray-200 space-y-6">
      <h2 className="text-4xl font-bold text-center text-emerald-700">
        إتمام عملية الدفع
      </h2>

      {error && (
        <div className="text-red-600 font-medium text-center">{error}</div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="font-medium text-emerald-800">الاسم الكامل *</label>
          <input
            type="text"
            name="name"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-lg"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <label className="font-medium text-emerald-800">البريد الإلكتروني *</label>
          <input
            type="email"
            name="email"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-lg"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <label className="font-medium text-emerald-800">رقم الهاتف *</label>
          <input
            type="tel"
            name="phone"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-lg"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <label className="font-medium text-emerald-800">عنوان الشارع *</label>
          <input
            type="text"
            name="street1"
            className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-lg"
            value={formData.street1}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <div className="flex-1 space-y-2">
            <label className="font-medium text-emerald-800">المدينة *</label>
            <input
              type="text"
              name="city"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-lg"
              value={formData.city}
              onChange={handleChange}
            />
          </div>

          <div className="flex-1 space-y-2">
            <label className="font-medium text-emerald-800">المحافظة / الولاية *</label>
            <input
              type="text"
              name="state"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-lg"
              value={formData.state}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
          <div className="flex-1 space-y-2">
            <label className="font-medium text-emerald-800">رمز الدولة (مثل EG) *</label>
            <input
              type="text"
              name="country"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-lg"
              value={formData.country}
              onChange={handleChange}
            />
          </div>

          <div className="flex-1 space-y-2">
            <label className="font-medium text-emerald-800">الرمز البريدي *</label>
            <input
              type="text"
              name="zip"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500 text-lg"
              value={formData.zip}
              onChange={handleChange}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`w-full ${
            loading
              ? "bg-emerald-300 cursor-not-allowed"
              : "bg-emerald-600 hover:bg-emerald-700"
          } text-white font-bold py-5 rounded-2xl text-xl transition duration-300`}
        >
          {loading ? "جاري المعالجة..." : "إتمام الدفع"}
        </button>
      </form>
    </div>
  );
}
