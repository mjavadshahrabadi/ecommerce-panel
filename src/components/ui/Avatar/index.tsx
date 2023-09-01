import React, { FC, ReactElement } from 'react'
import Image from 'next/image'

interface AvatarProps {
  imgSrc: string
  title: string
  isOnline?: boolean
  DropDownListHandler?: React.Dispatch<React.SetStateAction<boolean>>
}
export const Avatar: FC<AvatarProps> = ({
  imgSrc,
  isOnline,
  title,
  DropDownListHandler,
}): ReactElement => {
  return (
    <div
      className="relative cursor-pointer"
      onClick={() => DropDownListHandler?.((prev) => !prev)}
    >
      <div
        className="w-10 h-10 bg-red-100 rounded-full relative overflow-hidden"
        title={title}
      >
        <Image
          src={imgSrc}
          alt={title}
          width={0}
          height={0}
          sizes="100vw"
          className="w-auto h-auto object-cover"
        />
      </div>
      {isOnline && (
        <div className="absolute bottom-0 right-0 rounded-full bg-green-400 border-2 border-white w-3 h-3" />
      )}
    </div>
  )
}
