import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { MoonStarIcon } from "lucide-react";
import { inputStyles } from "@/components/input";
import { NextSeo } from "next-seo";

export default function Page() {
    return (
        <main>
            <NextSeo title="My Project" />

            <Navbar />
            <div className="max-w-screen-2xl mx-auto flex flex-col gap-5 px-4 md:px-14 py-14">
                <div className="flex flex-col sm:flex-row gap-3 sm:justify-between">
                    <h1 className="text-4xl font-bold">My Project</h1>
                    <div className="flex flex-row gap-3">
                        <button className="text-primary-foreground bg-primary px-4 py-2 rounded-xl font-semibold text-sm">
                            Visit
                        </button>
                        <button className="border-2 border-border text-foreground px-4 py-2 rounded-xl font-semibold text-sm">
                            View Git Repository
                        </button>
                    </div>
                </div>
                <div>
                    <h2 className="font-semibold mb-1">Connect to CLI</h2>
                    <input
                        readOnly
                        value="nodeploy init henry:my-project"
                        className={inputStyles({
                            className: "w-full max-w-xl",
                        })}
                    />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
                    <div className="border-2 border-slate-800 p-6 rounded-xl flex flex-col">
                        <h2 className="text-2xl font-bold">Yearly Cost</h2>
                        <p className="text-muted-foreground mt-3">
                            You don't have to pay for these fees, we'll pay it
                            for you
                        </p>

                        <Chart />
                    </div>
                    <div className="border-2 border-slate-800 p-6 rounded-xl flex flex-col">
                        <h2 className="text-2xl font-bold">
                            Recent Deployments
                        </h2>
                        <div className="mt-7 flex flex-col gap-7">
                            <Deployment text="Update README.md" />
                            <Deployment text="Fix Messages disappeared randomly" />
                            <Deployment text="Improve authorization flow" />
                            <Deployment text="Feat: ChatGPT Integration" />
                            <Deployment text="Fix build errors" />
                        </div>
                    </div>
                </div>
                <Cards />
            </div>
        </main>
    );
}

function Cards() {
    return <div className="grid grid-cols-3"></div>;
}

function Deployment({ text }: { text: string }) {
    return (
        <div className="flex flex-row gap-3 items-center">
            <Image
                alt="avatar"
                src="https://i.pravatar.cc/300"
                width={40}
                height={40}
                className="rounded-full"
            />
            <div className="flex-1">
                <p className="font-semibold">Money</p>
                <p className="text-muted-foreground text-sm">{text}</p>
            </div>
            <p className="rounded-full bg-green-600/20 text-green-300 text-sm px-2 py-1">
                Ready
            </p>
        </div>
    );
}

const data = [
    { name: "Jan", money: 400 },
    { name: "Feb", money: 100 },
    { name: "Mar", money: 300 },
    { name: "Apr", money: 400 },
    { name: "May", money: 200 },
    { name: "Jun", money: 300 },
    { name: "Aug", money: 600 },
    { name: "Sep", money: 200 },
    { name: "Oct", money: 400 },
    { name: "Nov", money: 300 },
    { name: "Dec", money: 200 },
];

function Chart() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);
    if (!mounted) return <></>;

    return (
        <div className="mt-7 w-full h-[300px] max-w-xl">
            <ResponsiveContainer>
                <BarChart
                    width={600}
                    height={300}
                    data={data}
                    margin={{ left: -30 }}
                >
                    <Bar
                        dataKey="money"
                        fill="rgb(192 132 252)"
                        radius={[10, 10, 0, 0]}
                    />
                    <XAxis
                        dataKey="name"
                        stroke="hsl(215.4 16.3% 56.9%)"
                        axisLine={false}
                        tickLine={false}
                        fontSize="14px"
                    />
                    <YAxis
                        stroke="hsl(215.4 16.3% 56.9%)"
                        axisLine={false}
                        tickLine={false}
                        fontSize="12px"
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

function Navbar() {
    return (
        <nav className="w-full border-b-2 border-slate-800 bg-background overflow-x-auto">
            <div className="max-w-screen-2xl mx-auto w-full flex flex-row h-14 items-center gap-7 px-4 md:px-14">
                <div className="flex flex-row gap-2 items-center flex-shrink-0">
                    <Image
                        alt="avatar"
                        src="https://i.pravatar.cc/100?img=3"
                        width={28}
                        height={28}
                        className="rounded-full"
                    />
                    <p className="text-foreground whitespace-nowrap">
                        Henry Baka
                    </p>
                </div>

                <Link
                    href="/dashboard"
                    className="text-foreground font-semibold"
                >
                    Overview
                </Link>
                <Link href="/dashboard" className="text-muted-foreground">
                    Deployments
                </Link>
                <Link href="/dashboard" className="text-muted-foreground">
                    Settings
                </Link>

                <MoonStarIcon className="ml-auto text-muted-foreground flex-shrink-0" />
            </div>
        </nav>
    );
}
