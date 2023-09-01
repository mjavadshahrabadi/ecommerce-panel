import React from 'react'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { Sidebar } from '@/components/ui/Sidebar'
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
      <body className={`${yekanFont.variable} font-sans`}>
        <Sidebar />
        {children}
      </body>
    </html>
  )
}
