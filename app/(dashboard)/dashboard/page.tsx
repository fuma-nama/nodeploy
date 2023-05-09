import Image from "next/image";
import { inputStyles } from "@/components/ui/input";
import { Chart } from "./chart";
import { Metadata } from "next";

const chart_data = [
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

export const metadata: Metadata = {
    title: "My Project",
};

export default function DashboardPage() {
    return (
        <>
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
                <div className="border-2 p-6 rounded-xl flex flex-col">
                    <h2 className="text-2xl font-bold">Yearly Cost</h2>
                    <p className="text-muted-foreground mt-3">
                        You don't have to pay for these fees, we'll pay it for
                        you
                    </p>

                    <Chart data={chart_data} />
                </div>
                <div className="border-2 p-6 rounded-xl flex flex-col">
                    <h2 className="text-2xl font-bold">Recent Deployments</h2>
                    <div className="mt-7 flex flex-col gap-7">
                        <Deployment text="Update README.md" />
                        <Deployment text="Fix Messages disappeared randomly" />
                        <Deployment text="Improve authorization flow" />
                        <Deployment text="Feat: ChatGPT Integration" />
                        <Deployment text="Fix build errors" />
                    </div>
                </div>
            </div>
        </>
    );
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
            <p className="rounded-full bg-green-600/20 text-green-300 text-xs px-2 py-1">
                Ready
            </p>
        </div>
    );
}
