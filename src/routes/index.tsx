import { createFileRoute } from '@tanstack/react-router'
import { Authenticated, AuthLoading, Unauthenticated } from 'convex/react'
import { SignupForm } from '~/components/signup-form'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="container mx-auto max-w-md py-10">
      <Authenticated>
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Welcome!</h1>
          <p>You are successfully logged in.</p>
        </div>
      </Authenticated>
      <Unauthenticated>
        <div className="space-y-6">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Sign Up</h1>
            <p className="text-muted-foreground mt-2">
              Create a new account to get started
            </p>
          </div>
          <SignupForm />
        </div>
      </Unauthenticated>
      <AuthLoading>
        <div className="text-center">
          <p>Loading...</p>
        </div>
      </AuthLoading>
    </div>
  )
}
