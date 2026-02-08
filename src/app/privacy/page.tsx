import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import fs from 'fs'
import path from 'path'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "FyyndFit Privacy Policy. Learn how we collect, use, and protect your personal information and fitness data.",
  keywords: ["privacy policy", "data protection", "user privacy", "fitness app privacy", "GDPR"],
  openGraph: {
    title: "Privacy Policy | FyyndFit",
    description: "FyyndFit Privacy Policy. Learn how we collect, use, and protect your personal information and fitness data.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | FyyndFit",
    description: "FyyndFit Privacy Policy. Learn how we collect, use, and protect your personal information and fitness data.",
  },
  alternates: {
    canonical: "/privacy",
  },
  robots: {
    index: true,
    follow: true,
  },
}

async function getPrivacyContent() {
  const filePath = path.join(process.cwd(), 'content', 'privacy.mdx')
  const source = fs.readFileSync(filePath, 'utf8')
  return source
}

export default async function PrivacyPage() {
  const content = await getPrivacyContent()

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
