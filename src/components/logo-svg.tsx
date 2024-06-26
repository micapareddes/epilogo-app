import { cn } from '@/utils/cn'
import { ComponentProps } from 'react'

export interface LogoSvgProps extends ComponentProps<'svg'> {}

export function LogoSvg({ className, ...props }: LogoSvgProps) {
  return (
    <svg
      width="30"
      height="20"
      viewBox="0 0 30 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        'hover:fill-primary-400 dark:hover:fill-primary-400 fill-black dark:fill-white transition-all duration-200',
        className,
      )}
      {...props}
    >
      <path d="M11.9108 0.662292L15.3006 10.223H15.4345L18.8243 0.662292H20.2739L16.0812 12.0198H14.6539L10.4612 0.662292H11.9108Z" />
      <path d="M22.1506 1.97552L18.3922 11.399L18.4931 11.4864L27.3631 6.49287L28.456 7.44006L17.794 13.2637L16.7179 12.3311L21.0576 1.02834L22.1506 1.97552Z" />
      <path d="M8.27286 1.97552L12.0312 11.399L11.9304 11.4864L3.06035 6.49287L1.96741 7.44006L12.6294 13.2637L13.7055 12.3311L9.36581 1.02834L8.27286 1.97552Z" />
      <path d="M1.26806 9.77328L10.2549 14.5557L10.2346 14.6873H0V15.5956H11.922L12.1385 14.1923L1.48785 8.34807L1.26806 9.77328Z" />
      <path d="M28.7319 9.77328L19.7451 14.5557L19.7654 14.6873L30 14.5557V15.5956H18.078L17.8615 14.1923L28.5121 8.34807L28.7319 9.77328Z" />
      <path d="M19.091 15.5877C19.091 14.5931 18.66 13.6393 17.8928 12.9361C17.1256 12.2328 16.0851 11.8377 15.0001 11.8377C13.9151 11.8377 12.8746 12.2328 12.1074 12.9361C11.3402 13.6393 10.9092 14.5931 10.9092 15.5877L15.0001 15.5877H19.091Z" />
    </svg>
  )
}
