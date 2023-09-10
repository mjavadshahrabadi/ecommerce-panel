import { LoadingSpinner } from '@/components/ui/LoadingSpinner'

export default function Loading() {
  return (
    <section className="w-[100vw] h-[100vh] flex items-center justify-center">
      <LoadingSpinner />
    </section>
  )
}
