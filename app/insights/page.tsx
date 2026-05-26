"use client";
import { INSIGHTS } from "@/lib/data";


export default function InsightsPage() {
  return (
    <>
      <div style={{ backgroundColor: "var(--primary)", padding: "110px 24px 64px", textAlign: "center" }}>
        <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "13px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "12px" }}>Knowledge & Advice</p>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(30px, 5vw, 52px)", color: "#fff", lineHeight: "1.2", maxWidth: "680px", margin: "0 auto 16px" }}>
          Insights
        </h1>
        <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "17px", maxWidth: "540px", margin: "0 auto", lineHeight: "1.7" }}>
          Practical advice, care guides and perspectives from our team of home care professionals.
        </p>
      </div>

      <section style={{ backgroundColor: "#fff", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          {/* Featured */}
          <div style={{ marginBottom: "48px" }}>
            <div style={{ borderRadius: "20px", overflow: "hidden", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0", border: "1px solid #E5E7EB", cursor: "pointer", transition: "box-shadow 0.2s" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(0,0,0,0.1)"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = "none"}
            >
              <div style={{ height: "360px", backgroundColor: "var(--primary-xlight)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "12px" }}>
                <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="var(--primary-light)" strokeWidth="1.2" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                <p style={{ color: "var(--primary-light)", fontSize: "13px", fontWeight: 600 }}>Image Placeholder</p>
              </div>
              <div style={{ padding: "40px" }}>
                <div style={{ display: "flex", gap: "8px", marginBottom: "16px", alignItems: "center" }}>
                  <span style={{ backgroundColor: "var(--primary)", color: "#fff", fontSize: "11px", fontWeight: 700, padding: "4px 12px", borderRadius: "12px", letterSpacing: "0.5px" }}>Featured</span>
                  <span style={{ backgroundColor: "var(--primary-xlight)", color: "var(--primary)", fontSize: "11px", fontWeight: 700, padding: "4px 12px", borderRadius: "12px" }}>{INSIGHTS[0].category}</span>
                </div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "26px", color: "#1a2e2e", lineHeight: "1.35", marginBottom: "14px" }}>{INSIGHTS[0].title}</h2>
                <p style={{ fontSize: "15px", color: "#4B5563", lineHeight: "1.8", marginBottom: "24px" }}>{INSIGHTS[0].excerpt}</p>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "13px", color: "#9CA3AF" }}>{INSIGHTS[0].date}</span>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--primary)", fontWeight: 700, fontSize: "14px" }}>
                    Read More
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "24px" }}>
            {INSIGHTS.slice(1).map(post => (
              <article key={post.slug} style={{ borderRadius: "14px", overflow: "hidden", border: "1px solid #E5E7EB", cursor: "pointer", transition: "box-shadow 0.2s" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.1)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = "none"}
              >
                <div style={{ height: "180px", backgroundColor: "var(--primary-xlight)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "10px" }}>
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--primary-light)" strokeWidth="1.2" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                </div>
                <div style={{ padding: "22px" }}>
                  <div style={{ display: "flex", gap: "8px", marginBottom: "10px", flexWrap: "wrap", alignItems: "center" }}>
                    <span style={{ backgroundColor: "var(--primary-xlight)", color: "var(--primary)", fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "12px" }}>{post.category}</span>
                    <span style={{ color: "#9CA3AF", fontSize: "12px" }}>{post.date}</span>
                  </div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", color: "#1a2e2e", lineHeight: "1.4", marginBottom: "10px" }}>{post.title}</h3>
                  <p style={{ fontSize: "13px", color: "#6B7280", lineHeight: "1.6", marginBottom: "16px" }}>{post.excerpt.substring(0, 100)}…</p>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", color: "var(--primary)", fontWeight: 700, fontSize: "13px" }}>
                    Read More
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          div[style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
