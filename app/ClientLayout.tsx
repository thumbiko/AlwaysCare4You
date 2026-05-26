"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSidebar from "@/components/ContactSidebar";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="theme-transition">
      <Navbar onContactOpen={() => setContactOpen(true)} />
      <main>{children}</main>
      <Footer />
      <ContactSidebar open={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  );
}
