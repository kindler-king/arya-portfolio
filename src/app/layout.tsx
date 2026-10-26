import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const SITE_URL = "https://aryasarkar.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Arya Sarkar — Senior AI Engineer",
    template: "%s — Arya Sarkar",
  },
  description:
    "Senior AI Engineer building production LLM systems, multi-agent platforms and intelligent software. Four years shipping AI products that survive production.",
  keywords: [
    "AI Engineer",
    "LLM",
    "RAG",
    "Multi-Agent Systems",
    "LangGraph",
    "FastAPI",
    "Python",
    "Arya Sarkar",
  ],
  authors: [{ name: "Arya Sarkar" }],
  creator: "Arya Sarkar",
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Arya Sarkar — Senior AI Engineer",
    description:
      "Building production LLM systems, multi-agent platforms and intelligent software.",
    siteName: "Arya Sarkar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arya Sarkar — Senior AI Engineer",
    description:
      "Building production LLM systems, multi-agent platforms and intelligent software.",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}
