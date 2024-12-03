import { SignUpPage } from '@/components/pages/auth/SignUpPage'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/signup')({
  component: SignUpPage,
})
