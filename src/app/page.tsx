import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Star, Moon, Sun, Sparkles } from 'lucide-react'
import Image from 'next/image'

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <Star className="h-6 w-6 mr-2" />
          <span className="font-bold">Zen Sphere</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#testimonials">
            Testimonials
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#Team">
            Our Team
          </Link>
        </nav>
      </header>
      <main className="flex-1 bg-cover bg-center min-h-screen" style={{ backgroundImage: "url('https://cdn.discordapp.com/attachments/1323574400213192707/1330359770070388886/background-edit.png?ex=678db196&is=678c6016&hm=466069cbf12d7160fa0f43abf8de78926a08c9973176f11eb6c863a140b6bb37&')" }}>
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Discover Your Cosmic Path
                </h1>
                <p className="mx-auto max-w-[700px] text-yellow-500 md:text-xl dark:text-gray-400">
                  Unlock the secrets of the stars and numbers. Get personalized insights into your life&apos;s journey.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/form">
                  <Button>Get Your Reading</Button>
                </Link>
                <Link href="https://en.wikipedia.org/wiki/Astrology" target='_blank'>
                  <Button variant="outline">Learn More</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Our Services</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <Moon className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Astrology Readings</h3>
                <p className="text-yellow-500 dark:text-gray-400">Gain insights from the positions of celestial bodies.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Sun className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Numerology Analysis</h3>
                <p className="text-yellow-500 dark:text-gray-400">Discover the hidden meanings in your life&apos;s numbers.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Sparkles className="h-12 w-12 mb-4 text-primary" />
                <h3 className="text-xl font-bold mb-2">Personalized Reports</h3>
                <p className="text-yellow-500 dark:text-gray-400">Receive detailed reports tailored to your unique profile.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">What Our Clients Say</h2>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <p className="mb-4 text-yellow-500 dark:text-gray-400">&quot;The insights I received were incredibly accurate and helpful!&quot;</p>
                <p className="font-bold">- Sarah J.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <p className="mb-4 text-yellow-500 dark:text-gray-400">&quot;I was skeptical at first, but my reading was spot on. Highly recommend!&quot;</p>
                <p className="font-bold">- Michael T.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <p className="mb-4 text-yellow-500 dark:text-gray-400">&quot;The numerology analysis gave me a new perspective on my life path.&quot;</p>
                <p className="font-bold">- Emma L.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="Team" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">Our Dedicated Crew</h2>
            <p className="mt-4 mb-10 text-xl text-center text-muted-foreground">
              Get to know the experts behind Data Lens, committed to shaping the future of social media analytics.
            </p>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
              <div className="flex flex-col items-center text-center">
                <Image src="https://media.licdn.com/dms/image/v2/D4D03AQG_9Bjv45GZbA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731152153375?e=1743033600&v=beta&t=2bVsXe0d4AO3QcBZMLKzr6Xec6_DtF2uZXZ0QtWIJo0" alt="Profile Picture" className="h-24 w-24 rounded-full mb-4" width={96} height={96} />
                <p className="font-bold">Pratap Parui</p>
                <p className="font-bold">Consultant | Frontend Developer</p>
                <p className="mb-4 text-gray-500 dark:text-gray-400">&quot;Passionate about creating intuitive and dynamic user experiences.&quot;</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Image src="https://media.licdn.com/dms/image/v2/D5603AQFQIGSEgMB1mQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731182250556?e=1743033600&v=beta&t=hWqAzUQim-uhsrD1wIKrEGwrUa6Zqxsftz1WRenPhJE" alt="Profile Picture" className="h-24 w-24 rounded-full mb-4" width={96} height={96} />
                <p className="font-bold">Shreya Watane</p>
                <p className="font-bold">Cybersecurity Enthusiast and Developer</p>
                <p className="mb-4 text-gray-500 dark:text-gray-400">&quot;Dedicated to securing systems and developing robust cybersecurity solutions.&quot;</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Image src="https://media.licdn.com/dms/image/v2/C4E03AQEpaXO7hvUCSg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1646743604214?e=1743033600&v=beta&t=m3iIL9AExEFKNm0qXnTqIrYmIyv9rDqb6N2jiP3d4RI" alt="Profile Picture" className="h-24 w-24 rounded-full mb-4" width={96} height={96} />
                <p className="font-bold">Rahmat ali Shaikh</p>
                <p className="font-bold">Cybersecurity Enthusiast and Developer</p>
                <p className="mb-4 text-gray-500 dark:text-gray-400">&quot;Focused on cybersecurity and developing secure applications.&quot;</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Image src="https://media.licdn.com/dms/image/v2/D5603AQEVr38cnTbNYQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1693517283615?e=1743033600&v=beta&t=8v6AMUSbYlrLV69nVk_63xarNVdonebfEBA7x9yf3O0" alt="Profile Picture" className="h-24 w-24 rounded-full mb-4" width={96} height={96} />
                <p className="font-bold">Prathamesh Yandolli</p>
                <p className="font-bold">Developer</p>
                <p className="mb-4 text-gray-500 dark:text-gray-400">&quot;Enthusiastic developer with a knack for problem-solving and innovation.&quot;</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2025 Zen Sphere. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

