import { SignupVector } from '@/components/signup/SignupVector'
import { SignupForm } from '@/components/signup/SignupForm'

export default function SignupPage() {
  return (
    <section className="w-full h-screen grid grid-cols-12">
      <SignupVector />

      <SignupForm />
    </section>
  )
}
