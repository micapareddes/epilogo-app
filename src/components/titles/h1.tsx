import { cn } from '@/utils/cs'
import { ComponentProps } from 'react'

interface H1Props extends ComponentProps<'h1'> {}
export function H1({ className, ...props }: H1Props) {
  return (
    <h1
      className={cn(
        ' font-bold text-h3 md:text-md-h1 lg:text-h1 tracking-tight',
        className,
      )}
      {...props}
    />
  )
}
