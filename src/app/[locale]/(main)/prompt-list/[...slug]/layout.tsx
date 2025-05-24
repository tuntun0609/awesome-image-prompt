import type { ReactNode } from 'react'
import { NextProvider } from 'fumadocs-core/framework/next'
import { RootProvider } from 'fumadocs-ui/provider'
import { useLocale, useTranslations } from 'next-intl'

import { fumadocsUiTranslations } from '@/i18n/fumadocs-ui-translation'
import { routing } from '@/i18n/routing'

import './fumadocs.css'

export default function Layout({ children }: { children: ReactNode }) {
  const locale = useLocale()
  const t = useTranslations('LocaleSwitch')

  const locales = routing.locales.map(locale => ({
    name: t('locale', { locale }),
    locale,
  }))

  return (
    <NextProvider>
      <RootProvider
        theme={{
          attribute: 'class',
          defaultTheme: 'system',
          enableSystem: true,
        }}
        i18n={{
          locale,
          locales,
          translations: fumadocsUiTranslations[locale],
        }}
      >
        {children}
      </RootProvider>
    </NextProvider>
  )
}
