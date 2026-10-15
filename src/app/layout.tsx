import type { Metadata } from "next";
import { Inter, Saira, Great_Vibes } from "next/font/google";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const saira = Saira({
  variable: "--font-saira",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
  style: ["normal", "italic"],
});
const greatVibes = Great_Vibes({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Transporter Service (Luxury) | Airport Transfer & Private Tours Malaysia",
  description:
    "Luxury 24-hour transport in Malaysia. KLIA / KLIA2 airport transfer, hourly charter, daily booking and private tours. Safe, reliable, comfortable and on time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${saira.variable} ${greatVibes.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
