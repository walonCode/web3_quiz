"use client";

import Result from "@/components/Result";
import { useContext } from "react";
import scoreContext from "@/context/scoreContext";

export default function Page() {
  const {score} = useContext(scoreContext) || {}
 
  return (
    <div>
      <Result score={score} />
    </div>
  );
}
