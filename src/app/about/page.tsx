import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Camera, Award, Users, Clock } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h1 className="text-4xl font-bold mb-4">About the Photographer</h1>
          <p className="text-muted-foreground mb-6">
            With over 10 years of experience capturing life&apos;s most precious moments, I bring a unique perspective and
            technical expertise to every photoshoot.
          </p>
          <p className="mb-6">
            My journey in photography began when I was gifted my first camera at the age of 16. What started as a hobby
            quickly developed into a passion, and eventually, a fulfilling career. I&apos;ve had the privilege of working
            with clients from all walks of life, from couples celebrating their wedding day to businesses looking to
            elevate their brand imagery.
          </p>
          <p className="mb-6">
            My approach to photography is centered around authenticity and storytelling. I believe that the best images
            capture not just how something looks, but how it feels. Whether I&apos;m shooting a portrait, an event, or a
            landscape, I strive to create images that evoke emotion and tell a compelling story.
          </p>
          <Button asChild>
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
        <div className="relative">
          <Image
            src="/about/About the Photographer.png?height=800&width=600"
            alt="Photographer portrait"
            width={600}
            height={800}
            className="rounded-lg object-cover w-full h-auto"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <div className="bg-card p-6 rounded-lg shadow-sm text-center">
          <Camera className="h-10 w-10 mx-auto mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">10+ Years</h3>
          <p className="text-muted-foreground">Professional Experience</p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm text-center">
          <Users className="h-10 w-10 mx-auto mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">500+</h3>
          <p className="text-muted-foreground">Happy Clients</p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm text-center">
          <Clock className="h-10 w-10 mx-auto mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">1000+</h3>
          <p className="text-muted-foreground">Photoshoots Completed</p>
        </div>
        <div className="bg-card p-6 rounded-lg shadow-sm text-center">
          <Award className="h-10 w-10 mx-auto mb-4 text-primary" />
          <h3 className="text-xl font-semibold mb-2">15+</h3>
          <p className="text-muted-foreground">Industry Awards</p>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">My Photography Philosophy</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-muted p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Authentic Moments</h3>
            <p>
              I believe in capturing genuine emotions and interactions. My approach is to blend into the background,
              allowing natural moments to unfold while being ready to document them beautifully.
            </p>
          </div>
          <div className="bg-muted p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Technical Excellence</h3>
            <p>
              Great photography requires both artistic vision and technical skill. I continuously invest in the latest
              equipment and techniques to ensure your images are of the highest quality.
            </p>
          </div>
          <div className="bg-muted p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Personalized Experience</h3>
            <p>
              Every client and project is unique. I take the time to understand your specific needs and preferences,
              tailoring my approach to create images that exceed your expectations.
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-6">Equipment & Gear</h2>
        <p className="max-w-3xl mx-auto mb-8">
          I use professional-grade equipment to ensure the highest quality results for all my clients. My gear includes:
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">Cameras</h3>
            <ul className="text-muted-foreground">
              <li>Sony Alpha a7R IV</li>
              <li>Canon EOS R5</li>
              <li>Fujifilm GFX 100S</li>
            </ul>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">Lenses</h3>
            <ul className="text-muted-foreground">
              <li>Sony 24-70mm f/2.8 GM</li>
              <li>Canon RF 70-200mm f/2.8</li>
              <li>Sigma 85mm f/1.4 Art</li>
            </ul>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">Lighting</h3>
            <ul className="text-muted-foreground">
              <li>Profoto B10 Plus</li>
              <li>Godox AD600Pro</li>
              <li>Various modifiers</li>
            </ul>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-2">Accessories</h3>
            <ul className="text-muted-foreground">
              <li>DJI Ronin-S Gimbal</li>
              <li>Manfrotto tripods</li>
              <li>Portable backdrops</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Work Together?</h2>
        <p className="max-w-2xl mx-auto mb-8">
          I&apos;d love to discuss your photography needs and how I can help bring your vision to life.
        </p>
        <Button asChild size="lg">
          <Link href="/contact">Contact Me</Link>
        </Button>
      </div>
    </div>
  )
}

