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
      <main className="xl:mx-10 w-full col-span-12 xl:col-span-11 p-5 overflow-hidden">
        <Header />
        <DashboardSection />
      </main>
    </>
  )
}
