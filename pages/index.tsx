import clsx from "clsx";
import { Inter } from "next/font/google";
import Image from "next/image";
import { cva } from "class-variance-authority";
import {
    BrainCircuitIcon,
    FacebookIcon,
    FigmaIcon,
    GithubIcon,
    TwitterIcon,
} from "lucide-react";
const inter = Inter({ subsets: ["latin"] });

const step = cva([
    "w-10 h-10 text-lg rounded-full flex flex-col items-center justify-center bg-gradient-to-br from-purple-300 to-purple-700 font-semibold",
    "md:w-12 md:h-12 md:text-xl",
]);

export default function Home() {
    return (
        <main
            className={`flex max-w-[2000px] mx-auto flex-col ${inter.className}`}
        >
            <div className="relative overflow-hidden z-[2] p-8 sm:p-14 md:pb-48 xl:px-24 xl:py-48">
                <Hero />
                <Image
                    alt="image"
                    priority
                    src={"./dashboard.svg"}
                    width={2000}
                    height={1400}
                    className={clsx(
                        "-z-[1] mt-40 [transform:rotate3d(0.5,0.5,0,20deg)] shadow-2xl shadow-purple-400/50 rounded-lg",
                        "absolute top-40 left-[50%] xl:top-20 min-[1600px]:left-[40%] w-full max-w-6xl max-md:hidden"
                    )}
                />
            </div>
            <div className="p-8 sm:p-14 xl:p-24 flex flex-col">
                <div className="rounded-lg p-4 flex flex-col items-center text-center gap-8">
                    <h3 className="md:text-lg text-purple-400 font-mono text-sm">
                        Not Trusted by Million of Developers
                    </h3>
                    <div className="flex flex-row gap-3 justify-between w-full max-w-2xl">
                        <GithubIcon className="w-8 h-8" />
                        <FacebookIcon className="w-8 h-8" />
                        <FigmaIcon className="w-8 h-8" />
                        <TwitterIcon className="w-8 h-8" />
                    </div>
                </div>
            </div>
            <div className="p-8 sm:px-14 xl:px-24 text-center flex flex-col items-center gap-3">
                <div className="flex flex-col items-center">
                    <span className="w-1 h-[100px] bg-gradient-to-b from-purple-200/0 to-purple-400" />
                    <p className={step()}>1</p>
                </div>
                <h2 className="text-purple-400 text-3xl md:text-4xl font-bold">
                    Develop
                </h2>
                <h2 className="text-4xl md:text-5xl text-foreground font-bold text-center">
                    <span className="whitespace-nowrap">Build Everything</span>{" "}
                    <span className="whitespace-nowrap">with Nothing</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-xl">
                    Stop working on annoying things, unnecessury things that
                    slow you down, just imagine how your app works in your brain
                </p>
                <div className="w-full max-w-screen-lg grid grid-cols-1 md:grid-cols-2 mt-8 text-start gap-10">
                    <div className="flex flex-col relative">
                        <div className="rounded-xl border-2 border-border shadow-lg shadow-purple-800/50 flex flex-col w-full">
                            <div className="border-b-2 border-border p-4 font-semibold">
                                Terminal
                            </div>
                            <code className="p-4 pb-20">
                                sudo rm -rf /*{" "}
                                <span className="animate-pulse">|</span>
                            </code>
                        </div>
                        <BrainCircuitIcon className="absolute -right-5 -bottom-5 rounded-full shadow-xl shadow-purple-400/50 p-2 w-20 h-20  text-purple-400" />
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className="text-2xl font-semibold">
                            100% Faster by dropping your jobs
                        </h3>
                        <p className="text-muted-foreground">
                            Free developers from time-consuming jobs, your job
                            is no longer exists so that you can spend your time
                            on something meaningful
                        </p>
                    </div>
                </div>
            </div>
            <h2 className="text-2xl md:text-5xl text-foreground font-bold text-center mt-80">
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-purple-500 to-purple-200">
                    First-Class
                </span>
                <br />
                Developer Experience
            </h2>

            <Image alt="image" src={"./train.svg"} width={342} height={155} />
        </main>
    );
}

function Hero() {
    return (
        <div className="flex flex-col">
            <h1 className="text-4xl md:text-6xl lg:text-7xl !leading-snug text-transparent bg-clip-text bg-gradient-to-b from-white to-muted-foreground font-extrabold">
                Not to Deploy <br />
                Nothing to worry
            </h1>
            <p className="text-lg mt-4 text-muted-foreground max-w-xl">
                Built for Developers, No Deploy is the Most Powerful and
                Scalable Hosting platform that supports Nothing
            </p>
            <div className="mt-8 flex flex-row gap-3">
                <button className="px-8 py-2 rounded-md bg-primary text-sm md:text-lg text-primary-foreground font-semibold">
                    Try Now
                </button>
                <button className="px-6 py-2 rounded-md bg-black border-2 border-purple-100 shadow-xl shadow-purple-400/50 text-sm md:text-lg text-foreground font-semibold">
                    {`Learn More ->`}
                </button>
            </div>
        </div>
    );
}
