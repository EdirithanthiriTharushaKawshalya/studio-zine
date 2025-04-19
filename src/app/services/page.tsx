import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Camera, Building, Heart, ShoppingBag, Home, Calendar, CheckCircle2, ArrowRight } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden">
        <Image
          src="/services/CP.jpg?height=800&width=1600"
          alt="Photography services"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">Our Photography Services</h1>
          <p className="text-lg md:text-xl mb-6 max-w-2xl text-center">
            Professional photography services tailored to your unique needs and vision
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Comprehensive Photography Solutions</h2>
            <p className="text-muted-foreground">
              We offer a wide range of professional photography services to meet your personal and business needs. Each
              service is customized to deliver exceptional quality and capture your unique story.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Portrait Photography */}
            <div className="bg-card rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Portrait Photography"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Camera className="h-6 w-6 text-primary mr-2" />
                  <h3 className="text-xl font-semibold">Portrait Photography</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Professional portrait sessions that capture your personality and essence. Perfect for individuals,
                  professionals, and families looking to preserve special moments.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Individual & family portraits</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Professional headshots</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Environmental portraits</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Wedding Photography */}
            <div className="bg-card rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Wedding Photography"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Heart className="h-6 w-6 text-primary mr-2" />
                  <h3 className="text-xl font-semibold">Wedding Photography</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Comprehensive wedding photography to document your special day from preparation to reception,
                  capturing all the emotions and memorable moments.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Engagement sessions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Full-day wedding coverage</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Custom wedding albums</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Event Photography */}
            <div className="bg-card rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Event Photography"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Calendar className="h-6 w-6 text-primary mr-2" />
                  <h3 className="text-xl font-semibold">Event Photography</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Professional coverage for corporate events, parties, and special occasions. We capture the atmosphere,
                  key moments, and interactions throughout your event.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Corporate functions</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Birthday & anniversary parties</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Conferences & award ceremonies</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Commercial Photography */}
            <div className="bg-card rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Commercial Photography"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Building className="h-6 w-6 text-primary mr-2" />
                  <h3 className="text-xl font-semibold">Commercial Photography</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  High-quality commercial photography for businesses, including corporate headshots, interior/exterior
                  shots, and marketing materials.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Corporate branding</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Team & workplace photography</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Marketing campaign assets</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Product Photography */}
            <div className="bg-card rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Product Photography"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <ShoppingBag className="h-6 w-6 text-primary mr-2" />
                  <h3 className="text-xl font-semibold">Product Photography</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Showcase your products with professional product photography for e-commerce, catalogs, and marketing
                  materials.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>E-commerce product shots</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Lifestyle product photography</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Food & beverage photography</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Real Estate Photography */}
            <div className="bg-card rounded-lg overflow-hidden shadow-sm">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Real Estate Photography"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Home className="h-6 w-6 text-primary mr-2" />
                  <h3 className="text-xl font-semibold">Real Estate Photography</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Professional real estate photography that showcases properties in their best light, perfect for
                  listings, marketing materials, and architectural portfolios.
                </p>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Interior & exterior property shots</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Architectural photography</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                    <span>Virtual tours</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 px-4 md:px-6 bg-muted">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What&apos;s Included</h2>
            <p className="text-muted-foreground">
              All our photography services include these standard features to ensure you receive the highest quality
              experience and results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Pre-Shoot Consultation</h3>
              <p className="text-muted-foreground">
                A detailed consultation to understand your vision, requirements, and preferences before the shoot.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Professional Editing</h3>
              <p className="text-muted-foreground">
                Expert post-processing and retouching to ensure your images look their absolute best.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Digital Delivery</h3>
              <p className="text-muted-foreground">
                High-resolution digital files delivered via a secure online gallery for easy downloading and sharing.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Usage Rights</h3>
              <p className="text-muted-foreground">
                Personal usage rights for all your images, allowing you to print and share as you wish.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Quick Turnaround</h3>
              <p className="text-muted-foreground">
                Efficient delivery timeline so you can enjoy and use your images without lengthy delays.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Print Options</h3>
              <p className="text-muted-foreground">
                Access to professional printing services for high-quality physical prints, albums, and wall art.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 px-4 md:px-6">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Photography Process</h2>
            <p className="text-muted-foreground">
              We follow a structured approach to ensure a smooth experience and exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <div className="space-y-8">
                <div className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold mr-4">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Initial Consultation</h3>
                    <p className="text-muted-foreground">
                      We begin with a detailed discussion about your vision, requirements, and preferences to ensure
                      we&apos;re aligned.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold mr-4">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Planning & Preparation</h3>
                    <p className="text-muted-foreground">
                      We plan the logistics, location, timing, and technical aspects to ensure everything runs smoothly.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold mr-4">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">The Photography Session</h3>
                    <p className="text-muted-foreground">
                      On the day of the shoot, we work efficiently and professionally to capture the best possible
                      images.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold mr-4">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Editing & Post-Production</h3>
                    <p className="text-muted-foreground">
                      We carefully select and edit the best images, enhancing them to achieve the perfect look and feel.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold mr-4">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Delivery & Follow-Up</h3>
                    <p className="text-muted-foreground">
                      We deliver your final images and ensure you&apos;re completely satisfied with the results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/services/Photography Process.png?height=1000&width=800"
                alt="Our photography process"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 px-4 md:px-6 bg-muted">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Find answers to common questions about our photography services.</p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>How far in advance should I book?</AccordionTrigger>
                <AccordionContent>
                  We recommend booking at least 4-6 weeks in advance for portrait sessions and 6-12 months for weddings.
                  For commercial projects, 2-4 weeks notice is typically sufficient, but this can vary based on the
                  scope of the project.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How many photos will I receive?</AccordionTrigger>
                <AccordionContent>
                  The number of photos varies depending on the service and duration of the shoot. For portrait sessions,
                  you can expect 20-40 edited images. Wedding packages typically include 300-800 images. Commercial
                  projects are quoted based on specific requirements.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How long until I receive my photos?</AccordionTrigger>
                <AccordionContent>
                  For portrait sessions, you&apos;ll receive your edited images within 1-2 weeks. Wedding photos are
                  typically delivered within 4-6 weeks. Commercial projects have varying timelines based on complexity
                  and are discussed during the consultation.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Do you travel for photo shoots?</AccordionTrigger>
                <AccordionContent>
                  Yes, we are available for travel both domestically and internationally. Travel fees may apply
                  depending on the location and duration of the trip. Please contact us for a custom quote for your
                  destination photography needs.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>What should I wear for my photo session?</AccordionTrigger>
                <AccordionContent>
                  We provide detailed guidance on wardrobe choices during your pre-shoot consultation. Generally, we
                  recommend wearing solid colors, avoiding busy patterns, and coordinating (but not matching exactly)
                  for group photos. We&apos;re happy to review your outfit choices before the session.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-6">
                <AccordionTrigger>Can I purchase additional prints or products?</AccordionTrigger>
                <AccordionContent>
                  We offer a wide range of high-quality prints, albums, wall art, and other photo products. These can be
                  ordered directly through your online gallery after your images are delivered.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 md:px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Discuss Your Photography Needs?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a consultation and learn how we can bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link href="/gallery" className="flex items-center gap-2">
                View Our Portfolio <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

