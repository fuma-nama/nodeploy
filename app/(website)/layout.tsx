import Link from "next/link";
import type { ReactNode } from "react";
import { Navbar } from "./navbar";

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <main className="relative flex flex-col min-h-screen">
            <nav className="w-full sticky top-0 bg-background border-b-2 border-border z-50 px-8 sm:px-14 xl:px-24">
                <Navbar />
            </nav>
            {children}
            <Footer />
        </main>
    );
}

function Footer() {
    return (
        <footer className="flex flex-col bg-secondary mt-auto">
            <div className="flex flex-col md:flex-row gap-3 gap-y-8 justify-between mx-auto w-full max-w-screen-lg p-10">
                <h4 className="text-xl font-bold">Nodeploy</h4>
                <div className="flex flex-col gap-3">
                    <h5>Product</h5>
                    <Link
                        href="https://youtu.be/dQw4w9WgXcQ"
                        target="_blank"
                        className="text-sm text-muted-foreground"
                    >
                        No.js
                    </Link>
                    <Link
                        href="https://youtu.be/dQw4w9WgXcQ"
                        target="_blank"
                        className="text-sm text-muted-foreground"
                    >
                        Nodeploy CLI
                    </Link>
                    <Link
                        href="https://youtu.be/dQw4w9WgXcQ"
                        target="_blank"
                        className="text-sm text-muted-foreground"
                    >
                        Nobuild.rs
                    </Link>
                </div>
                <div className="flex flex-col gap-3">
                    <h5>Explore</h5>
                    <Link
                        href="https://youtu.be/dQw4w9WgXcQ"
                        target="_blank"
                        className="text-sm text-muted-foreground"
                    >
                        Documentation
                    </Link>
                    <Link
                        href="/pricing"
                        className="text-sm text-muted-foreground"
                    >
                        Pricing
                    </Link>
                    <Link
                        href="https://youtu.be/dQw4w9WgXcQ"
                        target="_blank"
                        className="text-sm text-muted-foreground"
                    >
                        Integrations
                    </Link>
                </div>
                <div className="flex flex-col gap-3">
                    <h5>About</h5>
                    <Link
                        href="https://github.com/SonMooSans"
                        target="_blank"
                        className="text-sm text-muted-foreground"
                    >
                        Creator
                    </Link>
                    <Link
                        href="https://github.com/SonMooSans/nodeploy"
                        target="_blank"
                        className="text-sm text-muted-foreground"
                    >
                        Open Source
                    </Link>
                    <Link
                        href="https://discord.com/invite/QmgmFhg"
                        target="_blank"
                        className="text-sm text-muted-foreground"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </footer>
    );
}
