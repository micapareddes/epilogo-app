import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from './button'

import Brazil from '../../public/flags/brazil.svg'
import Arg from '../../public/flags/arg.svg'
import Usa from '../../public/flags/usa.svg'

import { Translate } from '@phosphor-icons/react'
import Image from 'next/image'

const languages = [
  {
    name: 'Português',
    flag: Brazil,
  },
  {
    name: 'Español',
    flag: Arg,
  },
  {
    name: 'Engilsh',
    flag: Usa,
  },
]

export function LanguageSelector() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant={'icon-outline'} size={'small'}>
          <Translate
            size={14}
            className="group-hover:fill-white dark:group-hover:fill-black fill-gray-400 dark:fill-gray-500"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {languages.map((language) => {
          return (
            <DropdownMenuItem key={language.name}>
              <Image
                alt={language.flag}
                src={language.flag}
                className="pr-xs"
              />
              {language.name}
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
