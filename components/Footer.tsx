import Link from "next/link";
import { COMPANY } from "@/lib/data";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0F2020", color: "#fff" }}>
      {/* CTA band */}
      <div style={{ backgroundColor: "var(--primary)", padding: "52px 24px", textAlign: "center" }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px, 3.5vw, 36px)", color: "#fff", marginBottom: "12px" }}>
          Ready to Start Your Care Journey?
        </h2>
        <p style={{ color: "rgba(255,255,255,0.88)", fontSize: "16px", marginBottom: "28px", maxWidth: "500px", margin: "0 auto 28px" }}>
          Our friendly team is here to answer every question and guide you to the right solution.
        </p>
        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href={`tel:${COMPANY.phone.replace(/\s/g,"")}`}
            style={{
              padding: "12px 28px", borderRadius: "8px",
              backgroundColor: "#fff", color: "var(--primary-dark)",
              fontWeight: 700, fontSize: "15px", textDecoration: "none",
              display: "inline-flex", alignItems: "center", gap: "8px",
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .11h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 13.92v3z" /></svg>
            {COMPANY.phone}
          </a>
          <a
            href={`mailto:${COMPANY.email}`}
            style={{ padding: "12px 28px", borderRadius: "8px", backgroundColor: "transparent", border: "2px solid rgba(255,255,255,0.6)", color: "#fff", fontWeight: 700, fontSize: "15px", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
            {COMPANY.email}
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "60px 24px 40px", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "40px" }}>
        {/* Brand */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
            <FooterLogo />
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "17px", fontWeight: 700, color: "#fff" }}>{COMPANY.name}</span>
          </div>
          <p style={{ color: "#94A3B8", fontSize: "14px", lineHeight: "1.7", marginBottom: "20px" }}>
            Professional home care services across Dublin, delivered with compassion, dignity and expertise.
          </p>
          <div style={{ display: "flex", gap: "10px" }}>
            <SocialBtn label="Facebook" />
            <SocialBtn label="LinkedIn" />
            <SocialBtn label="Instagram" />
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", color: "#fff", marginBottom: "16px", borderBottom: "2px solid var(--primary)", paddingBottom: "8px", display: "inline-block" }}>Our Services</h4>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
            {["Home Care","Respite Care","Disability Care","Palliative Care","Dementia Care","Companionship"].map(s => (
              <li key={s}>
                <Link href={`/services`} style={{ color: "#94A3B8", fontSize: "14px", textDecoration: "none", transition: "color 0.2s" }}>
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick links */}
        <div>
          <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", color: "#fff", marginBottom: "16px", borderBottom: "2px solid var(--primary)", paddingBottom: "8px", display: "inline-block" }}>Quick Links</h4>
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px" }}>
            {[
              { href: "/about", label: "About Us" },
              { href: "/careers", label: "Careers" },
              { href: "/insights", label: "Insights" },
              { href: "/faqs", label: "FAQs" },
              { href: "#", label: "Privacy Policy" },
            ].map(l => (
              <li key={l.href}>
                <Link href={l.href} style={{ color: "#94A3B8", fontSize: "14px", textDecoration: "none" }}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: "16px", color: "#fff", marginBottom: "16px", borderBottom: "2px solid var(--primary)", paddingBottom: "8px", display: "inline-block" }}>Contact</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <ContactItem icon="pin" text={COMPANY.address} />
            <ContactItem icon="phone" text={COMPANY.phone} href={`tel:${COMPANY.phone.replace(/\s/g,"")}`} />
            <ContactItem icon="email" text={COMPANY.email} href={`mailto:${COMPANY.email}`} />
            <ContactItem icon="clock" text="Mon–Fri: 8:30am–5:30pm" />
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", padding: "20px 24px", textAlign: "center" }}>
        <p style={{ color: "#64748B", fontSize: "13px" }}>
          &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <Link href="#" style={{ color: "#64748B" }}>Privacy Policy</Link>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          Regulated by HIQA
        </p>
      </div>
    </footer>
  );
}

function FooterLogo() {
  return (
    <div style={{ width: "36px", height: "36px", borderRadius: "8px", backgroundColor: "var(--primary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <svg viewBox="0 0 36 36" width="36" height="36" fill="none">
        <path d="M18 8C12.477 8 8 12.477 8 18C8 23.523 12.477 28 18 28C23.523 28 28 23.523 28 18C28 12.477 23.523 8 18 8Z" stroke="white" strokeWidth="1.5" fill="none" />
        <path d="M18 13V18L22 20" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function ContactItem({ icon, text, href }: { icon: string; text: string; href?: string }) {
  const iconEl = {
    pin: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5AA7A7" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
    phone: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5AA7A7" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .11h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 13.92v3z" /></svg>,
    email: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5AA7A7" strokeWidth="2" strokeLinecap="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
    clock: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5AA7A7" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  }[icon];

  const content = (
    <div style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
      <span style={{ marginTop: "1px", flexShrink: 0 }}>{iconEl}</span>
      <span style={{ color: "#94A3B8", fontSize: "13px", lineHeight: "1.5" }}>{text}</span>
    </div>
  );

  return href ? (
    <a href={href} style={{ textDecoration: "none" }}>{content}</a>
  ) : content;
}

function SocialBtn({ label }: { label: string }) {
  return (
    <button
      aria-label={label}
      style={{ width: "34px", height: "34px", borderRadius: "8px", backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.1)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "#94A3B8", transition: "all 0.2s" }}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {label === "Facebook" && <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />}
        {label === "LinkedIn" && <><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></>}
        {label === "Instagram" && <><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></>}
      </svg>
    </button>
  );
}
