import { ReactNode } from "react"

import { Typography } from "../Typography"

import { useCardContext } from "./CardContext"

interface CardDescriptionProps {
  children: ReactNode
  className?: string
}

export function CardSubtitle({ children, className }: CardDescriptionProps) {
  const { inCard } = useCardContext()

  if (!inCard) {
    throw new Error("Card.* must be used within a CardProvider")
  }

  return (
    <Typography
      className={`text-neutral-600 font-bold ${className}`}
      variant="md"
    >
      {children}
    </Typography>
  )
}
