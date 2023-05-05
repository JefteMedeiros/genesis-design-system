import { ReactNode } from "react"

import { Typography } from "../Typography/Typography"

import { useCardContext } from "./CardContext"

interface CardTitleProps {
  children: ReactNode
  className?: string
}

export function CardTitle({ children, className }: CardTitleProps) {
  const { inCard } = useCardContext()

  if (!inCard) {
    throw new Error("Card.* must be used within a CardProvider")
  }

  return (
    <Typography
      className={`text-brand-primary ${className}`}
      as="h2"
      variant="xs"
      type="heading"
    >
      {children}
    </Typography>
  )
}
