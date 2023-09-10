import { LoginForm } from '@/components/login/LoginForm'
import { LoginVector } from '@/components/login/LoginVector'

export default function LoginPage() {
  return (
    <section className="w-full h-screen grid grid-cols-12">
      <LoginVector />

      <LoginForm />
    </section>
  )
}
