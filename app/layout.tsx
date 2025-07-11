import PageLoader from "@/components/common/PageLoader"
import { AppConfig } from "@/lib/config"
import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"
import StoreProvider from "./StoreProvider"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const metadata: Metadata = {
  title: AppConfig.metadata.defaultTitle,
  description: AppConfig.metadata.defaultDescription,
  keywords: AppConfig.metadata.keywords,
  openGraph: {
    type: "website",
    url: AppConfig.metadata.publicUrl,
    siteName: AppConfig.metadata.defaultTitle,
    title: AppConfig.metadata.defaultTitle,
    description: AppConfig.metadata.defaultDescription,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <StoreProvider>
          <PageLoader>{children}</PageLoader>
        </StoreProvider>
      </body>
    </html>
  )
}
