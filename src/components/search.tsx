import { Command, MagnifyingGlass } from '@phosphor-icons/react'
import { ComponentProps } from 'react'

interface SearchProps extends ComponentProps<'button'> {}

export function Search({ ...props }: SearchProps) {
  return (
    <button
      className="group flex items-center px-s py-xxs border border-gray-200 rounded-s hover:bg-gray-100 hover:border-gray-100 dark:border-gray-700 dark:hover:border-gray-700 dark:hover:bg-gray-700"
      {...props}
    >
      <div className="flex items-center">
        <MagnifyingGlass
          size={17}
          className="fill-gray-400 group-hover:fill-gray-700 dark:group-hover:fill-white"
        />
        <p className="text-p5 text-gray-400 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-white ml-xs">
          Pesquise aqui
        </p>
      </div>
      <div className="hidden md:flex items-center ml-m px-xs py-xxs bg-gray-100 dark:bg-gray-700 rounded-xxs">
        <Command
          size={12}
          className="dark:fill-gray-500 fill-gray-400 group-hover:fill-gray-700 dark:group-hover:fill-white"
        />
        <p className="text-p6 text-gray-400 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-white ml-xxs uppercase">
          k
        </p>
      </div>
    </button>
  )
}
