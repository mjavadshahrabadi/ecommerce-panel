'use client'
import React, { FC, ReactElement, useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

export const DarkAndLight: FC = (): ReactElement | null => {
  const [mounted, setMounted] = useState(false)

  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div
      className="cursor-pointer"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'light' ? (
        <MoonIcon className="text-gray-600 w-6 h-6" />
      ) : (
        <SunIcon className="text-gray-600 w-7 h-7" />
      )}
    </div>
  )
}
