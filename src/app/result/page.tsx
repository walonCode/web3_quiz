"use client"

import { useSearchParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Share2, Home, RefreshCw, Trophy, Award, Medal } from "lucide-react"
import Confetti from "@/components/Confetti"

export default function Result() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const score = Number.parseInt(searchParams.get("score") || "0")
  const [showConfetti, setShowConfetti] = useState(false)

  // Calculate percentage
  const percentage = Math.round((score / 15) * 100)

  // Determine message based on score
  const getMessage = () => {
    if (percentage >= 80) return "Excellent! You're a Web3 expert!"
    if (percentage >= 60) return "Great job! You know your Web3 stuff!"
    if (percentage >= 40) return "Good effort! Keep learning about Web3!"
    return "Keep studying! Web3 has a lot to explore."
  }

  // Show confetti for good scores
  useEffect(() => {
    if (percentage >= 70) {
      setShowConfetti(true)
      const timer = setTimeout(() => setShowConfetti(false), 5000)
      return () => clearTimeout(timer)
    }
  }, [percentage])

  return (
    <div className="flex flex-col min-h-screen">
      {showConfetti && <Confetti />}

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-16">
          <div className="container max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Quiz Results</h1>
            <p className="text-xl text-muted-foreground mb-12">See how well you did on the Web3 quiz!</p>

            {/* Score Display */}
            <div className="relative bg-card rounded-xl shadow-lg p-8 mb-8 max-w-md mx-auto">
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground rounded-full p-4">
                <Trophy size={32} />
              </div>

              <h2 className="text-2xl font-semibold mb-4">Your Score</h2>

              <div className="flex justify-center items-center gap-4 mb-6">
                <div className="text-5xl font-bold text-primary">{score}</div>
                <div className="text-2xl font-medium text-muted-foreground">/15</div>
              </div>

              <div className="w-full bg-muted rounded-full h-4 mb-6">
                <div
                  className="bg-primary h-4 rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${percentage}%` }}
                />
              </div>

              <p className="text-lg mb-6">{getMessage()}</p>

              <div className="flex flex-wrap justify-center gap-4">
                <Button onClick={() => router.push("/")}>
                  <Home className="mr-2 h-4 w-4" />
                  Home
                </Button>
                <Button onClick={() => router.push("/quiz")} variant="outline">
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Try Again
                </Button>
                <Button variant="secondary">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share Results
                </Button>
              </div>
            </div>

            {/* Achievement Badges */}
            {percentage >= 60 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                <div className="bg-card rounded-lg p-6 flex flex-col items-center">
                  <Award className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Web3 Enthusiast</h3>
                  <p className="text-muted-foreground text-center">You've shown great interest in Web3 technologies!</p>
                </div>

                {percentage >= 80 && (
                  <div className="bg-card rounded-lg p-6 flex flex-col items-center">
                    <Trophy className="h-12 w-12 text-primary mb-4" />
                    <h3 className="font-semibold text-lg mb-2">Web3 Expert</h3>
                    <p className="text-muted-foreground text-center">Your knowledge of Web3 concepts is impressive!</p>
                  </div>
                )}

                {percentage >= 70 && (
                  <div className="bg-card rounded-lg p-6 flex flex-col items-center">
                    <Medal className="h-12 w-12 text-primary mb-4" />
                    <h3 className="font-semibold text-lg mb-2">Quiz Master</h3>
                    <p className="text-muted-foreground text-center">You've mastered the fundamentals of Web3!</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  )
}

