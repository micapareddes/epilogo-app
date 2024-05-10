'use client'

import { HeaderItem } from './header-item'
import { LanguageSelector } from './language-selector'
import { LogoSvg } from './logo-svg'
import { Search } from './search'
import { ThemeToggle } from './theme-toggle'

const menuItems = ['Explorar', 'Minhas Listas', 'Perfil']

export function Header() {
  return (
    <header className="flex items-center justify-between w-screen px-xl py-l border-b border-gray-100 dark:border-gray-800">
      <div className="flex items-center">
        <LogoSvg className="mr-m" />

        {menuItems.map((item) => {
          return <HeaderItem content={item} key={item} />
        })}
      </div>
      <div className="flex items-center">
        <Search />
        <LanguageSelector />
        <ThemeToggle />
      </div>
    </header>
  )
}
