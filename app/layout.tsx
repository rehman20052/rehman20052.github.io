import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const protocol = requestHeaders.get("x-forwarded-proto") ?? "https";
  const host =
    requestHeaders.get("x-forwarded-host") ??
    requestHeaders.get("host") ??
    "localhost:3000";
  const origin = `${protocol}://${host}`;
  const title = "Abdur Rehman — Software, Security & Systems";
  const description =
    "Portfolio of Abdur Rehman, a software engineer and secure-systems developer working across processor verification, cybersecurity, and cross-platform applications.";

  return {
    metadataBase: new URL(origin),
    title,
    description,
    icons: {
      icon: "/images/profile/abdur-rehman.png",
      shortcut: "/images/profile/abdur-rehman.png",
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: origin,
      images: [
        {
          url: `${origin}/og.png`,
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
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
