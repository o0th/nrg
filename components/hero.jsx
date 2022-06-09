import Image from 'next/image'

export default function hero({ navHeight }) {
  return (
    <div className='h-screen w-screen'>
      <div className='h-full w-full absolute inset-0 bg-white bg-opacity-80'></div>
      <div className={`h-full w-full grid content-center justify-center px-20 bg-[url('/IMG_4623.jpg')] bg-center bg-cover -mt-${navHeight}`}>
        <Image alt="logo" src="/rigel.png" width={490} height={153} />
      </div>
    </div>
  )
}
