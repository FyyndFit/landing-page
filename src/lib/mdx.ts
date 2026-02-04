import fs from 'fs'
import path from 'path'
import { serialize } from 'next-mdx-remote/serialize'
import remarkGfm from 'remark-gfm'

export async function getMdxContent(filename: string) {
  const filePath = path.join(process.cwd(), 'content', `${filename}.mdx`)
  const source = fs.readFileSync(filePath, 'utf8')

  const mdxSource = await serialize(source, {
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [remarkGfm],
    },
  })

  return mdxSource
}
