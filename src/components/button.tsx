import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/utils/cs'

const buttonVariants = cva(
  'py-xs rounded-xs flex items-center justify-center disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-black dark:bg-white text-white dark:text-black hover:bg-primary-400 dark:hover:bg-primary-600 transition-colors',
        outline:
          'border border-gray-500 dark:border-gray-600 text-gray-800 dark:text-white hover:border-primary-400 hover:text-primary-400 transition-colors',
        'icon-primary':
          'group dark:bg-gray-700 dark:hover:bg-white shadow-around dark:shadow-contrast',
        'icon-outline':
          'group border border-gray-200 dark:border-gray-700 hover:bg-gray-800 hover:border-gray-800 dark:hover:bg-white',
      },
      size: {
        default: 'px-m py-xs',
        small: 'p-xs',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
