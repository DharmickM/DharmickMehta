
import CampaignDescriptionTable from '@/components/campaign-description-table'

export default function Home() {
  return (
    <main className="min-h-screen p-6">
      <h1 className="text-4xl font-bold mb-8">Campaign Description Data</h1>
      <CampaignDescriptionTable />
    </main>
  )
}