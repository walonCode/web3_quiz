"use client"
import { createContext,useState } from "react";

const scoreContext = createContext<Provider | undefined>(undefined)

interface Provider {
    score:number,
    setScore:React.Dispatch<React.SetStateAction<number>>
}

export const ScoreProvider = ({children}:{children:React.ReactNode}) => {
    const [score, setScore] = useState<number>(0)
    return (
        <scoreContext.Provider value={{
            score,
            setScore
        }}>
            {children}
        </scoreContext.Provider>
    )
}

export default scoreContext