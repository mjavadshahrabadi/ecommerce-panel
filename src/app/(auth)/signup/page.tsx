import { SignupVector } from '@/components/signup/SignupVector'
import { SignupForm } from '@/components/signup/SignupForm'
import { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'ایجاد حساب کاربری',
  description: 'Designed By Javad Shahrabadi :)',
}
export default function SignupPage() {
  return (
    <section className="w-full h-screen grid grid-cols-1 lg:grid-cols-12">
      <SignupVector />
      <SignupForm />
    </section>
  )
}
