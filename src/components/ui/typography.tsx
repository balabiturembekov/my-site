import * as React from "react"
import { cn } from "@/lib/utils"

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
}

export function TypographyH1({ className, children, ...props }: TypographyProps) {
  return (
    <h1
      className={cn(
        "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl",
        className
      )}
      {...props}
    >
      {children}
    </h1>
  )
}

export function TypographyP({ className, children, ...props }: TypographyProps) {
  return (
    <p
      className={cn("leading-7 [&:not(:first-child)]:mt-6", className)}
      {...props}
    >
      {children}
    </p>
  )
} 