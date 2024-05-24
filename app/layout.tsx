import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter as FontSans } from "next/font/google";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title:"Shiva Yadav | Portfolio" ,
  description: "A Web Developer and Designer based in India. I focus on creating modern websites that work well on any device.",
  keywords: ["web developer","Web Developer Portfolio","Jhansi", "India", "portfolio", "Shiva Yadav","Shiva Yadav Portfolio","Shiva Yadav Web Developer","Shiva Yadav Jhansi","best web developer","freelance web developer","web developer in Jhansi","web developer in India","web developer near me","web developer portfolio","web developer website","web design services","web development services in Jhansi","web design and development services in India"],
  twitter: {
    card: 'summary_large_image',
    site: '@shivay1256',
    title: "Shiva Yadav | Portfolio",
    description: "Hello, I'm Shiva.👋 A Web Developer and Designer based in India.",
    creator: '@shivay1256',
    images: {
      url: '/images/hero1.jpg',
      alt: 'Preview image for Shiva Yadav',
    }
  },
  openGraph: {
    type: 'website',
    url: 'https://shivayadav.tech',
    title: "Shiva Yadav | Portfolio",
    description: "Hello, I'm Shiva.👋 A Web Developer and Designer based in India.",
    images: {
      url: '/images/hero1.jpg',
      alt: 'Preview image for Shiva Yadav',
    }
  },
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "bg-background font-sans antialiased  overflow-x-hidden",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen container mx-auto flex flex-col">
            <Navbar />
            <div className="flex-1 ">{children}</div>
            <Footer />
          </main>
        </ThemeProvider>
        <Analytics/>
        <SpeedInsights/>
      </body>
    </html>
  );
}
