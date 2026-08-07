import type { Metadata } from "next";
import "./globals.css";

const origin = "https://rehman20052.github.io";
const title = "Abdur Rehman — Software, Security & Systems";
const description =
  "Abdur Rehman's portfolio: secure processor verification, cybersecurity research, and software projects including UrduSeekho, LogiTruck, and Lazy Chef.";

export const metadata: Metadata = {
  metadataBase: new URL(origin),
  title,
  description,
  openGraph: {
    title,
    description,
    type: "website",
    url: origin,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
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
