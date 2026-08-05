import type { Metadata } from "next";
import "./globals.css";

const origin = "https://rehman20052.github.io";
const title = "Abdur Rehman — Software, Security & Systems";
const description =
  "Portfolio of Abdur Rehman, a software engineer and secure-systems developer working across processor verification, cybersecurity, and cross-platform applications.";

export const metadata: Metadata = {
  metadataBase: new URL(origin),
  title,
  description,
  icons: {
    icon: "/brand-mark.svg",
    shortcut: "/brand-mark.svg",
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: origin,
    images: [
      {
        url: "/og.png",
        width: 1672,
        height: 941,
        alt: "Abdur Rehman — Software, Security, and Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
