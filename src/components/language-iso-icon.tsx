import { ComponentProps } from 'react'
import { Button } from './button/button'

interface LanguageIconProps extends ComponentProps<'button'> {
  content: string
}

export function LanguageIsoIcon({ content, ...props }: LanguageIconProps) {
  return (
    <Button variant={'icon-outline'} size={'small'} {...props}>
      <span className="text-p6 text-gray-400 dark:text-gray-500 group-hover:text-white dark:group-hover:text-black">
        {content}
      </span>
    </Button>
  )
}
