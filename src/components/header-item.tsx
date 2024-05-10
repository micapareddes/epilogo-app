interface HeaderItemProps {
  content: string
}

export function HeaderItem({ content }: HeaderItemProps) {
  return (
    <p
      className="mr-xs rounded-s text-p5 text-black dark:text-white p-s hover:bg-gray-100 
   dark:hover:bg-gray-700 cursor-pointer"
    >
      {content}
    </p>
  )
}
