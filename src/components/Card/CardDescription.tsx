import { ReactNode } from "react"

import { useCardContext } from "./CardContext"

interface CardDescriptionProps {
  children: ReactNode
  className?: string
}

export function CardDescription({ children, className }: CardDescriptionProps) {
  const { inCard } = useCardContext()

  if (!inCard) {
    throw new Error("Card.* must be used within a CardProvider")
  }

  return <div className={`flex flex-col gap-4 ${className}`}>{children}</div>
}
