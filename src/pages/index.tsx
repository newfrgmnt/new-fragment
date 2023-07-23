import { Inter } from 'next/font/google'
import Image from 'next/image';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`relative flex min-h-screen flex-col justify-center items-center ${inter.className}`}
    >
      <Image alt="Logotype" src="/logo.svg" width={200} height={100}></Image>
      <span className='absolute bottom-16'>Coming in 2023</span>
    </main>
  )
}
