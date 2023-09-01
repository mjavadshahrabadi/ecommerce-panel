import React from 'react'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Sidebar } from '@/components/ui/Sidebar'
import { ThemesProvider } from '@/components/ui/Themes'
import './globals.css'

const yekanFont = localFont({
  src: '../assets/fonts/yekan.woff2',
  display: 'swap',
  variable: '--font-yekan',
})

export const metadata: Metadata = {
  title: 'پنل مدیریت فروشگاه',
  description: 'Ecommerce panel template',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${yekanFont.variable} font-sans bg-gray-100 w-full h-screen`}
      >
        <ThemesProvider attribute="class" enableSystem>
          <main className="grid grid-cols-12">
            <Sidebar />
            <>{children}</>
          </main>
        </ThemesProvider>
      </body>
    </html>
  )
}
