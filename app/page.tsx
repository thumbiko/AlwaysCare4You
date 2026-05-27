"use client";
import { useState } from "react";
import HeroCarousel from "@/components/HeroCarousel";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import ContactSidebar from "@/components/ContactSidebar";
import Link from "next/link";
import { SERVICES, INSIGHTS, COMPANY } from "@/lib/data";

const SERVICE_ICONS: Record<string, React.ReactNode> = {
  "home": <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9,22 9,12 15,12 15,22"/></svg>,
  "heart": <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>,
  "accessibility": <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="2"/><path d="M12 7v5m0 0l-3 3m3-3l3 3M9 22l3-5 3 5"/><path d="M6 11h12"/></svg>,
  "leaf": <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 014 13c0-5 8-12 8-12 0 0 8 7 8 12a7 7 0 01-7 7z"/><path d="M12 20V8"/></svg>,
  "home-alt": <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>,
  "users": <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
  "brain": <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9.5 2A2.5 2.5 0 007 4.5v0A2.5 2.5 0 004.5 7H4a2 2 0 00-2 2v0a2 2 0 002 2h.5A2.5 2.5 0 007 13.5V14a2 2 0 002 2h6a2 2 0 002-2v-.5A2.5 2.5 0 0019.5 11H20a2 2 0 002-2v0a2 2 0 00-2-2h-.5A2.5 2.5 0 0017 4.5v0A2.5 2.5 0 0014.5 2h-5z"/></svg>,
  "star": <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/></svg>,
};

