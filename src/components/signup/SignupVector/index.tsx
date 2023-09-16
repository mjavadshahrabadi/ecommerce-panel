import React, { FC, ReactElement } from 'react'
import Image from 'next/image'

export const SignupVector: FC = (): ReactElement => {
  return (
    <div className="hidden col-span-8 lg:flex items-center justify-center bg-gray-100">
      <Image
        src="/vector/signup/img-1.png"
        alt="signup vector"
        width={0}
        height={0}
        sizes="100vw"
        className="w-[50vw] h-[80vh] object-contain"
      />
    </div>
  )
}
