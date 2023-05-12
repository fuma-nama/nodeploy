"use client";
import { BanIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navbar() {
    const pathname = usePathname();

    return (
        <div
            className={`flex flex-row gap-12 items-center mx-auto w-full h-full ${
                pathname === "/" ? "max-w-[1800px]" : "max-w-screen-2xl"
            }`}
        >
            <Link href="/" className="flex flex-row gap-3">
                <BanIcon />
                <h4 className="font-semibold text-lg font-mono">No Deploy</h4>
            </Link>
            <div className="flex flex-row gap-12 items-center text-sm max-lg:hidden">
                <Item href="/docs">Docs</Item>
                <Item href="/pricing">Pricing</Item>
                <Item href="/blog">Blog</Item>
                <Item href="https://github.com/SonMooSans/nodeploy" external>
                    Github
                </Item>
            </div>
            <div className="flex flex-row justify-end ml-auto">
                <Image
                    alt="avatar"
                    src="https://i.pravatar.cc/28?img=3"
                    width={28}
                    height={28}
                    className="rounded-full"
                />
            </div>
        </div>
    );
}

function Item({
    href,
    external,
    children,
}: {
    href: string;
    external?: boolean;
    children: string;
}) {
    const pathname = usePathname();

    return (
        <Link
            href={href}
            target={external ? "_blank" : "_self"}
            rel={external ? "noreferrer" : ""}
            className={
                pathname.startsWith(href)
                    ? "font-semibold text-foreground"
                    : "text-muted-foreground"
            }
        >
            {children}
        </Link>
    );
}
