'use client'

import { Copy, Download, Heart, Share2 } from 'lucide-react'
import Image from 'next/image'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Component() {
  const prompt =
    'A serene mountain landscape at sunset, with golden light reflecting off a crystal-clear lake, surrounded by pine trees and snow-capped peaks, painted in the style of romantic landscape painting'

  const platforms = [
    { name: 'Midjourney', color: 'bg-purple-500', textColor: 'text-purple-500' },
    { name: 'DALL-E 3', color: 'bg-green-500', textColor: 'text-green-500' },
    { name: 'Stable Diffusion', color: 'bg-blue-500', textColor: 'text-blue-500' },
    { name: 'Firefly', color: 'bg-orange-500', textColor: 'text-orange-500' },
    { name: 'Leonardo AI', color: 'bg-red-500', textColor: 'text-red-500' },
    { name: 'Playground AI', color: 'bg-pink-500', textColor: 'text-pink-500' },
  ]

  const generatedImages = [
    { platform: 'Midjourney', url: '/placeholder.svg?height=400&width=400', likes: 234 },
    { platform: 'DALL-E 3', url: '/placeholder.svg?height=400&width=400', likes: 189 },
    { platform: 'Stable Diffusion', url: '/placeholder.svg?height=400&width=400', likes: 156 },
    { platform: 'Firefly', url: '/placeholder.svg?height=400&width=400', likes: 142 },
    { platform: 'Leonardo AI', url: '/placeholder.svg?height=400&width=400', likes: 198 },
    { platform: 'Playground AI', url: '/placeholder.svg?height=400&width=400', likes: 167 },
  ]

  const copyPrompt = () => {
    navigator.clipboard.writeText(prompt)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Header */}
        <div className="space-y-4 text-center">
          <h1 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            AI Image Generation Showcase
          </h1>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Compare how different AI platforms interpret the same prompt and generate unique
            artistic interpretations
          </p>
        </div>

        {/* Prompt Section */}
        <Card className="border-2 border-dashed border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="text-2xl">✨</span>
              Prompt
            </CardTitle>
            <CardDescription>The creative prompt used across all AI platforms</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg border bg-white p-4 shadow-sm">
              <p className="text-lg leading-relaxed text-gray-800 italic">&quot;{prompt}&quot;</p>
            </div>
            <div className="flex gap-2">
              <Button onClick={copyPrompt} variant="outline" size="sm">
                <Copy className="mr-2 h-4 w-4" />
                Copy Prompt
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Reference Image */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="text-2xl">🎨</span>
              Reference Inspiration
            </CardTitle>
            <CardDescription>
              Original concept or style reference that inspired this prompt
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative mx-auto aspect-video max-w-2xl overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Reference inspiration image"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-muted-foreground mt-4 text-center text-sm">
              Classic romantic landscape painting style - inspiration for the AI generations
            </p>
          </CardContent>
        </Card>

        {/* Platform Results */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <span className="text-2xl">🤖</span>
              AI Platform Results
            </CardTitle>
            <CardDescription>
              See how different AI platforms interpreted the same prompt
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {generatedImages.map((image, index) => {
                const platform = platforms.find(p => p.name === image.platform)
                return (
                  <div key={index} className="group relative">
                    <Card className="overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                      <div className="relative aspect-square">
                        <Image
                          src={image.url || '/placeholder.svg'}
                          alt={`Generated by ${image.platform}`}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
                        <div className="absolute top-3 left-3">
                          <Badge className={`${platform?.color} border-0 text-white shadow-lg`}>
                            {image.platform}
                          </Badge>
                        </div>
                        <div className="absolute right-3 bottom-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <div className="flex gap-2">
                            <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                              <Download className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                              <Share2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <h3 className={`font-semibold ${platform?.textColor}`}>
                            {image.platform}
                          </h3>
                          <div className="text-muted-foreground flex items-center gap-1 text-sm">
                            <Heart className="h-4 w-4" />
                            <span>{image.likes}</span>
                          </div>
                        </div>
                        <p className="text-muted-foreground mt-2 text-sm">
                          Generated with advanced AI algorithms
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Stats Section */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-purple-600">6</div>
              <div className="text-muted-foreground text-sm">AI Platforms</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-green-600">1,186</div>
              <div className="text-muted-foreground text-sm">Total Likes</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-blue-600">2.4k</div>
              <div className="text-muted-foreground text-sm">Views</div>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="p-6">
              <div className="text-3xl font-bold text-orange-600">89%</div>
              <div className="text-muted-foreground text-sm">Quality Score</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
