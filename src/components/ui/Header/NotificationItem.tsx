import React, { FC, ReactElement } from 'react'
import Image from 'next/image'

interface NotificationItemProp {
  imgSrc: string
  title: string
  description: string
  moment: string
}
export const NotificationItem: FC<NotificationItemProp> = ({
  moment,
  description,
  imgSrc,
  title,
}): ReactElement => {
  return (
    <div className="flex items-start justify-end space-x-3">
      <div className="flex flex-col items-end space-y-1">
        <h4 className="text-[14px] text-gray-600">{title}</h4>
        <p className="text-xs text-gray-600">{description}</p>
        <small className="text-xs">{moment}</small>
      </div>
      <div className="w-10 h-10 overflow-hidden rounded-full">
        <Image
          className="w-auto h-auto object-cover"
          sizes="100vw"
          width={0}
          height={0}
          alt={title}
          src={imgSrc}
        />
      </div>
    </div>
  )
}
