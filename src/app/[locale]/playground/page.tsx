'use client'

import { Construction, Home } from 'lucide-react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

import { Button } from '@/components/ui/button'
import { TextEffect } from '@/components/ui/text-effect'

export default function Playground() {
  const t = useTranslations('Playground')

  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center gap-8 text-center">
      <Construction className="text-primary size-24 animate-bounce" />

      <TextEffect preset="fade-in-blur" as="h1" className="text-4xl font-bold">
        {t('underConstruction')}
      </TextEffect>

      <p className="text-muted-foreground max-w-md">{t('comingSoon')}</p>

      <Button asChild variant="outline" size="lg">
        <Link href="/" className="flex items-center gap-2">
          <Home className="size-4" />
          {t('backToHome')}
        </Link>
      </Button>
    </div>
  )
}
