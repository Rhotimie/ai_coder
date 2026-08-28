import React from "react"
import type { Metadata } from "next"
import "@fontsource/manrope/400.css"
import "@fontsource/manrope/500.css"
import "@fontsource/manrope/600.css"
import "@fontsource/manrope/700.css"
import "./globals.css"

export const metadata: Metadata = {
  title: "Kanban MVP",
  description: "A polished single-board Kanban project management app.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
