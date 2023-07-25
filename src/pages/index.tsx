import { Inter } from 'next/font/google';
import Image from 'next/image';
import { useEffect } from 'react';
import { Gradient } from '../components/MeshGradient/MeshGradient';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    useEffect(() => {
        const gradient = new Gradient();

        // @ts-ignore
        gradient.initGradient('#gradient-canvas');
    }, []);

    return (
        <>
            <canvas id="gradient-canvas" className="fixed top-0 right-0 bottom-0 left-0 w-full h-full" />
            <main
                className={`relative flex flex-col grow justify-between items-center p-14 lg:p-24 h-full z-10 ${inter.className}`}
            >
                <Image className="" alt="Logotype" src="/logo.svg" width={140} height={100}></Image>
                <h1 className="text-4xl lg:text-6xl max-w-3xl text-center leading-normal lg:leading-normal">
                    At the intersection of design & technology
                </h1>
                <span className="text-md">Coming in 2023</span>
            </main>
        </>
    );
}
