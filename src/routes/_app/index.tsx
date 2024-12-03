import { HomePage } from '@/components/pages'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/')({
  component: HomePage,
})
