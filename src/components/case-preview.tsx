'use client'

import { FC, PropsWithChildren } from 'react'
import { Image as ImageIcon } from 'lucide-react'
import Image from 'next/image'

import { Card, CardContent } from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

interface ImageCaseProps {
  imageUrl: string
  modelName: string
  alt?: string
}

const ImageCase: FC<ImageCaseProps> = ({ imageUrl, modelName, alt }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="group cursor-pointer overflow-hidden rounded-md p-0 transition-all">
          <CardContent className="relative p-0">
            <div className="relative aspect-[1/1] overflow-hidden">
              {imageUrl ? (
                <Image
                  decoding="async"
                  loading="lazy"
                  width={256}
                  height={256}
                  src={imageUrl}
                  alt={alt || modelName}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 900px"
                  className="m-0! h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
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
      </DialogTrigger>
      <DialogContent className="max-w-[90vw]">
        <DialogHeader>
          <DialogTitle>{modelName}</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        {imageUrl && (
          <div className="relative aspect-auto max-h-[85vh] w-full overflow-hidden">
            <Image
              src={imageUrl}
              alt={alt || modelName}
              className="h-full w-full object-contain"
              width={1024}
              height={1024}
            />
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}

const ImagePreview: FC<PropsWithChildren> = ({ children }) => {
  return <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">{children}</div>
}

export { ImagePreview, ImageCase }
export type { ImageCaseProps }
