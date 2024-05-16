import { cn } from '@/utils/cn'
import { ComponentProps } from 'react'

interface H2Props extends ComponentProps<'h2'> {}

export function H2({ className, ...props }: H2Props) {
  return (
    <h2
      className={cn('font-bold text-sm-h2 md:text-md-h2 lg:text-h2', className)}
      {...props}
    />
  )
}
