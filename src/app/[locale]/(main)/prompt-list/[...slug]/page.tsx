import { InlineTOC } from 'fumadocs-ui/components/inline-toc'
import { createRelativeLink } from 'fumadocs-ui/mdx'
import { notFound } from 'next/navigation'
import { getLocale, getTranslations } from 'next-intl/server'

import { defaultMdxComponents, promptSource } from '@/lib/source'

export default async function PromptList(props: { params: Promise<{ slug?: string[] }> }) {
  const locale = await getLocale()
  const params = await props.params
  const promptDocs = promptSource.getPage(params.slug, locale)
  const t = await getTranslations()

  if (!promptDocs) {
    notFound()
  }

  const MDXContent = promptDocs.data.body

  return (
    <div className="container mx-auto max-w-4xl px-6 py-12">
      <article className="prose prose-lg dark:prose-invert mx-auto">
        <header className="mb-8 text-center">
          <h1 className="mb-4 text-4xl font-light tracking-tight">{promptDocs.data.title}</h1>
        </header>

        {promptDocs.data.toc && promptDocs.data.toc.length > 0 && (
          <div className="mb-8">
            <InlineTOC items={promptDocs.data.toc}>{t('blog.toc')}</InlineTOC>
          </div>
        )}

        <div className="text-gray-700 dark:text-gray-300">
          <MDXContent
            components={{
              ...defaultMdxComponents,
              a: createRelativeLink(promptSource, promptDocs),
            }}
          />
        </div>
      </article>
    </div>
  )
}
