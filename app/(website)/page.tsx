import clsx from "clsx";
import Image from "next/image";
import { cva } from "class-variance-authority";
import {
    BrainCircuitIcon,
    BrainIcon,
    CheckIcon,
    CodeIcon,
    DatabaseIcon,
    FacebookIcon,
    FigmaIcon,
    GithubIcon,
    LayoutDashboardIcon,
    MailWarningIcon,
    MessageSquareIcon,
    ServerIcon,
    TwitterIcon,
    UserXIcon,
} from "lucide-react";
import { inputStyles } from "@/components/ui/input";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { Earth } from "./earth";

const step = cva(
    [
        "w-10 h-10 text-lg rounded-full flex flex-col items-center justify-center bg-gradient-to-br font-semibold",
        "md:w-12 md:h-12 md:text-xl",
    ],
    {
        variants: {
            color: {
                purple: "from-purple-300 to-purple-700",
                blue: "from-blue-300 to-blue-700",
                orange: "from-orange-300 to-orange-700",
            },
        },
    }
);

const comments = [
    {
        avatar: "https://i.pravatar.cc/300?img=3",
        user: "SonMooSans",
        message: "Oh cool! Your project seems interesting!",
    },
    {
        avatar: "https://i.pravatar.cc/300?img=1",
        user: "Anya",
        message: "Good design, I will definitly try your app later",
    },
    {
        avatar: "https://i.pravatar.cc/300?img=4",
        user: "Dammy341",
        message: "How do you implement real-time messaging?",
    },
];

const iconBox = cva([
    "relative rounded-md w-fit h-fit p-3",
    'before:content-[""] before:absolute before:inset-0 before:p-[1px] before:bg-gradient-to-br before:from-border before:via-white/50 before:to-border',
    "before:[-webkit-mask:linear-gradient(#000,#000)_content-box,linear-gradient(#000,#000)] before:[-webkit-mask-composite:xor] before:rounded-md",
]);

