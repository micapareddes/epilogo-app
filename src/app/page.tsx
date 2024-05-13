import { Button } from '@/components/button/button'
import { H1 } from '@/components/titles/h1'

export default function Home() {
  return (
    <main className="h-svh flex flex-col items-center justify-center">
      <H1 className="flex text-center  mb-xs">
        Mantenha suas
        <br />
        leituras organizadas!
      </H1>
      <p className="max-w-lg text-p2 text-center text-gray-600 dark:text-gray-200 mb-l ">
        Crie listas, marque os dias em que leu, explore novos livros e acompanhe
        o que seus amigos estão lendo.
      </p>
      <div className="flex gap-m">
        <Button>Criar conta</Button>
        <Button variant={'outline'}>Acessar</Button>
      </div>
    </main>
  )
}
