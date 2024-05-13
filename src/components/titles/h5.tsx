import { cn } from '@/utils/cs'
import { ComponentProps } from 'react'

interface H5Props extends ComponentProps<'h5'> {}

export function H5({ className, ...props }: H5Props) {
  return (
    <h5
      className={cn('font-bold text-sm-h5 md:text-h5', className)}
      {...props}
    />
  )
}
