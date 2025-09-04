import { createFileRoute, Link } from '@tanstack/react-router'
import { ArrowRight, Code2, Database, Lock, Zap } from 'lucide-react'

export const Route = createFileRoute('/')({
  component: Home,
})

const features = [
  {
    icon: <Database className="h-5 w-5" />,
    title: 'Convex Backend',
    description: 'Real-time database with TypeScript-first API',
  },
  {
    icon: <Lock className="h-5 w-5" />,
    title: 'Better Auth',
    description: 'Modern authentication with multiple providers',
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: 'TanStack Router',
    description: 'Type-safe routing with file-based structure',
  },
  {
    icon: <Code2 className="h-5 w-5" />,
    title: 'Tailwind CSS v4',
    description: 'Next-gen utility-first CSS framework',
  },
]

function Home() {
  return (
    <div className="from-background to-secondary/20 min-h-screen bg-gradient-to-b">
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="bg-secondary inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium">
            <Zap className="text-primary mr-2 h-4 w-4" />
            Modern Full-Stack Starter
          </div>

          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
            Build faster with{' '}
            <span className="from-primary to-primary bg-gradient-to-r bg-clip-text text-transparent">
              TSS Convex Starter
            </span>
          </h1>

          <p className="text-muted-foreground text-xl">
            Production-ready starter template with Convex backend, Better Auth,
            TanStack Router, and Tailwind CSS v4. Everything you need to ship
            your next project.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/auth"
              className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-lg px-6 py-3 font-semibold transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border-border bg-background hover:bg-secondary inline-flex items-center justify-center rounded-lg border px-6 py-3 font-semibold transition-colors"
            >
              <svg
                className="mr-2 h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
              View on GitHub
            </a>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Everything you need</h2>
            <p className="text-muted-foreground mt-4 text-lg">
              Pre-configured with the best tools for modern web development
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-card rounded-xl p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="bg-primary/10 text-primary mb-4 inline-flex rounded-lg p-3">
                  {feature.icon}
                </div>
                <h3 className="mb-2 font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
