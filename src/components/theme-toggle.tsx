import { useTheme } from 'next-themes'
import { Switch } from './ui/switch'

export function ThemeToggle() {
  const { setTheme } = useTheme()
  const theme = typeof window !== 'undefined' && localStorage.getItem('theme')

  function toogle() {
    if (theme === 'dark') {
      return setTheme('light')
    }
    setTheme('dark')
  }

  return <Switch checked={theme === 'light'} onCheckedChange={toogle} />
}
