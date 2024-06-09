import Link from 'next/link'

interface HeaderItemProps {
  content: string
}

export function HeaderItem({ content }: HeaderItemProps) {
  return (
    <Link
      href=""
      className="cursor-pointer py-s text-p5 text-black dark:text-white inline-block relative after:h-[1.5px] after:w-0 after:absolute after:block after:mt-1 after:bg-primary-400 after:transition-all after:duration-300 hover:after:w-full"
    >
      {content}
    </Link>
  )
}
