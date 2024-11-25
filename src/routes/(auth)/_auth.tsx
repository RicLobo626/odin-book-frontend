import { AuthLayout } from '@/components/layouts'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(auth)/_auth')({
  component: AuthLayout,
})
