import { useTheme } from 'next-themes'
import { Switch } from './switch'

export function ThemeToggle() {
  const { setTheme } = useTheme()
  const theme = localStorage.getItem('theme')

  function toogle() {
    if (theme === 'dark') {
      return setTheme('light')
    }
    setTheme('dark')
  }

  return <Switch checked={theme === 'light'} onCheckedChange={toogle} />
}
