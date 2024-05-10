import { cn } from '@/utils/cs'
import { ComponentProps } from 'react'

interface H2Props extends ComponentProps<'h2'> {
  title: string
}
export function H2({ title, className, ...props }: H2Props) {
  return (
    <h2 className={cn('text-h2 font-bold', className)} {...props}>
      {title}
    </h2>
  )
}
