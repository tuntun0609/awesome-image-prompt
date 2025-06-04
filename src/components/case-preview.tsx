'use client'

import { FC, PropsWithChildren } from 'react'
import { ImageZoom } from 'fumadocs-ui/components/image-zoom'
import { Image as ImageIcon } from 'lucide-react'

import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

import styles from './case-preview.module.css'

interface ImageCaseProps {
  imageUrl: string
  modelName: string
  alt?: string
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down'
  aspectRatio?: string
}

const ImageCase: FC<ImageCaseProps> = ({
  imageUrl,
  modelName,
  alt,
  objectFit = 'cover',
  aspectRatio = '1/1',
}) => {
  return (
    <Card className="cursor-pointer overflow-hidden rounded-md p-0 transition-all">
      <CardContent className="p-0">
        <div style={{ aspectRatio }} className={styles.imageContainer}>
          {imageUrl ? (
            <ImageZoom
              decoding="async"
              loading="lazy"
              width={256}
              height={256}
              src={imageUrl}
              alt={alt || modelName}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 900px"
              className={cn(
                'm-0! h-full w-full object-top transition-transform duration-300 group-hover:scale-105'
              )}
              style={{ objectFit }}
            />
          ) : (
            <div className="bg-muted/30 flex h-full w-full items-center justify-center">
              <ImageIcon className="text-muted-foreground/50 h-12 w-12" />
            </div>
          )}
        </div>
        <div className="p-2 text-center">
          <span className="font-medium">{modelName}</span>
        </div>
      </CardContent>
    </Card>
  )
}

const ImagePreview: FC<PropsWithChildren> = ({ children }) => {
  return <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">{children}</div>
}

export { ImagePreview, ImageCase }
export type { ImageCaseProps }
