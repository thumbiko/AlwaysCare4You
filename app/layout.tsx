import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import ClientLayout from "./ClientLayout";

export const metadata: Metadata = {
  title: { template: "%s | AlwaysCare4You", default: "AlwaysCare4You – Expert Home Care Services Dublin" },
  description: "AlwaysCare4You provides professional home care, respite care, dementia care, palliative care and disability care services across Dublin. Contact us today on 085 842 9586.",
  keywords: ["home care Dublin", "respite care Dublin", "dementia care", "palliative care Dublin", "elderly care Dublin", "disability care", "AlwaysCare4You"],
  authors: [{ name: "AlwaysCare4You" }],
  openGraph: {
    type: "website",
    locale: "en_IE",
    siteName: "AlwaysCare4You",
    title: "AlwaysCare4You – Expert Home Care Services Dublin",
    description: "Professional home care services across Dublin delivered with compassion and expertise.",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Nunito:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ThemeProvider>
          <ClientLayout>{children}</ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  );
}