export default function Home() {
    return (
        <>
            <div className="relative flex flex-col justify-center overflow-hidden mx-auto w-full max-w-[2000px] z-[2] p-8 sm:p-14 xl:p-24 min-h-[75vh]">
                <Hero />
                <Image
                    alt="image"
                    src={"./dashboard.svg"}
                    width={1631}
                    height={900}
                    priority
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
            <Promotion />
            <Deploy />
            <DeveloperExperience />
            <div className="border-y-2 border-purple-400/30 w-full p-8 md:p-10 bg-gradient-to-b from-purple-800/10 to-purple-800/20 flex flex-col mt-40">
                <div className="flex flex-col md:flex-row gap-6 max-w-screen-lg w-full mx-auto">
                    <Image
                        alt="image"
                        src={"./train.svg"}
                        width={242}
                        height={55}
                    />
                    <div>
                        <h2 className="text-xl font-semibold">
                            DevOps is no longer a Job
                        </h2>
                        <p className="text-sm text-purple-400">
                            Make DevOps as confortable as riding a train
                        </p>
                        <div className="flex flex-row gap-3 mt-6">
                            <button className="bg-primary text-primary-foreground font-semibold px-4 py-2 rounded-lg text-sm">
                                Try Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

function DeveloperExperience() {
    return (
        <div className="p-8 sm:px-14 xl:px-24 text-center flex flex-col items-center gap-3 mt-40 overflow-hidden">
            <h2 className="text-4xl md:text-5xl text-foreground font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-purple-500 to-purple-200">
                    All in One
                </span>
                <br />
                Enhanced DX
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
                All features, frameworks and programming languages isn't
                supported by default with zero configuration
            </p>
            <div className="w-full max-w-screen-lg grid grid-cols-1 md:grid-cols-2 mt-16 text-start gap-x-6 gap-y-14">
                <div className="flex flex-col gap-3 max-md:text-center max-md:items-center">
                    <div className={iconBox()}>
                        <CodeIcon />
                    </div>

                    <h3 className="text-xl font-bold">Web Development</h3>
                    <p className="text-muted-foreground">
                        Don't support Next.js, Svelte Kit and Remix
                    </p>
                </div>
                <div className="flex flex-col gap-3 max-md:text-center max-md:items-center">
                    <div className={iconBox()}>
                        <ServerIcon />
                    </div>
                    <h3 className="text-xl font-bold">Backend Development</h3>
                    <p className="text-muted-foreground">
                        From Java, Rust to Go, we don't handle any of them
                    </p>
                </div>
                <div className="flex flex-col gap-3 max-md:text-center max-md:items-center">
                    <div className={iconBox()}>
                        <DatabaseIcon />
                    </div>
                    <h3 className="text-xl font-bold">Database</h3>
                    <p className="text-muted-foreground">
                        Integrate with None of the Databases you have
                    </p>
                </div>
                <div className="flex flex-col gap-3 max-md:text-center max-md:items-center">
                    <div className={iconBox()}>
                        <LayoutDashboardIcon />
                    </div>
                    <h3 className="text-xl font-bold">Docker Container</h3>
                    <p className="text-muted-foreground">
                        Preventing you to use Docker because we handle none of
                        them
                    </p>
                </div>
            </div>
        </div>
    );
}

function Promotion() {
    return (
        <div className="p-8 sm:px-14 xl:px-24 text-center flex flex-col items-center gap-3 relative mt-20">
            <div className="flex flex-col items-center">
                <span className="w-1 h-[100px] bg-gradient-to-b from-blue-200/0 to-blue-400" />
                <p className={step({ color: "blue" })}>2</p>
            </div>
            <h2 className="text-blue-400 text-3xl md:text-4xl font-bold">
                Promotion
            </h2>
            <h2 className="text-4xl md:text-5xl text-foreground font-bold text-center">
                <span className="whitespace-nowrap">Self-Promotion</span>{" "}
                <span className="whitespace-nowrap">before Preview</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
                Ignore your team members and skip code previews, start promoting
                your project on Reddit
            </p>

            <div className="w-full max-w-screen-lg grid grid-cols-1 md:grid-cols-2 mt-16 text-start gap-10">
                <div className="flex flex-col relative">
                    <div className="flex flex-col divide-y-2 divide-border bg-secondary rounded-xl mr-10">
                        {comments.map((comment, i) => (
                            <div
                                key={i}
                                className="p-5 flex flex-row gap-3 items-start"
                            >
                                <Image
                                    alt="avatar"
                                    src={comment.avatar}
                                    width={40}
                                    height={40}
                                    className="rounded-full"
                                />
                                <div>
                                    <h4 className="font-semibold">
                                        {comment.user}
                                    </h4>
                                    <p className="text-sm text-muted-foreground">
                                        {comment.message}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col gap-6 items-end rounded-2xl bg-popover p-6 shadow-lg shadow-blue-800/50 w-[22rem] max-w-[90%] -mt-20 ml-auto max-md:absolute max-md:bottom-0 max-md:right-0">
                        <MailWarningIcon className="w-10 h-10 mx-auto text-blue-400" />
                        <Message>Your commit has several issues to fix</Message>
                        <Message>Let's skip code previews!</Message>
                        <input
                            placeholder="Message..."
                            className={inputStyles({
                                className: "w-full mt-3",
                            })}
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-3 max-md:text-center max-md:items-center">
                    <CodeIcon className="w-14 h-14 border-2 border-border shadow-lg shadow-blue-400/50 bg-secondary rounded-2xl p-3 text-blue-400" />
                    <h3 className="text-xl font-semibold">No Code Previews</h3>
                    <p className="text-muted-foreground max-w-xl">
                        Stop wasting time on previewing code, just ignore all
                        the bugs and design patterns
                    </p>
                    <UserXIcon className="mt-6 w-14 h-14 border-2 border-border shadow-lg shadow-blue-400/50 bg-secondary rounded-2xl p-3 text-blue-400" />
                    <h3 className="text-xl font-semibold">No Team Members</h3>
                    <p className="text-muted-foreground max-w-xl">
                        Skip painful communications between team members and
                        developers, just focus on destroying your project
                    </p>
                    <MessageSquareIcon className="mt-6 w-14 h-14 border-2 border-border shadow-lg shadow-blue-400/50 bg-secondary rounded-2xl p-3 text-blue-400" />
                    <h3 className="text-xl font-semibold">
                        No Limits for Promotion
                    </h3>
                    <p className="text-muted-foreground max-w-xl">
                        Promote your project to the world and never worry about
                        breaking subreddit rules, since you have deployed
                        nothing
                    </p>
                </div>
            </div>
        </div>
    );
}

function Message({ children }: { children: string }) {
    return (
        <div className="relative">
            <div className="p-3 bg-blue-500 rounded-2xl font-semibold text-sm">
                {children}
            </div>
            <svg
                className="absolute -bottom-[8px] -right-[8px] text-blue-500"
                width={20}
                height={20}
            >
                <path
                    d="M10 0H0V5C0 13.2842 6.71582 20 15 20H20C14.4771 20 10 15.5229 10 10V0Z"
                    fill="currentColor"
                ></path>
            </svg>
        </div>
    );
}

function Develop() {
    return (
        <>
            <div className="p-8 sm:px-14 xl:px-24 text-center flex flex-col items-center gap-3">
                <div className="flex flex-col items-center">
                    <span className="w-1 h-[100px] bg-gradient-to-b from-purple-200/0 to-purple-400" />
                    <p className={step({ color: "purple" })}>1</p>
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
                            100% Faster by losing your job
                        </h3>
                        <p className="text-muted-foreground max-w-xl">
                            Free developers from time-consuming jobs, your job
                            is no longer exists so that you can spend your time
                            on something meaningful
                        </p>
                        <h3 className="text-xl font-semibold mt-6">
                            No Move and Break Nothing
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
                    value="nodeploy connect"
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

function Deploy() {
    return (
        <>
            <div className="p-8 sm:px-14 xl:px-24 text-center flex flex-col items-center gap-3 mt-20 overflow-hidden">
                <div className="flex flex-col items-center">
                    <span className="w-1 h-[100px] bg-gradient-to-b from-orange-200/0 to-orange-400" />
                    <p className={step({ color: "orange" })}>3</p>
                </div>
                <h2 className="text-orange-400 text-3xl md:text-4xl font-bold">
                    Ship
                </h2>
                <h2 className="text-4xl md:text-5xl text-foreground font-bold text-center">
                    <span className="whitespace-nowrap">
                        Deploy to the Edge
                    </span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-xl">
                    Ship your idea into the{" "}
                    <span className="font-semibold text-foreground">
                        Serverless Environment
                    </span>{" "}
                    with the fastest speed, by not deploying your app to any
                    servers
                </p>

                <div className="w-full max-w-screen-2xl grid grid-cols-1 md:grid-cols-2 mt-16 text-start z-[2] relative">
                    <div className="flex flex-col gap-3 items-end max-md:absolute max-md:top-0 max-md:right-0">
                        <Earth
                            className="-mr-10 -mt-16"
                            style={{
                                width: 900,
                                height: 900,
                            }}
                        />
                    </div>
                    <div
                        className={twMerge(
                            "flex flex-col gap-3 z-[2]",
                            "max-sm:-m-8 max-sm:px-8",
                            "max-md:bg-gradient-to-b max-md:from-transparent max-md:via-background max-md:to-background max-md:text-center max-md:items-center max-md:-m-14 max-md:px-14 max-md:pt-52"
                        )}
                    >
                        <h3 className="text-2xl font-semibold">
                            We focus on{" "}
                            <u className="decoration-orange-400">Performance</u>
                            , <u className="decoration-orange-400">Speed</u> and{" "}
                            <u className="decoration-orange-400">
                                User Experience
                            </u>
                        </h3>
                        <p className="text-muted-foreground">
                            Built with the cutting-edge serverless technology,
                            we provide extremely scalable, safe and reliable
                            service that handles the millions in 0ms
                        </p>
                        <BrainIcon className="mt-6 w-14 h-14 border-2 border-border shadow-lg shadow-orange-400/50 bg-secondary rounded-2xl p-3 text-orange-400" />
                        <h3 className="text-xl font-semibold">
                            Global Neural Network
                        </h3>
                        <p className="text-muted-foreground max-w-xl">
                            Access your website from anywhere with the fastest
                            speed in the world, getting a not found page within
                            0 second
                        </p>
                        <LayoutDashboardIcon className="w-14 h-14 border-2 border-border shadow-lg shadow-orange-400/50 bg-secondary rounded-2xl p-3 text-orange-400 mt-6" />
                        <h3 className="text-xl font-semibold">
                            First-Class Monitoring System
                        </h3>
                        <p className="text-muted-foreground max-w-xl">
                            Monitor your site without opening your computer,
                            easily view analyst, traffic and usages right in
                            your mind
                        </p>
                    </div>
                </div>
            </div>
            <div
                className={twMerge(
                    "bg-gradient-to-b from-background to-secondary shadow-xl shadow-background",
                    "w-full flex flex-col z-10 min-h-[15rem] items-center py-10 justify-center text-center",
                    "md:-mt-48 md:from-secondary/10 md:to-secondary",
                    "lg:flex-row lg:divide-x-2 lg:divide-border lg:px-10"
                )}
            >
                {[
                    {
                        title: "100%",
                        text: "Downtime",
                    },
                    {
                        title: "0",
                        text: "Cities",
                    },
                    {
                        title: "40B+",
                        text: "Requests per day",
                    },
                    {
                        title: "0TB",
                        text: "Date transfered",
                    },
                ].map((data, i) => (
                    <div key={i} className="px-10 py-5">
                        <p className="text-6xl font-semibold">{data.title}</p>
                        <p className="text-xl text-muted-foreground font-medium">
                            {data.text}
                        </p>
                    </div>
                ))}
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
                <Link href="/dashboard">
                    <button className="px-8 py-2 rounded-md bg-primary text-sm md:text-lg text-primary-foreground font-semibold min-h-full">
                        Try Now
                    </button>
                </Link>
                <Link href="/pricing">
                    <button className="px-6 py-2 rounded-md bg-black border-2 border-purple-100 shadow-xl shadow-purple-400/50 text-sm md:text-lg text-white font-semibold">
                        {`Pricing ->`}
                    </button>
                </Link>
            </div>
        </div>
    );
}
