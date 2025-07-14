
import Script from "next/script";
import PaymentForm from "../_components/PaymentForm";
export default function Page() {
  return (
    <div dir="en">
      <Script
        src="https://secure-egypt.paytabs.com/payment/js/paylib.js"
        strategy="beforeInteractive"
      />
      <main style={{  margin: "0 auto", padding: 20 }}>
        <h1>Pay with Card</h1>
        <PaymentForm />
      </main>
    </div>
  );
}
