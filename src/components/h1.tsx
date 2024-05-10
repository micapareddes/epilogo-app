import { cn } from '@/utils/cs'
import { ComponentProps } from 'react'

interface H1Props extends ComponentProps<'h1'> {
  title: string
}
export function H1({ title, className, ...props }: H1Props) {
  return (
    <h1 className={cn('text-h1 font-bold', className)} {...props}>
      {title}
    </h1>
  )
}
