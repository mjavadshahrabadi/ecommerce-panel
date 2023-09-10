import React, { FC, ReactElement } from 'react'
import {
  UserIcon,
  CheckIcon,
  StarIcon,
  FlagIcon,
  GlobeAsiaAustraliaIcon,
} from '@heroicons/react/24/outline'

interface AboutProps {
  fullName: string
  status: string
  role: string
  language: string
  country: string
}

export const About: FC<AboutProps> = ({
  country,
  role,
  status,
  language,
  fullName,
}): ReactElement => {
  return (
    <div className="flex flex-col items-end space-y-3">
      <span className="text-gray-700 text-[15px] font-semibold">درباره من</span>
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-700">
          {' '}
          نام و نام خانوادگی: {fullName}
        </span>
        <UserIcon className="text-gray-600 w-5 h-5" />
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-700"> وضعیت: {status}</span>
        <CheckIcon className="text-gray-600 w-5 h-5" />
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-700">نقش: {role}</span>
        <StarIcon className="text-gray-600 w-5 h-5" />
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-700"> کشور: {country}</span>
        <FlagIcon className="text-gray-600 w-5 h-5" />
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-700"> زبان: {language}</span>
        <GlobeAsiaAustraliaIcon className="text-gray-600 w-5 h-5" />
      </div>
    </div>
  )
}
