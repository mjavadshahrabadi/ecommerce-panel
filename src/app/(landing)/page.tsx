import { Header } from '@/components/ui/Header'
import { DashboardSection } from '@/components/dashboard'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'داشبورد',
  description: 'Designed By Javad Shahrabadi :)',
}
export default function Home() {
  return (
    <>
      <main className="w-full mx-10 col-span-11 p-3">
        <Header />
        <DashboardSection />
      </main>
    </>
  )
}
