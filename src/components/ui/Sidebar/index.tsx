'use client'
import React, { FC, ReactElement, useEffect, useState } from 'react'
import Image from 'next/image'
import {
  HomeIcon,
  UserIcon,
  ReceiptPercentIcon,
  CheckBadgeIcon,
  ArrowLeftOnRectangleIcon,
} from '@heroicons/react/24/outline'
import { SideItem } from '@/components/ui/Sidebar/SideItem'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const Sidebar: FC = (): ReactElement => {
  const [isHovered, setIsHovered] = useState(false)
  const [activeId, setActiveId] = useState<number>(1)
  const uriPath = usePathname()
  const handleMouseEvent = () => {
    setIsHovered((prev) => !prev)
  }

  useEffect(() => {
    if (uriPath) {
      switch (uriPath) {
        case '/':
          setActiveId(1)
          break
        case '/users':
          setActiveId(2)
          break
        case '/invoice':
          setActiveId(3)
          break
        case '/roles':
          setActiveId(4)
          break
        default:
          setActiveId(5)
      }
    }
  }, [uriPath])

  const activeNavItemHandler = (id: number) => setActiveId(id)

  return (
    <aside
      className={`overflow-hidden bg-white fixed z-50 top-0 bottom-0 right-0 duration-300 ease-out border-l border-gray-100 shadow-sm py-7 ${
        !isHovered ? 'w-[4vw]' : 'w-[14vw] px-4'
      }`}
      onMouseEnter={handleMouseEvent}
      onMouseLeave={handleMouseEvent}
    >
      <nav
        className={`flex flex-col ${
          isHovered
            ? 'items-end space-y-3'
            : 'items-center justify-center space-y-4'
        }  `}
      >
        <li className="flex items-center space-x-3 cursor-pointer">
          {isHovered && (
            <div>
              <h2 className="text-gray-600 text-[14px] font-semibold">
                لوگو فروشگاه
              </h2>
            </div>
          )}
          <div>
            <Image
              src="/brand/logo.png"
              alt="ecommerce-logo"
              width={0}
              height={0}
              sizes="100vw"
              className="w-auto h-auto"
            />
          </div>
        </li>
        <Link href="/" className="w-full">
          <SideItem
            isHovered={isHovered}
            title="داشبورد"
            id={1}
            activeId={activeId}
            activeNavItemHandler={activeNavItemHandler}
          >
            <HomeIcon
              className={`w-5 h-5 ${
                activeId === 1 ? 'text-indigo-500' : 'text-gray-500'
              }`}
            />
          </SideItem>
        </Link>

        <Link href="/users" className="w-full">
          <SideItem
            isHovered={isHovered}
            title="کاربران"
            id={2}
            activeId={activeId}
            activeNavItemHandler={activeNavItemHandler}
          >
            <UserIcon
              className={`w-5 h-5 ${
                activeId === 2 ? 'text-indigo-500' : 'text-gray-500'
              }`}
            />
          </SideItem>
        </Link>

        <Link href="/invoice" className="w-full">
          <SideItem
            isHovered={isHovered}
            title="صورتحساب ها"
            id={3}
            activeId={activeId}
            activeNavItemHandler={activeNavItemHandler}
          >
            <ReceiptPercentIcon
              className={`w-5 h-5 ${
                activeId === 3 ? 'text-indigo-500' : 'text-gray-500'
              }`}
            />
          </SideItem>
        </Link>

        <Link href="/roles" className="w-full">
          <SideItem
            isHovered={isHovered}
            title="نقش ها و اجازه ها"
            id={4}
            activeId={activeId}
            activeNavItemHandler={activeNavItemHandler}
          >
            <CheckBadgeIcon
              className={`w-5 h-5 ${
                activeId === 4 ? 'text-indigo-500' : 'text-gray-500'
              }`}
            />
          </SideItem>
        </Link>
      </nav>
      <div className="absolute bottom-0 right-0 left-0 p-4">
        <Link href="/login" className="w-full">
          <SideItem
            isHovered={isHovered}
            title="خروج از حساب کاربری"
            id={5}
            activeId={activeId}
            activeNavItemHandler={activeNavItemHandler}
          >
            <ArrowLeftOnRectangleIcon
              className={`w-5 h-5 ${
                activeId === 5 ? 'text-indigo-500' : 'text-gray-500'
              }`}
            />
          </SideItem>
        </Link>
      </div>
    </aside>
  )
}
