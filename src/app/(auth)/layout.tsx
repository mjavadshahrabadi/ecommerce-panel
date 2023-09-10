import React from 'react'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { ThemesProvider } from '@/components/ui/Themes'
import '../globals.css'

const yekanFont = localFont({
  src: '../../assets/fonts/yekan.woff2',
  display: 'swap',
  variable: '--font-yekan',
})

export const metadata: Metadata = {
  title: 'Analytics Panel Auth',
  description: 'Designed By Javad Shahrabadi 🚀',
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${yekanFont.variable} font-sans`}>
        <ThemesProvider attribute="class" enableSystem>
          <main>{children}</main>
        </ThemesProvider>
      </body>
    </html>
  )
}
