'use client'

import { HeaderItem } from './header-item'
import { LanguageSelector } from '../language-selector/language-selector'
import { LogoSvg } from '../logo-svg'
import { Search } from '../search'
import { ThemeToggle } from '../theme-toggle'
import { List } from '@phosphor-icons/react'
import { ButtonIcon } from '../button/button-icon'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './sheet'
import { BigLogo } from '../big-logo'
import { DropdownMenuSeparator } from '../ui/dropdown-menu'

const menuItems = ['Explorar', 'Minhas Listas', 'Perfil']

export function Header() {
  return (
    <header className="absolute flex items-center justify-between w-screen px-m md:px-xl py-l border-b border-gray-100 dark:border-gray-800">
      <div className="flex items-center">
        <LogoSvg className="" />
        <div className="hidden md:block ml-m">
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
      <Sheet>
        <SheetTrigger asChild>
          <ButtonIcon
            icon={List}
            variant="icon-primary"
            className="block md:hidden"
          />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetDescription className="flex flex-col items-start">
              {menuItems.map((item) => {
                return <HeaderItem content={item} key={item} />
              })}
            </SheetDescription>
            <DropdownMenuSeparator />
            <SheetFooter className="flex-row gap-m items-center justify-center p-l">
              <LanguageSelector />
              <ThemeToggle />
            </SheetFooter>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </header>
  )
}
