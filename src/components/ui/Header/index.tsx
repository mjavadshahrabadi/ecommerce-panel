'use client'
import React, { FC, ReactElement, useEffect, useState, useRef } from 'react'
import { Avatar } from '@/components/ui/Avatar'
import { BadgeBtn } from '@/components/ui/BadgeBtn'
import {
  BellIcon,
  UserIcon,
  ArrowLeftOnRectangleIcon,
  EnvelopeOpenIcon,
} from '@heroicons/react/24/outline'
import { DarkAndLight } from '@/components/ui/DarkAndLight'
import { SearchBox } from '@/components/ui/Header/SearchBox'
import { DropdownList } from '@/components/ui/DropdownList'
import { DropDownItem } from '@/components/ui/DropdownList/DropDownItem'
import { NotificationItem } from '@/components/ui/Header/NotificationItem'

export const Header: FC = (): ReactElement => {
  const [isFocused, setIsFocused] = useState(false)
  const [avatarDropDownListShow, setAvatarDropDownListShow] = useState(false)
  const [notificationsShow, setNotificationsShow] = useState(false)
  const avatarRef = useRef<HTMLDivElement>(null)
  const notificationRef = useRef<HTMLDivElement>(null)

  const handleDocumentClick = (event: MouseEvent) => {
    if (
      avatarRef.current &&
      !avatarRef.current.contains(event.target as Node)
    ) {
      setAvatarDropDownListShow(false)
    }
    if (
      notificationRef.current &&
      !notificationRef.current.contains(event.target as Node)
    ) {
      setNotificationsShow(false)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleDocumentClick)

    return () => {
      document?.removeEventListener('click', handleDocumentClick)
    }
  }, [])

  return (
    <header className="w-full flex items-center justify-between py-2.5 px-5 rounded-md bg-white shadow-light relative">
      <SearchBox isFocused={isFocused} setIsFocused={setIsFocused} />

      {!isFocused && (
        <div className="flex items-center space-x-2.5">
          <DarkAndLight />
          <div ref={notificationRef}>
            <BadgeBtn badgeCount={5} DropDownListHandler={setNotificationsShow}>
              <BellIcon className="text-gray-600 w-7 h-7" />
            </BadgeBtn>
            {notificationsShow && (
              <DropdownList width={20}>
                <DropDownItem>
                  <li className="flex items-center justify-between">
                    <div>
                      <EnvelopeOpenIcon className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <h4 className="text-[14px] text-gray-700">پیام ها</h4>
                    </div>
                  </li>
                </DropDownItem>
                <div className="w-full border-t border-gray-200" />
                <DropDownItem>
                  <NotificationItem
                    title="عنوان شماره یکم"
                    description="این یک متن تست است"
                    moment="یک ساعت پیش"
                    imgSrc="/avatar/avatar-1.png"
                  />
                </DropDownItem>
                <DropDownItem>
                  <NotificationItem
                    title="عنوان شماره یکم"
                    description="این یک متن تست است"
                    moment="یک ساعت پیش"
                    imgSrc="/avatar/avatar-2.png"
                  />
                </DropDownItem>
                <DropDownItem>
                  <NotificationItem
                    title="عنوان شماره یکم"
                    description="این یک متن تست است"
                    moment="یک ساعت پیش"
                    imgSrc="/avatar/avatar-3.png"
                  />
                </DropDownItem>
                <DropDownItem>
                  <NotificationItem
                    title="عنوان شماره یکم"
                    description="این یک متن تست است"
                    moment="یک ساعت پیش"
                    imgSrc="/avatar/avatar-4.png"
                  />
                </DropDownItem>
                <button className="w-full py-2 rounded-md text-white bg-indigo-500 text-[14px] hover:bg-indigo-600 duration-300 ease-out hover:shadow-md">
                  نمایش همه پیام ها
                </button>
              </DropdownList>
            )}
          </div>

          <div ref={avatarRef}>
            <Avatar
              imgSrc="/avatar/avatar-1.png"
              title="javad shahrabadi"
              isOnline
              DropDownListHandler={setAvatarDropDownListShow}
            />
            {avatarDropDownListShow && (
              <DropdownList width={10}>
                <DropDownItem>
                  <li className="flex items-center justify-between">
                    <div>
                      <UserIcon className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <h4 className="text-[14px] text-gray-700">پروفایل من</h4>
                    </div>
                  </li>
                </DropDownItem>
                <DropDownItem>
                  <li className="flex items-center justify-between">
                    <div>
                      <ArrowLeftOnRectangleIcon className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <h4 className="text-[14px] text-gray-700">خروج</h4>
                    </div>
                  </li>
                </DropDownItem>
              </DropdownList>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
