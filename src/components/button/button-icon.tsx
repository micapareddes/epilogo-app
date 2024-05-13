import { ComponentProps, ElementType } from 'react'
import { Button } from './button'

interface ButtonIconProps extends ComponentProps<'button'> {
  icon: ElementType
  variant: 'icon-outline' | 'icon-primary'
}

export function ButtonIcon({
  variant = 'icon-outline',
  icon,
  ...props
}: ButtonIconProps) {
  const Component = icon
  return (
    <Button variant={variant} size={'small'} {...props}>
      <Component
        size={14}
        className="group-hover:fill-white dark:group-hover:fill-black fill-gray-400 dark:fill-gray-500 group-data-[state=open]:fill-black"
      />
    </Button>
  )
}
