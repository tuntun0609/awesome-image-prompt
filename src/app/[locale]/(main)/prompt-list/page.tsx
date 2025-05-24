import Link from 'next/link'
import { getLocale } from 'next-intl/server'

import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { promptSource } from '@/lib/source'

const gradients = [
  'from-blue-500 to-cyan-500',
  'from-purple-500 to-pink-500',
  'from-amber-500 to-orange-500',
  'from-green-500 to-emerald-500',
  'from-rose-500 to-red-500',
  'from-violet-500 to-purple-500',
]

export default async function PromptList() {
  const locale = await getLocale()
  const prompts = promptSource.getPages(locale)

  return (
    <div className="container py-8">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {prompts.map((prompt, index) => {
          const gradientClass = gradients[index % gradients.length]

          return (
            <Link href={`/prompt-list/${prompt.slugs.join('/')}`} key={prompt.slugs.join('/')}>
              <Card className="group cursor-pointer overflow-hidden rounded-md py-0 transition-all hover:shadow-lg">
                {prompt.data.cover ? (
                  <div className="relative aspect-[4/2] overflow-hidden">
                    <img
                      src={prompt.data.cover}
                      alt={prompt.data.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : (
                  <div className={`aspect-[4/3] bg-gradient-to-br ${gradientClass}`} />
                )}
                <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                  <div className="flex flex-col gap-1">
                    <h3 className="font-semibold">{prompt.data.title}</h3>
                    {prompt.data.pro && (
                      <Badge variant="secondary" className="w-fit">
                        Pro
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{prompt.data.description}</p>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
