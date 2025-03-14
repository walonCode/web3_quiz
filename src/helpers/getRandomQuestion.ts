import { questions } from "@/data/questions";

export const getRandomQuestion = (question: typeof questions) => {
    const shuffled = [...question].sort(() => 0.5 - Math.random());
    return shuffled.slice(0,15)
}