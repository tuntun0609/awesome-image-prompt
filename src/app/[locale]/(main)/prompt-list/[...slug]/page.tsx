import { createRelativeLink } from 'fumadocs-ui/mdx'
import { notFound } from 'next/navigation'
import { getLocale } from 'next-intl/server'

import { Card, CardContent } from '@/components/ui/card'
import { defaultMdxComponents, promptSource } from '@/lib/source'

export default async function PromptList(props: { params: Promise<{ slug?: string[] }> }) {
  const locale = await getLocale()
  const params = await props.params
  const promptDocs = promptSource.getPage(params.slug, locale)

  if (!promptDocs) {
    notFound()
  }

  const MDXContent = promptDocs.data.body

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-8 dark:from-black dark:to-black">
      <div className="mx-auto max-w-4xl space-y-8">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h1 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-4xl leading-tight font-bold text-transparent md:text-5xl dark:from-purple-400 dark:to-pink-400">
            {promptDocs.data.title}
          </h1>
        </div>

        <Card className="pt-0 pb-6 dark:border-slate-700 dark:bg-slate-900/50">
          <CardContent className="px-6">
            <article className="prose prose-lg dark:prose-invert mx-auto">
              <div className="text-gray-700 dark:text-gray-300">
                <MDXContent
                  components={{
                    ...defaultMdxComponents,
                    a: createRelativeLink(promptSource, promptDocs),
                  }}
                />
              </div>
            </article>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
