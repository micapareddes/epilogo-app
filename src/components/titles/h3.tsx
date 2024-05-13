import { cn } from '@/utils/cs'
import { ComponentProps } from 'react'

interface H3Props extends ComponentProps<'h3'> {}

export function H3({ className, ...props }: H3Props) {
  return (
    <h3
      className={cn('font-bold text-sm-h3 md:text-md-h3 lg:text-h3', className)}
      {...props}
    />
  )
}
