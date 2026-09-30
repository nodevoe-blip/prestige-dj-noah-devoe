import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocalBusinessSchema } from "@/components/schema/LocalBusinessSchema";
import { PersonSchema } from "@/components/schema/PersonSchema";
import { SITE_URL, noah } from "@/lib/site-config";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  // Plain string, not a { default, template } object — every route's
  // pageMetadata() call already returns its complete, final title, and a
  // template here would silently double-append a suffix on top of it (that
  // bug shipped for a while before it was caught). This string is a pure
  // fallback for the (currently nonexistent) case of a route that forgets
  // to set its own metadata.
  title: "Noah DeVoe | Michigan Wedding DJ & MC | Prestige Weddings",
  description: noah.bio,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable} h-full`}>
      <body className="flex min-h-full flex-col bg-paper text-ink antialiased">
        <LocalBusinessSchema />
        {/* Sitewide, not just on /noah-devoe — Noah is the domain's primary entity */}
        <PersonSchema />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
