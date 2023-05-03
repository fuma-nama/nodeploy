import clsx from "clsx";
import { Inter } from "next/font/google";
import Image from "next/image";
import { cva } from "class-variance-authority";
import {
    BrainCircuitIcon,
    CheckIcon,
    FacebookIcon,
    FigmaIcon,
    GithubIcon,
    TwitterIcon,
} from "lucide-react";
import { inputStyles } from "@/components/input";
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
            <div className="relative flex flex-col justify-center overflow-hidden z-[2] p-8 sm:p-14 xl:p-24 min-h-[75vh]">
                <Hero />
                <Image
                    alt="image"
                    priority
                    src={"./dashboard.svg"}
                    width={2000}
                    height={1400}
                    className={clsx(
                        "-z-[1] mt-40 [transform:rotate3d(0.5,0.5,0,20deg)] shadow-2xl shadow-purple-400/50 rounded-lg",
                        "absolute top-80 left-[50%] xl:top-20 min-[1600px]:left-[40%] w-full max-w-6xl max-sm:hidden"
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
            <Develop />
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

function Develop() {
    return (
        <>
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
                <div className="w-full max-w-screen-lg grid grid-cols-1 md:grid-cols-2 mt-16 text-start gap-10">
                    <div className="flex flex-col relative h-fit">
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
                    <div className="flex flex-col gap-3 max-md:text-center max-md:items-center">
                        <h3 className="text-xl font-semibold">
                            100% Faster by dropping your jobs
                        </h3>
                        <p className="text-muted-foreground max-w-xl">
                            Free developers from time-consuming jobs, your job
                            is no longer exists so that you can spend your time
                            on something meaningful
                        </p>
                        <h3 className="text-xl font-semibold mt-6">
                            Not Move and Break Nothing
                        </h3>
                        <p className="text-muted-foreground max-w-xl">
                            Codebase doesn't exist, no more breaking changes
                            will be made to your codebase
                        </p>
                    </div>
                </div>
            </div>
            <div className="p-8 sm:px-14 xl:px-24 flex flex-col items-center text-center gap-3 bg-gradient-to-b from-transparent to-purple-400/40 min-h-[300px] mt-16">
                <h3 className="text-xl md:text-2xl font-bold">No-Deploy CLI</h3>
                <p className="text-muted-foreground drop-shadow-xl">
                    Connect to your project, database and integrated services,
                    from any terminal
                </p>
                <input
                    readOnly
                    className={inputStyles({
                        className: "mt-3 w-full md:max-w-4xl",
                    })}
                    value="npx nodeploy connect"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-4xl mt-3 gap-3">
                    <div className="rounded-lg bg-background text-foreground p-3">
                        <h3 className="font-semibold">
                            Integrate with Nothing
                        </h3>
                        <div className="p-2 text-start w-full mt-3 font-mono rounded-lg text-sm">
                            <span>{`> nodeploy integrate`}</span>
                            <br />
                            <span className="text-green-400">
                                <CheckIcon className="inline mr-1 w-3 h-3" />
                                {`Integrated with nothing`}
                            </span>
                        </div>
                    </div>
                    <div className="rounded-lg bg-background text-foreground p-3">
                        <h3 className="font-semibold">Database Migration</h3>
                        <div className="p-2 text-start w-full mt-3 font-mono rounded-lg text-sm">
                            <span>{`> nodeploy db push`}</span>
                            <br />
                            <span className="text-green-400">
                                <CheckIcon className="inline mr-1 w-3 h-3" />
                                {`Sucessfully did nothing to database`}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
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
