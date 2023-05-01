import clsx from "clsx";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <main
            className={`flex min-h-screen max-w-[2000px] mx-auto flex-col ${inter.className}`}
        >
            <div className="relative overflow-hidden lg:h-screen z-[2]">
                <Hero />
                <Image
                    alt="image"
                    priority
                    src={"./dashboard.svg"}
                    width={2000}
                    height={1400}
                    className={clsx(
                        "-z-[1] mt-40 [transform:rotate3d(0.5,0.5,0,20deg)] shadow-2xl shadow-purple-400/50 rounded-lg",
                        "absolute top-80 left-[50%] xl:top-20 min-[1600px]:left-[40%] w-full max-w-6xl max-lg:hidden"
                    )}
                />
            </div>
            <div>
                <h2>A</h2>
            </div>
        </main>
    );
}

function Hero() {
    return (
        <div className="flex flex-col p-24 xl:py-48">
            <h1 className="text-5xl !leading-snug text-transparent bg-clip-text bg-gradient-to-b from-white to-muted-foreground font-bold lg:text-7xl">
                Not to Deploy <br />
                Nothing to worry
            </h1>
            <p className="text-lg mt-4 text-muted-foreground max-w-xl">
                Built for Developers, No Deploy is the Most Powerful and
                Scalable Hosting platform that supports Nothing
            </p>
            <div className="mt-8 flex flex-row gap-3">
                <button className="px-6 py-2 rounded-md bg-primary text-lg text-primary-foreground font-semibold">
                    Deploy Now
                </button>
                <button className="px-6 py-2 rounded-md bg-black border-2 border-purple-100 shadow-xl shadow-purple-400/50 text-lg text-foreground font-semibold">
                    {`Learn More ->`}
                </button>
            </div>
        </div>
    );
}
