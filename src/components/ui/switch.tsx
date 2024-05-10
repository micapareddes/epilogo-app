'use client'

import * as React from 'react'
import * as SwitchPrimitives from '@radix-ui/react-switch'
import { cn } from '@/utils/cs'

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      'group peer inline-flex h-7 w-14 shrink-0 cursor-pointer items-center rounded-full border shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-gray-300 data-[state=checked]:hover:border-black data-[state=unchecked]:border-gray-700 data-[state=unchecked]:hover:border-white bg-transparent',
      className,
    )}
    ref={ref}
    {...props}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        'pointer-events-none block h-4 w-4 rounded-full data-[state=checked]:bg-gray-500 group-hover:data-[state=unchecked]:bg-white data-[state=unchecked]:bg-gray-700 group-hover:data-[state=checked]:bg-black shadow-lg ring-0 transition-all data-[state=checked]:translate-x-8 data-[state=unchecked]:translate-x-1',
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
