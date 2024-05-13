import { ButtonIcon } from '../button/button-icon'
import { HeaderItem } from './header-item'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './sheet'
import { LanguageSelector } from '../language-selector/language-selector'
import { ThemeToggle } from '../theme-toggle'
import { List } from '@phosphor-icons/react'
import { BigLogo } from '../big-logo'

interface HamburguerMenuProps {
  menuItems: string[]
}

export function HamburguerMenu({ menuItems }: HamburguerMenuProps) {
  return (
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
          <SheetTitle>
            <BigLogo className="h-6" />
          </SheetTitle>
          <SheetDescription className="flex flex-col items-start">
            {menuItems.map((item) => {
              return <HeaderItem content={item} key={item} />
            })}
          </SheetDescription>
          <SheetFooter className="flex-row gap-m items-center justify-center p-l">
            <LanguageSelector />
            <ThemeToggle />
          </SheetFooter>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  )
}
