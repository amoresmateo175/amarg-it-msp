import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AMARG IT Services | Managed IT Services Toronto & GTA",
  description:
    "AMARG provides managed IT services, cybersecurity, and cloud solutions for businesses in Toronto and the GTA.",
  keywords: [
    "IT Services Toronto",
    "Managed IT GTA",
    "Cybersecurity Toronto",
    "MSP Toronto",
  ],
  authors: [{ name: "AMARG" }],
  openGraph: {
    title: "AMARG IT Services",
    description:
      "Reliable IT services and cybersecurity for Toronto businesses.",
    url: "https://yourdomain.com",
    siteName: "AMARG",
    locale: "en_CA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}