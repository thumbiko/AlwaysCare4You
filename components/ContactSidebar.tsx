"use client";
import { useEffect, useRef } from "react";
import { COMPANY } from "@/lib/data";

export default function ContactSidebar({ open, onClose }: { open: boolean; onClose: () => void }) {
  const sidebarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: "fixed", inset: 0, zIndex: 200,
          backgroundColor: "rgba(0,0,0,0.5)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Sidebar panel */}
      <div
        ref={sidebarRef}
        style={{
          position: "fixed", top: 0, right: 0, bottom: 0,
          width: "min(480px, 100vw)",
          zIndex: 201,
          backgroundColor: "#fff",
          boxShadow: "-4px 0 40px rgba(0,0,0,0.15)",
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.35s cubic-bezier(0.4,0,0.2,1)",
          display: "flex", flexDirection: "column",
          overflowY: "auto",
        }}
      >
        {/* Header */}
        <div style={{ backgroundColor: "var(--primary)", padding: "32px 32px 24px", position: "relative" }}>
          <button
            onClick={onClose}
            style={{
              position: "absolute", top: "16px", right: "16px",
              background: "rgba(255,255,255,0.2)", border: "none",
              borderRadius: "50%", width: "36px", height: "36px",
              cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
              color: "#fff", transition: "background 0.2s",
            }}
            aria-label="Close"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "26px", color: "#fff", marginBottom: "6px" }}>Get In Touch</h2>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "14px", lineHeight: "1.5" }}>
            We would love to hear from you. Fill in the form below or contact us directly.
          </p>
        </div>

        {/* Contact info */}
        <div style={{ padding: "20px 32px", backgroundColor: "var(--primary-xlight)", display: "flex", gap: "24px", flexWrap: "wrap" }}>
          <a href={`tel:${COMPANY.phone.replace(/\s/g,"")}`} style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--accent)", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .11h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 13.92v3z" /></svg>
            {COMPANY.phone}
          </a>
          <a href={`mailto:${COMPANY.email}`} style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--accent)", fontWeight: 700, fontSize: "14px", textDecoration: "none" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
            {COMPANY.email}
          </a>
        </div>

        {/* Form */}
        <form
          onSubmit={e => { e.preventDefault(); alert("Thank you for your message. We will be in touch shortly."); onClose(); }}
          style={{ padding: "28px 32px", display: "flex", flexDirection: "column", gap: "16px", flex: 1 }}
        >
          <FormField label="Full Name" name="name" type="text" required placeholder="Your full name" />
          <FormField label="Phone Number" name="phone" type="tel" placeholder="Your phone number" />
          <FormField label="Email Address" name="email" type="email" required placeholder="your@email.ie" />

          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <label style={{ fontWeight: 700, fontSize: "13px", color: "#374151", letterSpacing: "0.3px" }}>Enquiry Type</label>
            <select
              name="enquiry"
              style={{ padding: "11px 14px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "14px", fontFamily: "'Nunito', sans-serif", color: "#374151", backgroundColor: "#fff", outline: "none" }}
            >
              <option value="">Select enquiry type...</option>
              <option>Home Care</option>
              <option>Respite Care</option>
              <option>Disability Care</option>
              <option>Palliative Care</option>
              <option>Careers</option>
              <option>General Enquiry</option>
            </select>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <label style={{ fontWeight: 700, fontSize: "13px", color: "#374151", letterSpacing: "0.3px" }}>How did you hear about us?</label>
            <select
              name="source"
              style={{ padding: "11px 14px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "14px", fontFamily: "'Nunito', sans-serif", color: "#374151", backgroundColor: "#fff", outline: "none" }}
            >
              <option value="">Please select...</option>
              <option>Google Search</option>
              <option>Recommendation / Word of Mouth</option>
              <option>Social Media</option>
              <option>HSE Referral</option>
              <option>Other</option>
            </select>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
            <label style={{ fontWeight: 700, fontSize: "13px", color: "#374151", letterSpacing: "0.3px" }}>Message</label>
            <textarea
              name="message"
              rows={4}
              placeholder="Tell us how we can help..."
              style={{ padding: "11px 14px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "14px", fontFamily: "'Nunito', sans-serif", color: "#374151", resize: "vertical", outline: "none", lineHeight: "1.6" }}
            />
          </div>

          <button
            type="submit"
            style={{
              padding: "14px", borderRadius: "10px", border: "none",
              backgroundColor: "var(--primary)", color: "#fff",
              fontWeight: 700, fontSize: "15px",
              fontFamily: "'Nunito', sans-serif", cursor: "pointer",
              boxShadow: "0 4px 14px rgba(90,167,167,0.35)",
              transition: "all 0.2s", letterSpacing: "0.3px",
              marginTop: "4px",
            }}
          >
            Send Message
          </button>
          <p style={{ fontSize: "11px", color: "#9CA3AF", textAlign: "center", lineHeight: "1.5" }}>
            Your information is kept strictly confidential and will never be shared with third parties.
          </p>
        </form>
      </div>
    </>
  );
}

function FormField({ label, name, type, placeholder, required }: {
  label: string; name: string; type: string; placeholder?: string; required?: boolean;
}) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
      <label style={{ fontWeight: 700, fontSize: "13px", color: "#374151", letterSpacing: "0.3px" }}>
        {label} {required && <span style={{ color: "var(--primary)" }}>*</span>}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        required={required}
        style={{ padding: "11px 14px", border: "1.5px solid #E5E7EB", borderRadius: "8px", fontSize: "14px", fontFamily: "'Nunito', sans-serif", color: "#374151", outline: "none" }}
      />
    </div>
  );
}
