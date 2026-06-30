import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "FinWise — The Financial Decision Platform | Every Financial Decision Starts Here",
  description: "India's most trusted financial advisory platform. Connect with verified SEBI-registered advisors, compare financial products across 100+ institutions, and make confident financial decisions.",
  keywords: "financial advisor India, home loan comparison, mutual funds SIP, term insurance, SEBI registered advisor, financial planning India",
  openGraph: {
    title: "FinWise — The Financial Decision Platform",
    description: "Advice First. Products Second. India's premium financial advisory marketplace.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
