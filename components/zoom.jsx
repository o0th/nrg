import Image from 'next/image'

export default function zoom({ image, alt }) {
  return (
    <div className="w-full h-full">
      <Image src={image} alt={alt} width={720} height={900} className="object-cover hover:scale-105 ease-in-out duration-1000" />
    </div>
  )
}
