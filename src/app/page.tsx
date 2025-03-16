import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="bg-gradient-to-b from-primary/5 to-background flex flex-col items-center justify-center min-h-screen">

      <main className="flex-1">
        <section className="relative">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background z-0" />
          <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

          {/* Hero Content */}
          <div className=" relative z-10 px-4 py-24 md:py-32 lg:py-40 flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">Test Your Web3 Knowledge</h1>

            <p className="text-xl text-muted-foreground max-w-2xl mb-12">
              Challenge yourself with our comprehensive Web3 quiz covering blockchain, cryptocurrencies, NFTs, and
              decentralized applications.
            </p>

            <Link href="/quiz">
              <Button size="lg" className="group text-lg px-8 py-6 h-auto transition-all duration-300 hover:scale-105">
                Start Quiz
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl w-full">
              <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">15</div>
                <p className="text-muted-foreground">Challenging Questions</p>
              </div>

              <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">5</div>
                <div className="text-muted-foreground">Minutes to Complete</div>
              </div>

              <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 text-center">
                <div className="text-3xl font-bold text-primary mb-2">100%</div>
                <div className="text-muted-foreground">Free to Play</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

