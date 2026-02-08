import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import fs from 'fs'
import path from 'path'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "FyyndFit Terms of Use. Read our terms and conditions, user responsibilities, and service agreements.",
  keywords: ["terms of use", "terms and conditions", "user agreement", "service terms", "legal"],
  openGraph: {
    title: "Terms of Use | FyyndFit",
    description: "FyyndFit Terms of Use. Read our terms and conditions, user responsibilities, and service agreements.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Terms of Use | FyyndFit",
    description: "FyyndFit Terms of Use. Read our terms and conditions, user responsibilities, and service agreements.",
  },
  alternates: {
    canonical: "/terms",
  },
  robots: {
    index: true,
    follow: true,
  },
}

async function getTermsContent() {
  const filePath = path.join(process.cwd(), 'content', 'terms.mdx')
  const source = fs.readFileSync(filePath, 'utf8')
  return source
}

export default async function TermsPage() {
  const content = await getTermsContent()

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-24">
        <div className="container px-6 md:px-12 lg:px-20 max-w-4xl mx-auto">
          <article className="prose prose-lg dark:prose-invert max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-ul:text-muted-foreground prose-ol:text-muted-foreground prose-li:text-muted-foreground">
            <MDXRemote
              source={content}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                },
              }}
            />
          </article>
        </div>
      </main>
      <Footer />
    </div>
  )
}
