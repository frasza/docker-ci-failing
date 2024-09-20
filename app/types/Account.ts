export interface Account {
  id: number
  name: string
  description: string | null
  arr: number | null
  segment: string | null
  renewal_date: string | null
  health_score: number | null
  icp: boolean
  created_at: string
  updated_at: string
  success_plans_count?: number
  objectives_count?: number
}
