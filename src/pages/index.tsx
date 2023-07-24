import { Inter } from 'next/font/google'
import Image from 'next/image';
import { useEffect } from 'react';
import {Gradient} from '../components/MeshGradient/MeshGradient';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
   useEffect(() => {
        const gradient = new Gradient();

        // @ts-ignore
        gradient.initGradient('#gradient-canvas');
    }, []);

  return (
    <main
      className={`flex flex-col h-screen ${inter.className}`}
    >
      <canvas id='gradient-canvas' className='fixed top-0 right-0 bottom-0 left-0 w-full h-full' />
      <div className='relative flex flex-col justify-center items-center p-24 min-h-screen z-10'>
        <Image className='absolute top-12 lg:top-24' alt="Logotype" src="/logo.svg" width={140} height={100}></Image>
        <h1 className='text-5xl lg:text-6xl max-w-3xl text-center leading-normal lg:leading-normal'>At the intersection of design & technology</h1>
        <span className='absolute bottom-12 lg:bottom-24 text-xl'>Coming in 2023</span>
      </div>
    </main>
  )
}
