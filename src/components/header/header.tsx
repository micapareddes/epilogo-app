'use client'

import { HeaderItem } from './header-item'
import { LanguageSelector } from '../language-selector/language-selector'
import { LogoSvg } from '../logo-svg'
import { Search } from '../search'
import { ThemeToggle } from '../theme-toggle'
import { HamburguerMenu } from './hamburguer-menu'

const menuItems = ['Explorar', 'Minhas Listas', 'Perfil']

export function Header() {
  return (
    <header className="absolute flex items-center justify-between w-screen px-m md:px-xl py-l border-b border-gray-100 dark:border-gray-800 backdrop-blur-sm	">
      <div className="flex items-center">
        <LogoSvg className="mr-2 cursor-pointer" />
        <div className="hidden md:flex ml-m gap-5">
          {menuItems.map((item) => {
            return <HeaderItem content={item} key={item} />
          })}
        </div>
      </div>
      <div className="flex items-center gap-s">
        <Search />
        <div className="hidden md:flex items-center gap-s">
          <LanguageSelector />
          <ThemeToggle />
        </div>
      </div>
      <HamburguerMenu menuItems={menuItems} />
    </header>
  )
}
