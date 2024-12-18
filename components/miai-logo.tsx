import Image from "next/image"

interface Props {
  className?: string
}

export function MiaiLogo({ className }: Props) {
  return (
    <Image
      src="/MIAI_logo.png"
      alt="MIAI Law"
      width={100}
      height={100}
      className={`${className} object-contain`}
      priority
    />
  )
}