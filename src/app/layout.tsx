import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeProvider } from "@/components/theme-provider"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "STUDIO ZINE",
  description: "Professional photography services showcasing a unique perspective through the lens",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <Link href="/" className="font-bold text-2xl tracking-tight">
                    STUDIO ZINE
                  </Link>

                  <nav className="hidden md:flex items-center space-x-8">
                    <Link
                      href="/"
                      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Home
                    </Link>
                    <Link
                      href="/gallery"
                      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Gallery
                    </Link>
                    <Link
                      href="/services"
                      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Services
                    </Link>
                    <Link
                      href="/about"
                      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      About
                    </Link>
                    <Link
                      href="/contact"
                      className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Contact
                    </Link>
                  </nav>

                  <div className="flex items-center space-x-4">
                    <Button asChild variant="default" size="sm" className="hidden md:inline-flex">
                      <Link href="/contact">Book a Session</Link>
                    </Button>
                    <Sheet>
                      <SheetTrigger asChild>
                        <Button variant="outline" size="icon" className="md:hidden" aria-label="Menu">
                          <Menu className="h-5 w-5" />
                          <span className="sr-only">Toggle menu</span>
                        </Button>
                      </SheetTrigger>
                      <SheetContent side="right" className="w-[280px] sm:w-[350px]">
                        <div className="flex flex-col gap-6 mt-8">
                          <Link href="/" className="text-lg font-medium hover:text-primary transition-colors">
                            Home
                          </Link>
                          <Link href="/gallery" className="text-lg font-medium hover:text-primary transition-colors">
                            Gallery
                          </Link>
                          <Link href="/about" className="text-lg font-medium hover:text-primary transition-colors">
                            About
                          </Link>
                          <Link href="/contact" className="text-lg font-medium hover:text-primary transition-colors">
                            Contact
                          </Link>
                          <div className="pt-4 mt-4 border-t">
                            <Button asChild className="w-full">
                              <Link href="/contact">Book a Session</Link>
                            </Button>
                          </div>
                        </div>
                      </SheetContent>
                    </Sheet>
                  </div>
                </div>
              </div>
            </header>
            <main className="flex-1">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

