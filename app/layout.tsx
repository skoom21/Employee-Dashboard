import React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { Toaster } from "@/components/ui/toaster"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "PeopleTalk - Grievance Management System",
  description: "Streamlined grievance handling for modern organizations",
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <NextThemesProvider attribute="class">
          <NextThemesProvider>
            <TooltipProvider>
            <Toaster />
              <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
                <main className="flex-1 p-2">
                  {children}
                </main>
                <Footer />
              </div>
            </TooltipProvider>
          </NextThemesProvider>
        </NextThemesProvider>
      </body>
    </html>
  )
}

import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { TooltipProvider } from "@/components/ui/tooltip"
function Footer() {
  return (
    <footer className={cn("py-4 text-center w-full border-t border-accent")}>
      <p>
      &copy; {new Date().getFullYear()} {" "}
      <Link href="https://bitsolventures.com" passHref>
        <Button variant="link" className="p-0">Bitsol Ventures</Button>
      </Link>
      . All rights reserved.
      </p>
      <nav className="mt-2">
        <Link href="/privacy-policy" passHref>
          <Button variant="link" className="mx-2">Privacy Policy</Button>
        </Link>
        <Link href="/terms-of-service" passHref>
          <Button variant="link" className="mx-2">Terms of Service</Button>
        </Link>
        <Link href="https://www.linkedin.com/in/kashif-abro/" passHref>
          <Button variant="link" className="mx-2">Contact Us</Button>
        </Link>
      </nav>
    </footer>
  )
}
