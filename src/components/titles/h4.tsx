import { cn } from '@/utils/cn'
import { ComponentProps } from 'react'

interface H4Props extends ComponentProps<'h4'> {}

export function H4({ className, ...props }: H4Props) {
  return (
    <h4
      className={cn('font-bold text-sm-h4 md:text-md-h4 lg:text-h4', className)}
      {...props}
    />
  )
}
