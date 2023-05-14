import { ReactNode } from "react"

import { Typography } from "../Typography"

import { useCardContext } from "./CardContext"

interface CardContentProps {
  children: ReactNode
  className?: string
}

export function CardContent({ children, className }: CardContentProps) {
  const { inCard } = useCardContext()

  if (!inCard) {
    throw new Error("Card.* must be used within a CardProvider")
  }

  return (
    <Typography
      as="span"
      className={`text-neutral-600 pt-2 ${className}`}
      variant="sm"
    >
      {children}
    </Typography>
  )
}
