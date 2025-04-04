"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Define categories for filtering
const categories = ["All", "Portrait", "Landscape", "Event", "Commercial"]

// Sample gallery items
const galleryItems = [
  { id: 1, category: "Portrait", title: "Studio Portrait", src: "/placeholder.svg?height=800&width=600" },
  { id: 2, category: "Landscape", title: "Mountain Vista", src: "/placeholder.svg?height=600&width=800" },
  { id: 3, category: "Event", title: "Wedding Ceremony", src: "/placeholder.svg?height=800&width=600" },
  { id: 4, category: "Commercial", title: "Product Showcase", src: "/placeholder.svg?height=600&width=800" },
  { id: 5, category: "Portrait", title: "Environmental Portrait", src: "/placeholder.svg?height=800&width=600" },
  { id: 6, category: "Landscape", title: "Coastal Sunset", src: "/placeholder.svg?height=600&width=800" },
  { id: 7, category: "Event", title: "Corporate Event", src: "/placeholder.svg?height=800&width=600" },
  { id: 8, category: "Commercial", title: "Fashion Editorial", src: "/placeholder.svg?height=600&width=800" },
  { id: 9, category: "Portrait", title: "Family Portrait", src: "/placeholder.svg?height=800&width=600" },
  { id: 10, category: "Landscape", title: "Urban Cityscape", src: "/placeholder.svg?height=600&width=800" },
  { id: 11, category: "Event", title: "Birthday Celebration", src: "/placeholder.svg?height=800&width=600" },
  { id: 12, category: "Commercial", title: "Real Estate", src: "/placeholder.svg?height=600&width=800" },
]

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<null | (typeof galleryItems)[0]>(null)
  const [open, setOpen] = useState(false)

  const handleImageClick = (item: (typeof galleryItems)[0]) => {
    setSelectedImage(item)
    setOpen(true)
  }

  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <h1 className="text-4xl font-bold mb-2">Photography Gallery</h1>
      <p className="text-muted-foreground mb-8 max-w-3xl">
        Browse through a collection of my best work across various photography styles and subjects.
      </p>

      <Tabs defaultValue="All" className="mb-8">
        <TabsList className="mb-6">
          {categories.map((category) => (
            <TabsTrigger key={category} value={category}>
              {category}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category} value={category}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {galleryItems
                .filter((item) => category === "All" || item.category === category)
                .map((item) => (
                  <div
                    key={item.id}
                    className="group relative cursor-pointer overflow-hidden rounded-lg"
                    onClick={() => handleImageClick(item)}
                  >
                    <Image
                      src={item.src || "/placeholder.svg"}
                      alt={item.title}
                      width={800}
                      height={600}
                      className="w-full aspect-[3/4] object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-end opacity-0 group-hover:opacity-100">
                      <div className="p-4 w-full">
                        <h3 className="text-white font-semibold">{item.title}</h3>
                        <p className="text-white/80 text-sm">{item.category}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>

      <Dialog open={open} onOpenChange={setOpen}>
        {selectedImage && (
          <DialogContent className="max-w-4xl p-0 overflow-hidden bg-background">
            <div className="relative">
              <Image
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.title}
                width={1200}
                height={800}
                className="w-full object-contain max-h-[80vh]"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/70">
                <h3 className="text-white text-xl font-semibold">{selectedImage.title}</h3>
                <p className="text-white/80">{selectedImage.category}</p>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </div>
  )
}

