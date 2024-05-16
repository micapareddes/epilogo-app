import Link from 'next/link'

interface HeaderItemProps {
  content: string
}

export function HeaderItem({ content }: HeaderItemProps) {
  return (
    <Link
      href=""
      className="mr-xs rounded-s text-p5 text-black dark:text-white hover:text-white dark:hover:text-black p-s hover:bg-gray-700 dark:hover:bg-gray-100 cursor-pointer"
    >
      {content}
    </Link>
  )
}
