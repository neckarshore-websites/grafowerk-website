import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const spaceGrotesk = localFont({
  src: "../fonts/SpaceGrotesk-Variable.woff2",
  variable: "--font-space-grotesk",
  display: "swap",
  weight: "400 700",
});

const inter = localFont({
  src: "../fonts/Inter-Variable.woff2",
  variable: "--font-inter",
  display: "swap",
  weight: "400 700",
});

export const metadata: Metadata = {
  title: "Grafowerk — Grafik & Design",
  description:
    "Grafowerk — Grafik- und Designstudio. Branding, Webdesign, Print. Website im Aufbau.",
  metadataBase: new URL("https://grafowerk.de"),
  openGraph: {
    title: "Grafowerk — Grafik & Design",
    description:
      "Grafowerk — Grafik- und Designstudio. Branding, Webdesign, Print. Website im Aufbau.",
    url: "https://grafowerk.de",
    siteName: "Grafowerk",
    locale: "de_DE",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://grafowerk.de/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen bg-paper text-ink">{children}</body>
    </html>
  );
}
