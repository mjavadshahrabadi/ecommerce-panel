import { LoginForm } from '@/components/login/LoginForm'
import { LoginVector } from '@/components/login/LoginVector'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: ' ورود به حساب کاربری',
  description: 'Designed By Javad Shahrabadi :)',
}
export default function LoginPage() {
  return (
    <section className="w-full h-screen grid grid-cols-1 lg:grid-cols-12">
      <LoginVector />
      <LoginForm />
    </section>
  )
}
