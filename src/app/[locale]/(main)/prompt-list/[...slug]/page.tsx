import { InlineTOC } from 'fumadocs-ui/components/inline-toc'
import { createRelativeLink } from 'fumadocs-ui/mdx'
import { DocsBody } from 'fumadocs-ui/page'
import { notFound } from 'next/navigation'
import { getLocale } from 'next-intl/server'

import { defaultMdxComponents, promptSource } from '@/lib/source'

export default async function PromptList(props: { params: Promise<{ slug?: string[] }> }) {
  const locale = await getLocale()
  const params = await props.params
  const prompt = promptSource.getPage(params.slug, locale)

  if (!prompt) {
    notFound()
  }

  const MDXContent = prompt.data.body

  return (
    <div className="container mx-auto max-w-2xl px-4 py-16">
      <DocsBody>
        <div className="bg-background border-primary/80 dark:border-primary/60 mb-8 space-y-1 rounded-lg border px-4 py-6">
          <h1 className="text-primary mb-2 text-center text-3xl font-bold">{prompt.data.title}</h1>
        </div>
        <InlineTOC items={prompt.data.toc}>toc</InlineTOC>
        <MDXContent
          components={{
            ...defaultMdxComponents,
            a: createRelativeLink(promptSource, prompt),
          }}
        />
      </DocsBody>
    </div>
  )
}
