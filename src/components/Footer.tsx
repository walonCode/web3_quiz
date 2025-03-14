import Link from "next/link"
import { Github, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="my-2 font-bold">
        <div className="text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Web3Quiz. All rights reserved.</p>
        </div>
    </footer>
  )
}

