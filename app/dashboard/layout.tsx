import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { MoonStarIcon } from "lucide-react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <main>
            <Navbar />
            <div className="max-w-screen-2xl mx-auto flex flex-col gap-5 px-4 md:px-14 py-14">
                {children}
            </div>
        </main>
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
