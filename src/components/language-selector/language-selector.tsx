import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import Brazil from '../../../public/flags/brazil.svg'
import Arg from '../../../public/flags/arg.svg'
import Usa from '../../../public/flags/usa.svg'

import { Translate } from '@phosphor-icons/react'
import Image from 'next/image'
import { useState } from 'react'
import { LanguageIsoIcon } from './language-iso-icon'
import { ButtonIcon } from '../button/button-icon'

const languages = [
  {
    id: 'pt',
    name: 'Português',
    flag: Brazil,
    iso: 'PT',
  },
  {
    id: 'es',
    name: 'Español',
    flag: Arg,
    iso: 'ES',
  },
  {
    id: 'en',
    name: 'Engilsh',
    flag: Usa,
    iso: 'EN',
  },
]

export function LanguageSelector() {
  const [language, setLanguage] = useState<string | null>(null)

  function handleSelectLanguage(language: string) {
    setLanguage(language)
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="group">
          {language ? (
            <LanguageIsoIcon content={language} />
          ) : (
            <ButtonIcon icon={Translate} />
          )}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {languages.map((language) => {
          return (
            <DropdownMenuItem
              key={language.id}
              className="gap-xs"
              onClick={() => handleSelectLanguage(language.iso)}
            >
              <Image alt={language.flag} src={language.flag} />
              {language.name}
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
