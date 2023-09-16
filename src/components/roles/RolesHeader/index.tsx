import React, { FC, ReactElement } from 'react'

export const RolesHeader: FC = (): ReactElement => {
  return (
    <div
      className="my-8 flex flex-col items-center lg:items-start space-y-4"
      dir="rtl"
    >
      <h4 className="text-gray-700 font-semibold text-lg">فهرست نقش ها</h4>
      <p className="md:w-1/3 text-sm text-gray-600 text-center lg:text-right w-full">
        یک نقش دسترسی به منوها و ویژگی های از پیش تعریف شده را فراهم می کرد به
        طوری که بسته به نقش تعیین شده یک مدیر می تواند به آنچه کاربر نیاز دارد
        دسترسی داشته باشد
      </p>
    </div>
  )
}
