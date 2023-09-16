import React, { FC, ReactElement } from 'react'
import Image from 'next/image'
export const Congratulations: FC = (): ReactElement => {
  return (
    <div className="bg-white rounded-md shadow-lg shadow-gray-200 grid grid-cols-12 place-items-center">
      <div className="col-span-4 flex items-center justify-center pt-8">
        <Image
          src="/vector/dashboard/congratulation.png"
          alt="congratulation"
          width={0}
          height={0}
          sizes="100vw"
          className="w-auto h-[150px] object-cover"
        />
      </div>
      <div className="col-span-8 p-5 flex flex-col items-end space-y-3">
        <h3 className="text-sm text-indigo-500 font-semibold">
          تبریک جواد عزیز 🎉
        </h3>
        <p className="text-sm text-gray-600">
          شما امروز ۷۲ درصد فروش بیشتری داشته اید. نشان جدید خود را در نمایه خود
          بررسی کنید
        </p>

        <button
          className="bg-indigo-100 py-1 px-4 text-[13px] text-indigo-500 rounded-md hover:bg-indigo-500 hover:text-white duration-300 ease-out"
          type="button"
        >
          نشان ها را مشاهده کنید
        </button>
      </div>
    </div>
  )
}
