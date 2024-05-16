import { cn } from '@/utils/cn'
import { ComponentProps } from 'react'

interface H6Props extends ComponentProps<'h6'> {}

export function H6({ className, ...props }: H6Props) {
  return (
    <h6
      className={cn('font-bold text-sm-h6 md:text-h6', className)}
      {...props}
    />
  )
}
