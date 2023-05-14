import { ReactNode } from "react"

import { bodyVariants } from "./bodyVariants"
import { headingVariants } from "./headingVariants"

type HeadingVariants = keyof typeof headingVariants
type BodyVariants = keyof typeof bodyVariants

interface TypographyProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div"
  variant: HeadingVariants | BodyVariants
  children: ReactNode
  className?: string
  type?: "heading" | "body"
}

export function Typography({
  as = "p",
  children,
  className,
  type = "body",
  variant,
}: TypographyProps) {
  const Component = as

  const variantClass =
    type === "heading"
      ? headingVariants[variant as HeadingVariants]
      : bodyVariants[variant as BodyVariants]

  return (
    <Component
      className={`font-nunito ${className && className} ${variantClass}`}
    >
      {children}
    </Component>
  )
}
