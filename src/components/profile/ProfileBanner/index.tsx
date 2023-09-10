import React, { FC, ReactElement } from 'react'
import Image from 'next/image'
import { UserPlusIcon } from '@heroicons/react/24/solid'
import {
  LightBulbIcon,
  MapPinIcon,
  CalendarDaysIcon,
} from '@heroicons/react/24/outline'

interface ProfileBannerProps {
  userAvatarSrc: string
  name: string
  skill: string
  location: string
  joinedDate: string
}
export const ProfileBanner: FC<ProfileBannerProps> = ({
  skill,
  joinedDate,
  location,
  name,
  userAvatarSrc,
}): ReactElement => {
  return (
    <div className="my-5">
      <div className="relative">
        <Image
          src="/vector/profile/profile-banner.png"
          alt="profile-banner"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto object-cover"
        />
        <div className="absolute w-28 h-28 border-4 border-white overflow-hidden bg-red-100 rounded-md bottom-4 z-40 right-5">
          <Image
            src={userAvatarSrc}
            alt={name}
            width={0}
            height={0}
            sizes="100vw"
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="absolute left-0 right-0 bottom-0 bg-white p-5">
          <div className="flex items-center justify-between">
            <div>
              <button
                type="button"
                className="bg-indigo-500 flex text-white items-center space-x-2 py-1.5 px-5 rounded-md hover:bg-indigo-600 duration-300 ease-out active:scale-90 shadow-md text-[14px]"
              >
                <UserPlusIcon className="text-white w-4 h-4" />
                <span> دنبال کن</span>
              </button>
            </div>

            <div className="pr-32 text-black flex flex-col items-end space-y-3">
              <span className="text-sm text-gray-700 font-semibold">
                {name}
              </span>
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-0.5">
                  <span className="text-[13px] text-gray-600">{skill}</span>
                  <LightBulbIcon className="w-5 h-5 text-gray-700" />
                </div>
                <div className="flex items-center space-x-0.5">
                  <span className="text-[13px] text-gray-600">{location}</span>
                  <MapPinIcon className="w-5 h-5 text-gray-700" />
                </div>
                <div className="flex items-center space-x-0.5">
                  <span className="text-[13px] text-gray-600">
                    {joinedDate}
                  </span>
                  <CalendarDaysIcon className="w-5 h-5 text-gray-700" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