export default function HomePage() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <HeroCarousel onContactOpen={() => setContactOpen(true)} />

      {/* Trust indicators */}
      <section style={{ backgroundColor: "#fff", padding: "40px 24px", borderBottom: "1px solid var(--primary-xlight)" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "20px" }}>
          {[
            { icon: "shield", label: "Garda Vetted", sub: "All carers fully vetted" },
            { icon: "cert", label: "QQI Qualified", sub: "Level 5 certified" },
            
            { icon: "hse", label: "HSE Approved", sub: "Public & private funded" },
          ].map(t => (
            <div key={t.label} style={{ display: "flex", alignItems: "center", gap: "12px", minWidth: "180px" }}>
              <div style={{ width: "44px", height: "44px", borderRadius: "10px", backgroundColor: "var(--primary-xlight)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <TrustIcon name={t.icon} />
              </div>
              <div>
                <div style={{ fontWeight: 700, fontSize: "14px", color: "#1a2e2e" }}>{t.label}</div>
                <div style={{ fontSize: "12px", color: "#9CA3AF" }}>{t.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About intro */}
      <section style={{ backgroundColor: "#fff", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
          <div>
            <p style={{ color: "var(--primary)", fontWeight: 700, fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "12px" }}>Who We Are</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 3.5vw, 40px)", color: "#1a2e2e", lineHeight: "1.3", marginBottom: "20px" }}>
              Expert Care, Delivered with Heart
            </h2>
            <p style={{ fontSize: "16px", color: "#4B5563", lineHeight: "1.8", marginBottom: "16px" }}>
              At AlwaysCare4You, we believe that outstanding home care starts with outstanding carers. Whether you need help with personal care, specialist support, or simply the reassurance of a compassionate presence, we are here.
            </p>
            <p style={{ fontSize: "16px", color: "#4B5563", lineHeight: "1.8", marginBottom: "28px" }}>
              We are on a mission to transform the way home care is delivered in Ireland — making it safer, more personalised and more empowering for every individual we support.
            </p>
            <Link
              href="/about"
              style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "var(--primary)", fontWeight: 700, fontSize: "15px", textDecoration: "none", borderBottom: "2px solid var(--primary)", paddingBottom: "2px" }}
            >
              Learn More About Us
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </Link>
          </div>

          {/* Image placeholder */}
          <div style={{
            aspectRatio: "4/3",
            borderRadius: "16px",
            backgroundColor: "var(--primary-xlight)",
            border: "2px dashed var(--primary-light)",
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
            gap: "12px",
          }}>
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="var(--primary-light)" strokeWidth="1.2" strokeLinecap="round">
              <rect x="3" y="3" width="18" height="18" rx="3" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
            <p style={{ color: "var(--primary-light)", fontSize: "13px", fontWeight: 600 }}>Image Placeholder</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ backgroundColor: "var(--primary-xlight)", padding: "80px 24px" }} id="services">
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "52px" }}>
            <p style={{ color: "var(--primary)", fontWeight: 700, fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "10px" }}>What We Offer</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 4vw, 40px)", color: "#1a2e2e", marginBottom: "14px" }}>Our Care Services</h2>
            <p style={{ color: "#6B7280", fontSize: "15px", maxWidth: "560px", margin: "0 auto" }}>
              A full range of professional home care services, tailored to your individual needs and delivered in the comfort of your own home.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "20px" }}>
            {SERVICES.map(svc => (
              <Link
                key={svc.slug}
                href="/services"
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    backgroundColor: "#fff", borderRadius: "14px", padding: "28px 24px",
                    border: "1px solid transparent",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                    transition: "all 0.2s",
                    cursor: "pointer",
                    height: "100%",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--primary)";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(90,167,167,0.15)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "transparent";
                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.05)";
                  }}
                >
                  <div style={{ width: "52px", height: "52px", borderRadius: "12px", backgroundColor: "var(--primary-xlight)", color: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                    {SERVICE_ICONS[svc.icon]}
                  </div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", color: "#1a2e2e", marginBottom: "10px" }}>{svc.title}</h3>
                  <p style={{ fontSize: "14px", color: "#6B7280", lineHeight: "1.7" }}>{svc.short}</p>
                  <div style={{ marginTop: "16px", color: "var(--primary)", fontWeight: 700, fontSize: "13px", display: "flex", alignItems: "center", gap: "4px" }}>
                    Find out more
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6" /></svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HSE Funding info */}
      <section style={{ backgroundColor: "#fff", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
          {[
            {
              title: "HSE-Funded Home Care",
              icon: "gov",
              text: "We support clients across Dublin through the HSE Home Support Service — a free service available to those aged 65 or over, and to those with disabilities under 65. No medical card required. We will guide you through every step of the application.",
              link: "Apply with HSE Support",
            },
            {
              title: "Privately-Funded Care",
              icon: "private",
              text: "For those who require more support than HSE funding allows, we offer flexible private care plans. Tax relief is also available on qualifying home care expenses. Contact our team for full details on rates and options.",
              link: "Enquire About Private Care",
            },
          ].map(card => (
            <div key={card.title} style={{ backgroundColor: "var(--primary-xlight)", borderRadius: "16px", padding: "32px", border: "1px solid var(--primary-light)" }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", color: "#1a2e2e", marginBottom: "14px" }}>{card.title}</h3>
              <p style={{ fontSize: "15px", color: "#4B5563", lineHeight: "1.8", marginBottom: "20px" }}>{card.text}</p>
              <button
                onClick={() => setContactOpen(true)}
                style={{ display: "inline-flex", alignItems: "center", gap: "6px", backgroundColor: "var(--primary)", color: "#fff", padding: "10px 20px", borderRadius: "8px", border: "none", fontWeight: 700, fontSize: "14px", cursor: "pointer", fontFamily: "'Nunito', sans-serif" }}
              >
                {card.link}
              </button>
            </div>
          ))}
        </div>
      </section>

      <TestimonialsCarousel />

      {/* Insights preview */}
      <section style={{ backgroundColor: "#fff", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "40px", flexWrap: "wrap", gap: "16px" }}>
            <div>
              <p style={{ color: "var(--primary)", fontWeight: 700, fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "8px" }}>Latest Articles</p>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px, 3.5vw, 36px)", color: "#1a2e2e" }}>Insights & Advice</h2>
            </div>
            <Link href="/insights" style={{ color: "var(--primary)", fontWeight: 700, fontSize: "14px", textDecoration: "none", display: "flex", alignItems: "center", gap: "6px" }}>
              View all articles
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6"/></svg>
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "24px" }}>
            {INSIGHTS.slice(0, 3).map(post => (
              <Link key={post.slug} href="/insights" style={{ textDecoration: "none" }}>
                <article
                  style={{ borderRadius: "14px", overflow: "hidden", border: "1px solid #F3F4F6", transition: "box-shadow 0.2s", cursor: "pointer" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(0,0,0,0.1)"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.boxShadow = "none"}
                >
                  {/* Image placeholder */}
                  <div style={{ height: "180px", backgroundColor: "var(--primary-xlight)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="var(--primary-light)" strokeWidth="1.2" strokeLinecap="round"><rect x="3" y="3" width="18" height="18" rx="3"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                  </div>
                  <div style={{ padding: "20px" }}>
                    <div style={{ display: "flex", gap: "8px", marginBottom: "10px", flexWrap: "wrap" }}>
                      <span style={{ backgroundColor: "var(--primary-xlight)", color: "var(--primary)", fontSize: "11px", fontWeight: 700, padding: "3px 10px", borderRadius: "12px", letterSpacing: "0.5px" }}>{post.category}</span>
                      <span style={{ color: "#9CA3AF", fontSize: "12px" }}>{post.date}</span>
                    </div>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: "17px", color: "#1a2e2e", lineHeight: "1.4", marginBottom: "10px" }}>{post.title}</h3>
                    <p style={{ fontSize: "13px", color: "#6B7280", lineHeight: "1.6" }}>{post.excerpt.substring(0, 90)}…</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section style={{ backgroundColor: "var(--primary)", padding: "64px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: "640px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px, 4vw, 38px)", color: "#fff", marginBottom: "14px" }}>
            Speak to Our Care Team Today
          </h2>
          <p style={{ color: "rgba(255,255,255,0.88)", fontSize: "16px", lineHeight: "1.7", marginBottom: "32px" }}>
            We are ready to answer your questions and find the right care solution for you or your loved one.
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href={`tel:${COMPANY.phone.replace(/\s/g,"")}`} style={{ padding: "13px 28px", borderRadius: "10px", backgroundColor: "#fff", color: "var(--primary-dark)", fontWeight: 700, fontSize: "15px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .11h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 13.92v3z"/></svg>
              Call {COMPANY.phone}
            </a>
            <button onClick={() => setContactOpen(true)} style={{ padding: "13px 28px", borderRadius: "10px", backgroundColor: "transparent", color: "#fff", border: "2px solid rgba(255,255,255,0.6)", fontWeight: 700, fontSize: "15px", cursor: "pointer", fontFamily: "'Nunito', sans-serif", display: "inline-flex", alignItems: "center", gap: "8px" }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              Send Us a Message
            </button>
          </div>
        </div>
      </section>

      <ContactSidebar open={contactOpen} onClose={() => setContactOpen(false)} />

      <style>{`
        @media (max-width: 768px) {
          section > div[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </>
  );
}

function TrustIcon({ name }: { name: string }) {
  const props = { width: "22", height: "22", viewBox: "0 0 24 24", fill: "none", stroke: "var(--primary)", strokeWidth: "2", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  if (name === "shield") return <svg {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>;
  if (name === "cert") return <svg {...props}><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/></svg>;
  if (name === "available") return <svg {...props}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
  return <svg {...props}><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/></svg>;
}
