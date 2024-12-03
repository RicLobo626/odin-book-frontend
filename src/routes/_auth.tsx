import { AuthLayout } from '@/components/layouts'
import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth')({
  component: AuthLayout,
  beforeLoad: ({ context }) => {
    const { isAuthenticated } = context.auth

    if (isAuthenticated) {
      // eslint-disable-next-line
      throw redirect({
        to: '/',
        search: {
          redirect: location.href,
        },
        replace: true,
      })
    }
  },
})
