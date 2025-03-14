"use client"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import type { Quiz } from "@/types"

export default function QuestionCard({
  quiz,
  onSelectAnswer,
  selectedAnswer,
}: {
  quiz: Quiz
  onSelectAnswer: (choice: string) => void
  selectedAnswer: string | null
}) {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <h2 className="text-xl font-semibold leading-tight">{quiz.question}</h2>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-3">
          {quiz.choices.map((choice, index) => (
            <button
              key={choice}
              onClick={() => onSelectAnswer(choice)}
              className={cn(
                "flex items-center p-4 text-left rounded-lg border transition-colors",
                "hover:bg-muted focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                selectedAnswer === choice ? "bg-primary/10 border-primary" : "bg-card border-border",
              )}
              aria-pressed={selectedAnswer === choice}
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-muted mr-3 shrink-0">
                <span className="text-sm font-medium">{index + 1}</span>
              </div>
              <span className="font-medium">{choice}</span>
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

