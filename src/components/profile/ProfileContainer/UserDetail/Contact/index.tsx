import React, { FC, ReactElement } from 'react'
import {
  PhoneIcon,
  ChatBubbleBottomCenterIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline'
import { digitsEnToFa } from '@persian-tools/persian-tools'

interface ContactProps {
  phoneNumber: string
  skypeId: string
  email: string
}

export const Contact: FC<ContactProps> = ({
  phoneNumber,
  skypeId,
  email,
}): ReactElement => {
  return (
    <div className="flex flex-col items-end space-y-3">
      <span className="text-gray-700 text-[15px] font-semibold">درباره من</span>
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-700">
          {' '}
          شماره همراه: {digitsEnToFa(phoneNumber)}
        </span>
        <PhoneIcon className="text-gray-600 w-5 h-5" />
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-700"> {skypeId} :اسکابپ</span>
        <ChatBubbleBottomCenterIcon className="text-gray-600 w-5 h-5" />
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-700">{email} :ایمیل</span>
        <EnvelopeIcon className="text-gray-600 w-5 h-5" />
      </div>
    </div>
  )
}
