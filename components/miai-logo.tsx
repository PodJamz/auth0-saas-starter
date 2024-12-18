import Image from "next/image"

interface Props {
  className?: string
}

export function MiaiLogo({ className }: Props) {
  return (
    <Image
      src="/MIAI_logo.png"
      alt="MIAI Law"
      width={150}
      height={40}
      className={className}
      priority
    />
  )
}