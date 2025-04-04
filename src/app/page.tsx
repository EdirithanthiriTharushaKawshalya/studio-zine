import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Camera, Instagram, Mail, Twitter } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] overflow-hidden">
        <Image
          src="/home/BG.jpg?height=1080&width=1920"
          alt="Featured photography work"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-center">Capturing Moments</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl text-center">
            Professional photography that tells your story through a unique lens
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="text-lg">
              <Link href="/gallery">View Gallery</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-16 px-4 md:px-6 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group relative overflow-hidden rounded-lg">
                <Image
                  src={`/placeholder.svg?height=600&width=800`}
                  alt={`Featured work ${item}`}
                  width={800}
                  height={600}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <Button variant="secondary" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/gallery" className="flex items-center gap-2">
                View All Work <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <Camera className="h-10 w-10 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Portrait Photography</h3>
              <p className="text-muted-foreground mb-4">
                Capture your personality with professional portraits that tell your story.
              </p>
              <Button variant="link" className="p-0" asChild>
                <Link href="/services">Learn More</Link>
              </Button>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <Camera className="h-10 w-10 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Wedding Photography</h3>
              <p className="text-muted-foreground mb-4">
                Preserve the magic of your special day with timeless and elegant wedding photography.
              </p>
              <Button variant="link" className="p-0" asChild>
                <Link href="/services">Learn More</Link>
              </Button>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <Camera className="h-10 w-10 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Event Coverage</h3>
              <p className="text-muted-foreground mb-4">
                Comprehensive coverage of your special events, from weddings to corporate gatherings.
              </p>
              <Button variant="link" className="p-0" asChild>
                <Link href="/services">Learn More</Link>
              </Button>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <Camera className="h-10 w-10 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Commercial Photography</h3>
              <p className="text-muted-foreground mb-4">
                Elevate your brand with high-quality product and promotional photography.
              </p>
              <Button variant="link" className="p-0" asChild>
                <Link href="/services">Learn More</Link>
              </Button>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <Camera className="h-10 w-10 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Product Photography</h3>
              <p className="text-muted-foreground mb-4">
                Showcase your products in the best light with professional, high-resolution photography.
              </p>
              <Button variant="link" className="p-0" asChild>
                <Link href="/services">Learn More</Link>
              </Button>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <Camera className="h-10 w-10 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2">Real Estate Photography</h3>
              <p className="text-muted-foreground mb-4">
                Highlight the beauty of properties with stunning interior and exterior photography.
              </p>
              <Button variant="link" className="p-0" asChild>
                <Link href="/services">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 md:px-6 bg-muted">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Why We Curate Quality Over Quantity!</h2>
          <p className="text-xl mb-8 max-w-4xl mx-auto text-center">
            At STUDIO ZINE, we believe in showcasing real experiences from our clients. Here are some of the testimonials that reflect
            the heart of what we do - stories of meaningful impact and shared success. Quality always speaks louder than quantity.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <p className="italic mb-4">
                "Working with this photographer was an absolute pleasure. They captured our wedding day perfectly and
                delivered photos that we'll cherish forever."
              </p>
              <p className="font-semibold">- Sarah & John</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <p className="italic mb-4">
                "The product photography for our e-commerce store has significantly increased our conversion rates.
                Highly professional and creative work."
              </p>
              <p className="font-semibold">- Mark, CEO of Brand Co.</p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <p className="italic mb-4">
                "My family portraits turned out better than I could have imagined. The attention to detail and ability
                to make everyone feel comfortable was impressive."
              </p>
              <p className="font-semibold">- Emily R.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 px-4 md:px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Capture Your Story?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss your photography needs and create something beautiful together.
          </p>
          <Button asChild size="lg" variant="secondary">
            <Link href="/contact">Contact Me</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 md:px-6 bg-background">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold">STUDIO ZINE</h3>
              <p className="text-muted-foreground mt-2">Capturing life's precious moments</p>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" aria-label="Email">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>© {new Date().getFullYear()} STUDIO ZINE. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

