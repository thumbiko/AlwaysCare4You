"use client";
import { useState, useEffect } from "react";
import { TESTIMONIALS } from "@/lib/data";

export default function TestimonialsCarousel() {
  const [current, setCurrent] = useState(0);
  const total = TESTIMONIALS.length;

  useEffect(() => {
    const t = setInterval(() => setCurrent(c => (c + 1) % total), 5000);
    return () => clearInterval(t);
  }, [total]);

  return (
    <section style={{ backgroundColor: "var(--primary-xlight)", padding: "80px 24px", overflow: "hidden" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "52px" }}>
          <p style={{ color: "var(--primary)", fontWeight: 700, fontSize: "13px", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "10px" }}>Client Testimonials</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 4vw, 40px)", color: "#1a2e2e", marginBottom: "14px" }}>
            What Our Clients Say
          </h2>
          <p style={{ color: "#6B7280", fontSize: "15px", maxWidth: "560px", margin: "0 auto", lineHeight: "1.7" }}>
            We are proud of the difference we make every day. Here is what those we care for and their families have to say.
          </p>
        </div>

        {/* Google Rating badge */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "40px" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "10px",
            backgroundColor: "#fff", border: "1px solid #E5E7EB",
            borderRadius: "50px", padding: "10px 20px",
            boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
          }}>
            <GoogleIcon />
            <div>
              <div style={{ fontWeight: 700, fontSize: "14px", color: "#1a2e2e" }}>Rated 5.0 on Google</div>
              <div style={{ display: "flex", gap: "2px" }}>
                {[...Array(5)].map((_, i) => <StarIcon key={i} filled />)}
              </div>
            </div>
          </div>
        </div>

        {/* Cards */}
        <div style={{ position: "relative", overflow: "hidden" }}>
          <div
            style={{
              display: "flex",
              transform: `translateX(-${current * 100}%)`,
              transition: "transform 0.5s cubic-bezier(0.4,0,0.2,1)",
            }}
          >
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                style={{
                  minWidth: "100%",
                  display: "flex",
                  justifyContent: "center",
                  padding: "0 10px",
                }}
              >
                <div style={{
                  backgroundColor: "#fff",
                  borderRadius: "16px",
                  padding: "40px",
                  maxWidth: "680px",
                  width: "100%",
                  boxShadow: "0 4px 30px rgba(0,0,0,0.08)",
                  position: "relative",
                }}>
                  {/* Quote mark */}
                  <div style={{
                    position: "absolute", top: "24px", right: "32px",
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "80px", lineHeight: 1, color: "var(--primary-light)",
                    userSelect: "none",
                  }}>
                    &ldquo;
                  </div>

                  <div style={{ display: "flex", gap: "3px", marginBottom: "20px" }}>
                    {[...Array(t.rating)].map((_, j) => <StarIcon key={j} filled />)}
                  </div>

                  <p style={{
                    fontSize: "17px", lineHeight: "1.8", color: "#374151",
                    fontStyle: "italic", marginBottom: "28px",
                    fontFamily: "'Playfair Display', serif",
                  }}>
                    &ldquo;{t.text}&rdquo;
                  </p>

                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{
                      width: "44px", height: "44px", borderRadius: "50%",
                      backgroundColor: "var(--primary)", color: "#fff",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontWeight: 700, fontSize: "16px",
                      fontFamily: "'Playfair Display', serif",
                    }}>
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: "15px", color: "#1a2e2e" }}>{t.name}</div>
                      <div style={{ fontSize: "13px", color: "#9CA3AF" }}>{t.location}</div>
                    </div>
                    <div style={{ marginLeft: "auto" }}>
                      <GoogleIcon small />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "28px" }}>
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Review ${i + 1}`}
              style={{
                width: i === current ? "24px" : "8px",
                height: "8px", borderRadius: "4px",
                backgroundColor: i === current ? "var(--primary)" : "var(--primary-light)",
                border: "none", cursor: "pointer", transition: "all 0.3s", padding: 0,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StarIcon({ filled }: { filled?: boolean }) {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill={filled ? "#F59E0B" : "none"} stroke="#F59E0B" strokeWidth="1.5">
      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
    </svg>
  );
}

function GoogleIcon({ small }: { small?: boolean }) {
  const s = small ? 18 : 22;
  return (
    <svg width={s} height={s} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
  );
}
