import { Header } from '@/components/ui/Header'
import { DashboardSection } from '@/components/dashboard'

export default function Home() {
  return (
    <main className="w-full mx-10 col-span-11 p-3">
      <Header />
      <DashboardSection />
    </main>
  )
}
