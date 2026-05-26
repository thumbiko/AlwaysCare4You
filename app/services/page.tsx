"use client";
import { SERVICES } from "@/lib/data";


const ICONS: Record<string, React.ReactNode> = {
  "home": <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>,
  "heart": <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>,
  "accessibility": <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="2"/><path d="M12 7v5m0 0l-3 3m3-3l3 3M9 22l3-5 3 5"/><path d="M6 11h12"/></svg>,
  "leaf": <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 014 13c0-5 8-12 8-12 0 0 8 7 8 12a7 7 0 01-7 7z"/><path d="M12 20V8"/></svg>,
  "home-alt": <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
  "users": <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
  "brain": <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 007 4.5v0A2.5 2.5 0 004.5 7H4a2 2 0 00-2 2v0a2 2 0 002 2h.5A2.5 2.5 0 007 13.5V14a2 2 0 002 2h6a2 2 0 002-2v-.5A2.5 2.5 0 0019.5 11H20a2 2 0 002-2v0a2 2 0 00-2-2h-.5A2.5 2.5 0 0017 4.5v0A2.5 2.5 0 0014.5 2h-5z"/></svg>,
  "star": <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>,
};

export default function ServicesPage() {
  return (
    <>
      <div style={{ backgroundColor: "var(--primary)", padding: "110px 24px 64px", textAlign: "center" }}>
        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "13px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "12px" }}>What We Offer</p>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(30px, 5vw, 52px)", color: "#fff", lineHeight: "1.2", maxWidth: "680px", margin: "0 auto 16px" }}>
          Our Care Services
        </h1>
        <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "17px", maxWidth: "560px", margin: "0 auto", lineHeight: "1.7" }}>
          From daily personal care to specialist support, we offer a full range of home care services tailored to you.
        </p>
      </div>

      <section style={{ backgroundColor: "#fff", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "28px" }}>
          {SERVICES.map(svc => (
            <div key={svc.slug} style={{ borderRadius: "16px", border: "1px solid var(--primary-light)", padding: "36px 32px", transition: "all 0.2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(90,167,167,0.15)"; (e.currentTarget as HTMLElement).style.borderColor = "var(--primary)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; (e.currentTarget as HTMLElement).style.borderColor = "var(--primary-light)"; }}
            >
              <div style={{ color: "var(--primary)", marginBottom: "20px" }}>
                {ICONS[svc.icon]}
              </div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", color: "#1a2e2e", marginBottom: "12px" }}>{svc.title}</h2>
              <p style={{ fontSize: "15px", color: "#4B5563", lineHeight: "1.8" }}>{svc.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How to access */}
      <section style={{ backgroundColor: "var(--primary-xlight)", padding: "80px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px, 3.5vw, 36px)", color: "#1a2e2e", marginBottom: "16px" }}>How to Access Our Services</h2>
          <p style={{ fontSize: "16px", color: "#4B5563", lineHeight: "1.8", marginBottom: "40px" }}>Getting started is simple. We will guide you through every step, from your first contact to your personalised care plan.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px" }}>
            {[
              { step: "01", title: "Get in Touch", text: "Call us or send a message to begin the process." },
              { step: "02", title: "Free Assessment", text: "We visit you at home for a thorough needs assessment." },
              { step: "03", title: "Your Care Plan", text: "We design a personalised plan tailored to your needs." },
              { step: "04", title: "Care Begins", text: "Your dedicated carer begins supporting you at home." },
            ].map(step => (
              <div key={step.step} style={{ backgroundColor: "#fff", borderRadius: "14px", padding: "28px 20px", textAlign: "center" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "50%", backgroundColor: "var(--primary)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px", fontWeight: 700, fontSize: "16px", fontFamily: "'Nunito', sans-serif" }}>{step.step}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "17px", color: "#1a2e2e", marginBottom: "8px" }}>{step.title}</h3>
                <p style={{ fontSize: "13px", color: "#6B7280", lineHeight: "1.6" }}>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
