'use client'

import { useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface Campaign {
  id?: number | string
  [key: string]: any
}

export default function CampaignDescriptionTable() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchCampaigns() {
      try {
        const { data, error } = await supabase.from('transactions').select('*')
        
        if (error) {
          throw error
        }
        
        setCampaigns(data as Campaign[])
      } catch (error) {
        setError((error as Error).message)
      } finally {
        setIsLoading(false)
      }
    }

    fetchCampaigns()
  }, [])

  if (isLoading) return <div className="p-4">Loading...</div>
  if (error) return <div className="p-4 text-red-500">Error: {error}</div>

  // Check if campaigns array is empty
  if (campaigns.length === 0) return <div className="p-4">No campaign data available.</div>

  // Get column names from the first campaign object
  const columns = Object.keys(campaigns[0])

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Campaign Descriptions</h1>
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              {columns.map((column) => (
                <TableHead key={column} className="font-bold">
                  {column}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {campaigns.map((campaign, index) => (
              <TableRow key={campaign.id || index}>
                {columns.map((column) => (
                  <TableCell key={column}>
                    {campaign[column]}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}