"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "@/context/ThemeContext";
import { COMPANY } from "@/lib/data";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/faqs", label: "FAQs" },
  { href: "/careers", label: "Careers" },
  { href: "/insights", label: "Insights" },
];

export default function Navbar({ onContactOpen }: { onContactOpen: () => void }) {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        backgroundColor: scrolled ? "var(--nav-bg)" : "transparent",
        boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.08)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      {/* Top bar */}
      <div style={{ backgroundColor: "var(--primary)", color: "#fff", textAlign: "center", padding: "6px 0", fontSize: "13px", fontWeight: 600, letterSpacing: "0.5px" }}>
        <a href={`tel:${COMPANY.phone.replace(/\s/g, "")}`} style={{ color: "#fff", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}>
          <PhoneIcon />
          {COMPANY.phone}
        </a>
      </div>

      {/* Main nav */}
      <nav style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px" }}>
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
          <LogoPlaceholder />
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 700, color: scrolled ? "var(--accent)" : "#fff", transition: "color 0.3s" }}>
            {COMPANY.name}
          </span>
        </Link>

        {/* Desktop nav */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }} className="desktop-nav">
          {NAV_LINKS.map(link => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                padding: "8px 14px",
                borderRadius: "6px",
                fontWeight: 600,
                fontSize: "14px",
                color: scrolled ? "var(--nav-text)" : "#fff",
                textDecoration: "none",
                transition: "all 0.2s",
                letterSpacing: "0.3px",
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.15)")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "transparent")}
            >
              {link.label}
            </Link>
          ))}

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            title="Toggle colour theme"
            style={{
              display: "flex", alignItems: "center", gap: "6px",
              padding: "7px 12px",
              borderRadius: "20px",
              border: `2px solid ${scrolled ? "var(--primary)" : "rgba(255,255,255,0.6)"}`,
              backgroundColor: "transparent",
              color: scrolled ? "var(--accent)" : "#fff",
              cursor: "pointer", fontWeight: 600, fontSize: "12px",
              letterSpacing: "0.5px", transition: "all 0.3s",
            }}
          >
            <PaletteIcon color={scrolled ? "var(--primary)" : "#fff"} />
            {theme === "teal" ? "Pink" : "Teal"}
          </button>

          {/* Contact button */}
          <button
            onClick={onContactOpen}
            style={{
              padding: "10px 20px",
              borderRadius: "8px",
              backgroundColor: "var(--primary)",
              color: "#fff",
              border: "none",
              cursor: "pointer",
              fontWeight: 700,
              fontSize: "14px",
              fontFamily: "'Nunito', sans-serif",
              boxShadow: "0 4px 14px rgba(90,167,167,0.35)",
              transition: "all 0.2s",
              letterSpacing: "0.3px",
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 20px rgba(90,167,167,0.45)"; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 14px rgba(90,167,167,0.35)"; }}
          >
            Contact Us
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
          style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: "8px" }}
        >
          <HamburgerIcon open={menuOpen} color={scrolled ? "var(--accent)" : "#fff"} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          backgroundColor: "var(--nav-bg)", borderTop: "1px solid var(--primary-light)",
          padding: "16px 24px", display: "flex", flexDirection: "column", gap: "4px",
        }}
          className="mobile-menu"
        >
          {NAV_LINKS.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ padding: "12px 0", fontWeight: 600, fontSize: "15px", color: "var(--nav-text)", textDecoration: "none", borderBottom: "1px solid var(--primary-xlight)" }}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ paddingTop: "12px", display: "flex", gap: "10px" }}>
            <button
              onClick={() => { toggleTheme(); setMenuOpen(false); }}
              style={{ flex: 1, padding: "10px", borderRadius: "8px", border: "2px solid var(--primary)", backgroundColor: "transparent", color: "var(--accent)", fontWeight: 600, fontSize: "13px", cursor: "pointer", fontFamily: "'Nunito', sans-serif" }}
            >
              Switch to {theme === "teal" ? "Pink" : "Teal"}
            </button>
            <button
              onClick={() => { onContactOpen(); setMenuOpen(false); }}
              style={{ flex: 1, padding: "10px", borderRadius: "8px", border: "none", backgroundColor: "var(--primary)", color: "#fff", fontWeight: 700, fontSize: "13px", cursor: "pointer", fontFamily: "'Nunito', sans-serif" }}
            >
              Contact Us
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
}

function LogoPlaceholder() {
  return (
    <div style={{
      width: "44px", height: "44px", borderRadius: "10px",
      backgroundColor: "rgba(255,255,255,0.2)",
      border: "2px solid rgba(255,255,255,0.5)",
      display: "flex", alignItems: "center", justifyContent: "center",
      overflow: "hidden",
    }}>
      <svg viewBox="0 0 44 44" width="44" height="44" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="44" height="44" rx="10" fill="rgba(255,255,255,0.15)" />
        <path d="M22 12C16.477 12 12 16.477 12 22C12 27.523 16.477 32 22 32C27.523 32 32 27.523 32 22C32 16.477 27.523 12 22 12Z" stroke="white" strokeWidth="1.5" fill="none" />
        <path d="M22 16V22L26 24" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function PhoneIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .11h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 13.92v3z" />
    </svg>
  );
}

function PaletteIcon({ color }: { color: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13.5" cy="6.5" r=".5" fill={color} />
      <circle cx="17.5" cy="10.5" r=".5" fill={color} />
      <circle cx="8.5" cy="7.5" r=".5" fill={color} />
      <circle cx="6.5" cy="12.5" r=".5" fill={color} />
      <path d="M12 2C6.5 2 2 6.5 2 12a10 10 0 0010 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.477-1.113-.29-.265-.471-.643-.471-1.052 0-.92.754-1.648 1.675-1.648H16c2.757 0 5-2.243 5-5C21 6.134 16.972 2 12 2z" />
    </svg>
  );
}

function HamburgerIcon({ open, color }: { open: boolean; color: string }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round">
      {open ? (
        <>
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </>
      ) : (
        <>
          <line x1="3" y1="7" x2="21" y2="7" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="17" x2="21" y2="17" />
        </>
      )}
    </svg>
  );
}
