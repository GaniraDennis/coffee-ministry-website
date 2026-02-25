"use client"

import * as React from "react"
import Image from "next/image"
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"

type Slide = {
  id: string | number
  image?: string
  title?: string
  subtitle?: string
}

export default function SliderCards({ slides }: { slides: Slide[] }) {
  return (
    <div className="relative">
      <Carousel>
        <CarouselContent className="py-2">
          {slides.map((s) => (
            <CarouselItem key={s.id} className="max-w-md">
              <div className="group overflow-hidden rounded-2xl border border-border bg-card">
                {s.image ? (
                  <div className="h-48 w-full relative">
                    <Image src={s.image} alt={s.title || ""} fill className="object-cover" />
                  </div>
                ) : (
                  <div className="h-48 w-full bg-secondary" />
                )}
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-foreground">{s.title}</h3>
                  {s.subtitle && <p className="mt-1 text-xs text-muted-foreground">{s.subtitle}</p>}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="absolute -left-8 top-1/2 -translate-y-1/2">
        <CarouselPrevious />
      </div>
      <div className="absolute -right-8 top-1/2 -translate-y-1/2">
        <CarouselNext />
      </div>
    </div>
  )
}
