import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { Translate } from '@phosphor-icons/react'
import { useState } from 'react'
import { LanguageIsoIcon } from './language-iso-icon'
import { ButtonIcon } from '../button/button-icon'

const languages = [
  {
    id: 'pt',
    name: 'Português',
    flag: '🇧🇷',
    iso: 'PT',
  },
  {
    id: 'es',
    name: 'Español',
    flag: '🇦🇷',
    iso: 'ES',
  },
  {
    id: 'en',
    name: 'Engilsh',
    flag: '🇺🇸',
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
            <ButtonIcon variant="icon-outline" icon={Translate} />
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
              <span className="text-p1 leading-4">{language.flag}</span>
              {language.name}
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
