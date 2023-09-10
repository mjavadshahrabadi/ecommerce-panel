'use client'
import React, { FC, ReactElement } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const LoginForm: FC = (): ReactElement => {
  return (
    <div className="col-span-4 flex flex-col items-center justify-center">
      <div className="w-[70%] flex flex-col items-end">
        <div className="flex items-end space-x-2">
          <span className="text-gray-600 font-semibold">Sneat</span>
          <Image
            src="/brand/logo.png"
            alt="logo"
            width={40}
            height={40}
            sizes="100vw"
            className="w-6 h-9"
          />
        </div>

        <div className="mt-5 flex flex-col space-y-1">
          <p className="text-gray-700" dir="rtl">
            به Sneat خوش آمدید <span className="text-xl">👋</span>
          </p>
          <p className="text-gray-700 text-sm" dir="rtl">
            لطفا وارد حساب کاربری خود شوید و ماجراجویی را شروع کنید
          </p>
        </div>

        <form
          className="my-5 w-full flex flex-col space-y-4"
          onSubmit={(e) => {
            e.preventDefault()
          }}
        >
          <div className="flex flex-col space-y-3" dir="rtl">
            <label
              className="text-sm text-gray-700 cursor-pointer"
              htmlFor="username"
            >
              ایمیل یا نام کاربری
            </label>
            <input
              id="username"
              type="text"
              className="bg-gray-100 p-3 rounded-md text-sm text-gray-600 focus:outline-2 focus:ring-4 outline-indigo-300 duration-300 ease-out"
              placeholder="ایمیل یا نام کاربری خود را وارد کنید"
            />
          </div>
          <div className="flex flex-col space-y-3" dir="rtl">
            <label
              className="text-sm text-gray-700 cursor-pointer"
              htmlFor="password"
            >
              رمز عبور
            </label>
            <input
              id="password"
              type="password"
              className="bg-gray-100 p-3 rounded-md text-sm text-gray-600 focus:outline-2 focus:ring-4 outline-indigo-300 duration-300 ease-out"
              placeholder="***********"
            />
          </div>

          <div className="flex items-center justify-end space-x-2">
            <label
              className="text-sm text-gray-600 cursor-pointer"
              htmlFor="remember"
            >
              مرا به خاطر بسپار
            </label>
            <input
              type="checkbox"
              name="remember"
              id="remember"
              className="w-4 h-4 cursor-pointer"
            />
          </div>

          <button
            typeof="button"
            className="bg-indigo-500 text-white text-[14px] rounded-md py-2 px-4 hover:bg-indigo-600 duration-300 ease-out active:scale-95"
          >
            ورود به حساب کاربری
          </button>

          <p className="text-right text-gray-600 text-sm">
            حساب کاربری ندارید؟{' '}
            <Link href="/signup">
              <span className="text-indigo-500 cursor-pointer">
                ایجاد حساب کاربری
              </span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}
