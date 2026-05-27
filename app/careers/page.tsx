"use client";


const BENEFITS = [
  "Market leading rates of pay between €15.00 and €20.00 per hour",
  "Evening premium payable between 6pm and 9pm",
  "Monthly Care Award for staff",
  "Sign-on bonus and refer-a-friend scheme",
  "Fortnightly pay",
  "Personal Development Plan with education credits earned for every hour worked",
  "Supportive team culture and ongoing mentorship",
  "Clear career progression pathway",
];

const REQUIREMENTS = [
  "Permission to work in Ireland (Irish or EU national, or valid work permit)",
  "Two satisfactory work or character references",
  "Garda vetting clearance prior to commencement",
  "QQI Level 5 in Care Skills and Care of the Older Person (or equivalent)",
];

const POSITIONS = [
  { title: "Home Care Assistant", location: "Dublin City & Suburbs", type: "Full Time / Part Time" },
  { title: "Senior Care Worker", location: "Dublin North", type: "Full Time" },
  { title: "Dementia Care Specialist", location: "Dublin South", type: "Full Time" },
  { title: "Night Care Worker", location: "Dublin Wide", type: "Part Time" },
];

export default function CareersPage() {
  return (
    <>
      <div style={{ backgroundColor: "var(--primary)", padding: "110px 24px 64px", textAlign: "center" }}>
        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "13px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "12px" }}>Join Our Team</p>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(30px, 5vw, 52px)", color: "#fff", lineHeight: "1.2", maxWidth: "680px", margin: "0 auto 16px" }}>
          Carers Above All Else
        </h1>
        <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "17px", maxWidth: "560px", margin: "0 auto 28px", lineHeight: "1.7" }}>
          Picture a career where you not only provide exceptional care, but feel genuinely cared for as an individual.
        </p>
        <a href="#positions" style={{ display: "inline-flex", alignItems: "center", gap: "8px", backgroundColor: "#fff", color: "var(--primary-dark)", padding: "13px 28px", borderRadius: "10px", fontWeight: 700, fontSize: "15px", textDecoration: "none" }}>
          View Open Positions
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
        </a>
      </div>

      {/* Why work with us */}
      <section style={{ backgroundColor: "#fff", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>
          <div style={{ aspectRatio: "4/3", borderRadius: "20px", backgroundColor: "var(--primary-xlight)", border: "2px dashed var(--primary-light)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "12px" }}>
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--primary-light)" strokeWidth="1.2" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
            <p style={{ color: "var(--primary-light)", fontSize: "13px", fontWeight: 600 }}>Image Placeholder</p>
          </div>
          <div>
            <p style={{ color: "var(--primary)", fontWeight: 700, fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "12px" }}>Your Career</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px, 3vw, 36px)", color: "#1a2e2e", lineHeight: "1.3", marginBottom: "20px" }}>
              Picture Your Career With AlwaysCare4You
            </h2>
            <p style={{ fontSize: "15px", color: "#4B5563", lineHeight: "1.8", marginBottom: "16px" }}>
              We want to see you grow, not only as a professional, but as a person. Our culture champions honesty, encourages ownership and creates trust between everyone who works here.
            </p>
            <p style={{ fontSize: "15px", color: "#4B5563", lineHeight: "1.8" }}>
              Work-life balance is something we make important, because the health and wellbeing of our team members matters as much to us as that of the people we care for.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ backgroundColor: "var(--primary-xlight)", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <p style={{ color: "var(--primary)", fontWeight: 700, fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "10px" }}>Rewards</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px, 3.5vw, 36px)", color: "#1a2e2e" }}>Benefits for Our Team</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "16px" }}>
            {BENEFITS.map((b, i) => (
              <div key={i} style={{ backgroundColor: "#fff", borderRadius: "12px", padding: "20px 22px", display: "flex", gap: "12px", alignItems: "flex-start", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>
                <div style={{ width: "22px", height: "22px", borderRadius: "50%", backgroundColor: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "1px" }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <span style={{ fontSize: "14px", color: "#374151", lineHeight: "1.6" }}>{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section style={{ backgroundColor: "#fff", padding: "80px 24px" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <p style={{ color: "var(--primary)", fontWeight: 700, fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "10px" }}>Eligibility</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px, 3.5vw, 36px)", color: "#1a2e2e" }}>Basic Requirements</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {REQUIREMENTS.map((r, i) => (
              <div key={i} style={{ display: "flex", gap: "14px", alignItems: "flex-start", padding: "16px 20px", backgroundColor: "var(--primary-xlight)", borderRadius: "10px", border: "1px solid var(--primary-light)" }}>
                <span style={{ fontSize: "18px", fontWeight: 700, color: "var(--primary)", fontFamily: "'Playfair Display', serif", flexShrink: 0 }}>{String(i + 1).padStart(2, "0")}</span>
                <span style={{ fontSize: "15px", color: "#374151", lineHeight: "1.6" }}>{r}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" style={{ backgroundColor: "var(--primary-xlight)", padding: "80px 24px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "40px" }}>
            <p style={{ color: "var(--primary)", fontWeight: 700, fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "10px" }}>Now Hiring</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px, 3.5vw, 36px)", color: "#1a2e2e" }}>Available Positions</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {POSITIONS.map((pos, i) => (
              <div key={i} style={{ backgroundColor: "#fff", borderRadius: "14px", padding: "24px 28px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px", boxShadow: "0 2px 10px rgba(0,0,0,0.05)", border: "1px solid transparent", transition: "border-color 0.2s" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "var(--primary)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "transparent"}
              >
                <div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "19px", color: "#1a2e2e", marginBottom: "6px" }}>{pos.title}</h3>
                  <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "13px", color: "#6B7280" }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                      {pos.location}
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "13px", color: "#6B7280" }}>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                      {pos.type}
                    </span>
                  </div>
                </div>
                <button style={{ padding: "10px 22px", borderRadius: "8px", backgroundColor: "var(--primary)", color: "#fff", border: "none", fontWeight: 700, fontSize: "14px", cursor: "pointer", fontFamily: "'Nunito', sans-serif", whiteSpace: "nowrap" }}>
                  Apply Now
                </button>
              </div>
            ))}
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
