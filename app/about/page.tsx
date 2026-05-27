import type { Metadata } from "next";
import { TEAM } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about AlwaysCare4You — our mission, values, team and commitment to transforming home care in Dublin.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div style={{ paddingTop: "110px", backgroundColor: "var(--primary)", padding: "110px 24px 64px", textAlign: "center" }}>
        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "13px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "12px" }}>About Us</p>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(32px, 5vw, 54px)", color: "#fff", lineHeight: "1.2", maxWidth: "700px", margin: "0 auto 16px" }}>
          It&apos;s Who We Are, It&apos;s What We Do
        </h1>
        <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "17px", maxWidth: "580px", margin: "0 auto", lineHeight: "1.7" }}>
          Honesty, reliability and genuine compassion are at the heart of everything we do at AlwaysCare4You.
        </p>
      </div>

      {/* Mission */}
      <section style={{ backgroundColor: "#fff", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>
          {/* Image placeholder */}
          <div style={{ aspectRatio: "1", borderRadius: "20px", backgroundColor: "var(--primary-xlight)", border: "2px dashed var(--primary-light)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "12px" }}>
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--primary-light)" strokeWidth="1.2" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            <p style={{ color: "var(--primary-light)", fontSize: "13px", fontWeight: 600 }}>Image Placeholder</p>
          </div>

          <div>
            <p style={{ color: "var(--primary)", fontWeight: 700, fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "12px" }}>Our Mission</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px, 3vw, 36px)", color: "#1a2e2e", lineHeight: "1.3", marginBottom: "20px" }}>
              Transforming Home Care in Ireland
            </h2>
            <p style={{ fontSize: "15px", color: "#4B5563", lineHeight: "1.8", marginBottom: "16px" }}>
              We are on a mission to change the way home care is perceived and delivered in Ireland — helping older people and those with disabilities, dementia and Alzheimer&apos;s to live independently in their own homes.
            </p>
            <p style={{ fontSize: "15px", color: "#4B5563", lineHeight: "1.8", marginBottom: "16px" }}>
              AlwaysCare4You was founded by experienced Irish carers and health professionals with a shared passion for raising the standard of care in every home we enter. Whether it&apos;s for each other or for every one of our clients, we only make promises we can safely deliver on.
            </p>
            <p style={{ fontSize: "15px", color: "#4B5563", lineHeight: "1.8" }}>
              By investing in our carers — their training, wellbeing and professional development — we raise the quality and safety of the care they provide.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ backgroundColor: "var(--primary-xlight)", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "52px" }}>
            <p style={{ color: "var(--primary)", fontWeight: 700, fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "10px" }}>What Drives Us</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 4vw, 38px)", color: "#1a2e2e" }}>Our Values</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "24px" }}>
            {[
              { title: "Our Word is Our Bond", text: "When we say we will deliver, we follow through — every day, internally and externally, without exception." },
              { title: "Care as a Way of Being", text: "Care is not just a business function. It is interwoven into the fabric of our people, processes and purpose." },
              { title: "Sincerity in Directness", text: "We are straight-talking but kind, warm but direct. Honesty underpins all of our communications and actions." },
              { title: "Courage and Vulnerability", text: "We believe that by opening up, others may do the same, creating a healthier environment built on expression and trust." },
            ].map(v => (
              <div key={v.title} style={{ backgroundColor: "#fff", borderRadius: "14px", padding: "28px", boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
                <div style={{ width: "40px", height: "4px", borderRadius: "2px", backgroundColor: "var(--primary)", marginBottom: "16px" }} />
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", color: "#1a2e2e", marginBottom: "12px" }}>{v.title}</h3>
                <p style={{ fontSize: "14px", color: "#6B7280", lineHeight: "1.7" }}>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Carers first */}
      <section style={{ backgroundColor: "#fff", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>
          <div>
            <p style={{ color: "var(--primary)", fontWeight: 700, fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "12px" }}>Our People</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px, 3vw, 36px)", color: "#1a2e2e", lineHeight: "1.3", marginBottom: "20px" }}>Putting Carers First</h2>
            <p style={{ fontSize: "15px", color: "#4B5563", lineHeight: "1.8", marginBottom: "16px" }}>
              At AlwaysCare4You, our carers are at the centre of everything we do. Just as our carers look after others, we look after them. Your wellbeing — as both a professional and an individual — is important to us.
            </p>
            <p style={{ fontSize: "15px", color: "#4B5563", lineHeight: "1.8", marginBottom: "24px" }}>
              We value the skills and ambitions of every carer and provide ongoing support, education and development opportunities. We want our team to grow and thrive in a culture that champions honesty, integrity, communication and trust.
            </p>
            <a href="/careers" style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "var(--primary)", color: "#fff", padding: "12px 24px", borderRadius: "10px", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}>
              View Careers
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
            </a>
          </div>

          <div style={{ aspectRatio: "1", borderRadius: "20px", backgroundColor: "var(--primary-xlight)", border: "2px dashed var(--primary-light)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "12px" }}>
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--primary-light)" strokeWidth="1.2" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            <p style={{ color: "var(--primary-light)", fontSize: "13px", fontWeight: 600 }}>Image Placeholder</p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ backgroundColor: "var(--primary-xlight)", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
         
      
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
