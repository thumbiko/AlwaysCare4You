import type { Metadata } from "next";
import { FAQS, HOURS } from "@/lib/data";
import AreasMap from "@/components/AreasMap";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Frequently asked questions about AlwaysCare4You home care services, hours of operation and areas covered across Dublin.",
};

export default function FAQsPage() {
  return (
    <>
      <div style={{ backgroundColor: "var(--primary)", padding: "110px 24px 64px", textAlign: "center" }}>
        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "13px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "12px" }}>Help & Information</p>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(30px, 5vw, 52px)", color: "#fff", lineHeight: "1.2", maxWidth: "680px", margin: "0 auto 16px" }}>
          Frequently Asked Questions
        </h1>
        <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "17px", maxWidth: "540px", margin: "0 auto", lineHeight: "1.7" }}>
          Everything you need to know about our services, how to access care, and what to expect.
        </p>
      </div>

      {/* FAQs */}
      <section style={{ backgroundColor: "#fff", padding: "80px 24px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "16px" }}>
          {FAQS.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} />
          ))}
        </div>
      </section>

      {/* Hours of operation */}
      <section style={{ backgroundColor: "var(--primary-xlight)", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "start" }}>
          <div>
            <p style={{ color: "var(--primary)", fontWeight: 700, fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "12px" }}>When We Are Available</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px, 3vw, 34px)", color: "#1a2e2e", marginBottom: "28px" }}>Hours of Operation</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
              {HOURS.map((h, i) => (
                <div key={i} style={{
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  padding: "16px 0", borderBottom: "1px solid var(--primary-light)",
                  gap: "16px",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "var(--primary)", flexShrink: 0 }} />
                    <span style={{ fontWeight: 600, fontSize: "15px", color: "#1a2e2e" }}>{h.day}</span>
                  </div>
                  <span style={{ fontSize: "14px", color: "#6B7280", textAlign: "right" }}>{h.hours}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: "24px", padding: "16px 20px", backgroundColor: "#fff", borderRadius: "10px", border: "1px solid var(--primary-light)", display: "flex", gap: "12px", alignItems: "flex-start" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" style={{ flexShrink: 0, marginTop: "1px" }}><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
              <p style={{ fontSize: "13px", color: "#4B5563", lineHeight: "1.6" }}>An emergency out-of-hours line is available around the clock for all existing clients.</p>
            </div>
          </div>

          <div>
            <p style={{ color: "var(--primary)", fontWeight: 700, fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "12px" }}>Where We Work</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px, 3vw, 34px)", color: "#1a2e2e", marginBottom: "20px" }}>Areas Covered</h2>
            <p style={{ fontSize: "15px", color: "#4B5563", lineHeight: "1.7", marginBottom: "24px" }}>We provide home care services across Kildare, and  Dublin. Click on any pin to see the service area.</p>
            <AreasMap />
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          section > div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  return (
    <details style={{ backgroundColor: "#FAFAFA", border: "1px solid #E5E7EB", borderRadius: "12px", overflow: "hidden" }}>
      <summary style={{
        padding: "20px 24px",
        cursor: "pointer",
        fontWeight: 700,
        fontSize: "16px",
        color: "#1a2e2e",
        listStyle: "none",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "16px",
        fontFamily: "'Nunito', sans-serif",
      }}>
        <span>{q}</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2.5" strokeLinecap="round" style={{ flexShrink: 0, transition: "transform 0.2s" }}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </summary>
      <div style={{ padding: "0 24px 20px", borderTop: "1px solid #E5E7EB" }}>
        <p style={{ paddingTop: "16px", fontSize: "15px", color: "#4B5563", lineHeight: "1.8" }}>{a}</p>
      </div>
    </details>
  );
}
