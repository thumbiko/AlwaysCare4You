"use client";
import { useState, useEffect, useCallback } from "react";

const SLIDES = [
  {
    title: "Expert Home Care, Always There For You",
    subtitle: "Compassionate, professional care delivered in the comfort and familiarity of your own home.",
    bg: "var(--hero-overlay)",
  },
  {
    title: "Supporting Independence at Every Stage of Life",
    subtitle: "From daily assistance to specialist palliative and dementia care, we are with you every step of the way.",
    bg: "var(--hero-overlay)",
  },
  {
    title: "Carers Who Truly Care",
    subtitle: "Vetted, qualified and passionate home care professionals dedicated to your wellbeing and dignity.",
    bg: "var(--hero-overlay)",
  },
];

export default function HeroCarousel({ onContactOpen }: { onContactOpen: () => void }) {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const next = useCallback(() => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent(c => (c + 1) % SLIDES.length);
      setIsTransitioning(false);
    }, 400);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 5500);
    return () => clearInterval(interval);
  }, [next]);

  const goTo = (i: number) => {
    if (i === current) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrent(i);
      setIsTransitioning(false);
    }, 400);
  };

  const slide = SLIDES[current];

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: "#1a2e2e",
      }}
      aria-label="Hero carousel"
    >
      {/* Background image placeholder with gradient overlay */}
      <div
        style={{
          position: "absolute", inset: 0,
          background: `linear-gradient(135deg, var(--primary-dark) 0%, #1a2e2e 100%)`,
          opacity: 0.92,
        }}
      />

      {/* Decorative pattern */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", opacity: 0.06 }}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1.5" fill="white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Hero image placeholder */}
      <div style={{
        position: "absolute", inset: 0,
        display: "flex", alignItems: "center", justifyContent: "flex-end",
        paddingRight: "5%", opacity: 0.12,
      }}>
        <svg viewBox="0 0 400 400" width="520" height="520" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="160" r="80" stroke="white" strokeWidth="2" />
          <path d="M120 320 Q200 260 280 320" stroke="white" strokeWidth="2" fill="none" />
          <path d="M160 320 L160 380 M240 320 L240 380" stroke="white" strokeWidth="2" />
          <circle cx="200" cy="100" r="12" fill="white" opacity="0.5" />
        </svg>
      </div>

      {/* Content */}
      <div
        style={{
          position: "relative", zIndex: 1,
          maxWidth: "860px",
          padding: "0 32px",
          textAlign: "center",
          opacity: isTransitioning ? 0 : 1,
          transform: isTransitioning ? "translateY(10px)" : "translateY(0)",
          transition: "opacity 0.4s ease, transform 0.4s ease",
        }}
      >
        <div style={{
          display: "inline-block",
          backgroundColor: "var(--primary)",
          color: "#fff",
          padding: "6px 18px",
          borderRadius: "20px",
          fontSize: "12px",
          fontWeight: 700,
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          marginBottom: "24px",
        }}>
          Professional Home Care Services
        </div>

        <h1 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(32px, 5vw, 62px)",
          color: "#fff",
          lineHeight: "1.2",
          marginBottom: "20px",
          fontWeight: 700,
        }}>
          {slide.title}
        </h1>

        <p style={{
          fontSize: "clamp(15px, 2vw, 19px)",
          color: "rgba(255,255,255,0.82)",
          lineHeight: "1.7",
          maxWidth: "640px",
          margin: "0 auto 36px",
          fontWeight: 400,
        }}>
          {slide.subtitle}
        </p>

        <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="/services"
            style={{
              padding: "14px 32px",
              borderRadius: "10px",
              backgroundColor: "var(--primary)",
              color: "#fff",
              fontWeight: 700,
              fontSize: "15px",
              textDecoration: "none",
              boxShadow: "0 4px 20px rgba(90,167,167,0.45)",
              transition: "all 0.2s",
              letterSpacing: "0.3px",
              display: "inline-flex", alignItems: "center", gap: "8px",
            }}
          >
            <ServicesIcon />
            View Services
          </a>
          <button
            onClick={onContactOpen}
            style={{
              padding: "14px 32px",
              borderRadius: "10px",
              backgroundColor: "transparent",
              color: "#fff",
              fontWeight: 700,
              fontSize: "15px",
              border: "2px solid rgba(255,255,255,0.6)",
              cursor: "pointer",
              transition: "all 0.2s",
              letterSpacing: "0.3px",
              fontFamily: "'Nunito', sans-serif",
              display: "inline-flex", alignItems: "center", gap: "8px",
            }}
          >
            <PhoneIcon />
            Contact Us
          </button>
        </div>
      </div>

      {/* Dots */}
      <div style={{ position: "absolute", bottom: "40px", left: "50%", transform: "translateX(-50%)", display: "flex", gap: "10px" }}>
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            style={{
              width: i === current ? "28px" : "10px",
              height: "10px",
              borderRadius: "5px",
              backgroundColor: i === current ? "var(--primary)" : "rgba(255,255,255,0.4)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s",
              padding: 0,
            }}
          />
        ))}
      </div>

      {/* Arrow buttons */}
      <button
        onClick={() => goTo((current - 1 + SLIDES.length) % SLIDES.length)}
        style={{ position: "absolute", left: "20px", top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", borderRadius: "50%", width: "44px", height: "44px", cursor: "pointer", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.2s" }}
        aria-label="Previous slide"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="15 18 9 12 15 6" /></svg>
      </button>
      <button
        onClick={() => next()}
        style={{ position: "absolute", right: "20px", top: "50%", transform: "translateY(-50%)", background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", borderRadius: "50%", width: "44px", height: "44px", cursor: "pointer", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", transition: "background 0.2s" }}
        aria-label="Next slide"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="9 18 15 12 9 6" /></svg>
      </button>

      {/* Scroll indicator */}
      <div style={{ position: "absolute", bottom: "80px", right: "40px", color: "rgba(255,255,255,0.4)", fontSize: "11px", letterSpacing: "2px", textTransform: "uppercase", writingMode: "vertical-rl" }}>
        Scroll to explore
      </div>
    </section>
  );
}

function ServicesIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><polyline points="9,22 9,12 15,12 15,22" /></svg>;
}
function PhoneIcon() {
  return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 .11h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 13.92v3z" /></svg>;
}
