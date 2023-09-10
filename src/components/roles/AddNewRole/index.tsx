import React, { FC, ReactElement } from 'react'
import Image from 'next/image'
export const AddNewRole: FC = (): ReactElement => {
  return (
    <div className="bg-white rounded-md shadow-lg justify-between shadow-gray-200 flex">
      <div className="flex items-end pl-4">
        <Image
          src="/vector/role/img-1.png"
          width={0}
          height={0}
          sizes="100vw"
          className="w-[150px] h-[100px] object-contain"
          alt="vector"
        />
      </div>
      <div className="flex flex-col items-end space-y-6 p-4">
        <button
          type="button"
          className="py-2 px-5 rounded-md bg-indigo-500 text-white text-[14px] hover:bg-indigo-600 active:scale-95"
        >
          Add New Role
        </button>
        <span className="text-[13px] text-gray-600">
          اگر نقش وجود ندارد اضافه کنید
        </span>
      </div>
    </div>
  )
}
