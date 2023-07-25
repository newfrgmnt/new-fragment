import { Inter } from 'next/font/google';
import Image from 'next/image';
import { useEffect } from 'react';
import { Gradient } from '../components/MeshGradient/MeshGradient';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    useEffect(() => {
        const gradient = new Gradient();

        // @ts-ignore
        gradient.initGradient('#gradient-canvas');
    }, []);

    return (
        <>
            <Head>
                <title>New Fragment</title>
                <meta property="og:title" content="New Fragment" />
                <meta property="og:description" content="A garden of creative endeavours within the digital domain" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/opengraph-image.png" />
            </Head>
            <canvas id="gradient-canvas" className="fixed top-0 right-0 bottom-0 left-0 w-full h-full" />
            <main
                className={`relative flex flex-col grow justify-between items-center p-14 lg:p-24 h-full z-10 ${inter.className}`}
            >
                <Image className="" alt="Logotype" src="/logo.svg" width={140} height={100}></Image>
                <h1 className="text-4xl lg:text-6xl max-w-3xl text-center leading-normal lg:leading-normal">
                    A garden of creative endeavours within the digital domain.
                </h1>
                <span className="text-md">Coming in 2023</span>
            </main>
        </>
    );
}
