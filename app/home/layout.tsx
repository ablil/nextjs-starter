import GlobalFooter from "@/components/common/GlobalFooter"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      {children}
      <GlobalFooter />
    </>
  )
}
