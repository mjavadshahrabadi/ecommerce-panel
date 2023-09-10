import { LoadingSpinner } from '@/components/ui/LoadingSpinner'

export default function Loading() {
  return (
    <section className="w-full h-screen flex items-center justify-center">
      <LoadingSpinner />
    </section>
  )
}
