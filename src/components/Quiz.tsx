"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Progress } from "@/components/ui/progress"
import { Loader2 } from "lucide-react"
import QuestionCard from "./QuestionCard"
import { questions } from "@/data/questions"
import { answers } from "@/data/answers"
import { getRandomQuestion } from "@/helpers/getRandomQuestion"

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: string }>({})
  const [quizQuestions, setQuizQuestions] = useState<typeof questions>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [score, setScore] = useState(0)
  const router = useRouter()

  const handleAnswerSelection = (choice: string) => {
    const currentQuestion = quizQuestions[currentQuestionIndex]
    setUserAnswers((prev) => ({ ...prev, [currentQuestion.id]: choice }))

    // Check if the answer is correct
    if (choice === answers[currentQuestion.id]) {
      setScore((prevScore) => prevScore + 1)
    }

    // Move to the next question or submit at the end
    if (currentQuestionIndex < 14) {
      setCurrentQuestionIndex((prev) => prev + 1)
    } else {
      router.push(`/result?score=${score + (choice === answers[currentQuestion.id] ? 1 : 0)}`)
    }
  }

  useEffect(() => {
    setQuizQuestions(getRandomQuestion(questions))
  }, [])

  if (!quizQuestions.length) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[50vh]">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="mt-4 text-muted-foreground">Loading quiz questions...</p>
      </div>
    )
  }

  const progress = ((currentQuestionIndex + 1) / 15) * 100

  return (
    <div className="container max-w-3xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Web 3 Quiz</h1>
        <div className="flex flex-col gap-2">
          <p className="text-muted-foreground">Question {currentQuestionIndex + 1} of 15</p>
          <Progress value={progress} className="h-2 w-full" />
        </div>
      </div>

      <QuestionCard
        key={quizQuestions[currentQuestionIndex].id}
        quiz={quizQuestions[currentQuestionIndex]}
        selectedAnswer={userAnswers[quizQuestions[currentQuestionIndex].id] || null}
        onSelectAnswer={handleAnswerSelection}
      />
    </div>
  )
}

