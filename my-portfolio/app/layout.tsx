import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
})
const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
})

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Omar Hussein Abdel-Radi | DevOps Engineer | Portfolio",
  description: "Futuristic portfolio showcasing DevOps engineering expertise",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <head>
        <style>{`
                  html {
                    font-family: ${dmSans.style.fontFamily};
                    --font-sans: ${dmSans.variable};
                    --font-mono: ${spaceGrotesk.variable};
                  }
        `}</style>
      </head>
      <body className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

