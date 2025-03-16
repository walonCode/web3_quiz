"use client";

import Result from "@/components/Result";
import { useContext } from "react";
import scoreContext from "@/context/scoreContext";
import { useRouter } from "next/navigation";

export default function Page() {
  const {score, setScore} = useContext(scoreContext) || {}
  const router = useRouter()
  const handleRetry = ():void => {
    setScore!(0)
    router.push(`/quiz`)

  }
 
  return (
    <div>
      <Result score={score} handleRetry={handleRetry} />
    </div>
  );
}
