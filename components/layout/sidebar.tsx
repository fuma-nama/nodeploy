"use client";

import clsx from "clsx";
import { ChevronDownIcon, MenuIcon } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { TreeNode, FileNode, FolderNode } from "@/lib/generate-tree";

export function Sidebar({ tree }: { tree: TreeNode[] }) {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    return (
        <>
            <button
                className={clsx(
                    "fixed w-full inset-x-0 h-12 bg-background border-b-[1px] z-50 px-8 sm:px-14 lg:hidden",
                    "flex flex-row gap-2 items-center text-sm"
                )}
                onClick={() => setOpen((prev) => !prev)}
            >
                <MenuIcon className="w-4 h-4" />
                Menu
            </button>
            <div
                className={clsx(
                    "relative",
                    "max-lg:fixed max-lg:p-8 max-lg:overflow-auto max-lg:sm:p-14 max-lg:top-24 max-lg:inset-0 max-lg: max-lg:backdrop-blur-xl max-lg:z-50 max-lg:bg-background/50",
                    open ? "block" : "max-lg:hidden"
                )}
            >
                <div
                    className={clsx(
                        "flex flex-col gap-3",
                        "lg:sticky lg:top-12 lg:overflow-auto lg:max-h-[calc(100vh-3rem)] lg:py-16"
                    )}
                >
                    {tree.map((item, i) => (
                        <Node key={i} item={item} />
                    ))}
                </div>
            </div>
        </>
    );
}

function Node({ item }: { item: TreeNode }) {
    if (item.type === "separator")
        return <p className="font-semibold text-sm">{item.name}</p>;
    if (item.type === "folder") return <Folder item={item} />;

    return <Item item={item} />;
}

function Item({ item }: { item: FileNode }) {
    const { url, name } = item;
    const pathname = usePathname();
    const active = pathname === url;

    return (
        <Link
            href={url}
            className={clsx(
                "text-sm w-full",
                active
                    ? "text-purple-400 font-semibold"
                    : "text-muted-foreground"
            )}
        >
            {name}
        </Link>
    );
}

function Folder({ item }: { item: FolderNode }) {
    const { name, children, index } = item;

    const pathname = usePathname();
    const [extend, setExtend] = useState(() => pathname.startsWith(item.url));
    const active = pathname === item.url;

    const styles = clsx(
        "text-sm text-muted-foreground flex flex-row justify-between cursor-pointer",
        {
            "font-semibold rounded-xl text-purple-400": active,
        }
    );

    const icon = (
        <ChevronDownIcon
            className={clsx("w-5 h-5", extend ? "rotate-0" : "-rotate-90")}
            onClick={(e) => {
                setExtend((prev) => !prev);
                e.preventDefault();
                e.stopPropagation();
            }}
        />
    );

    const onClick = () => {
        setExtend((prev) =>
            prev && (item.index == null || active) ? false : true
        );
    };

    return (
        <div className="w-full">
            {index == null ? (
                <h4 className={styles} onClick={onClick}>
                    {name}
                    {icon}
                </h4>
            ) : (
                <Link href={index.url} className={styles} onClick={onClick}>
                    {name}
                    {icon}
                </Link>
            )}
            {extend && (
                <ul className="flex flex-col mt-3">
                    {children.map((item, i) => {
                        const active =
                            item.type !== "separator" && pathname === item.url;

                        return (
                            <li
                                key={i}
                                className={clsx(
                                    "flex pl-4 py-1 border-l-2 border-border",
                                    active
                                        ? "border-purple-400"
                                        : "border-border"
                                )}
                            >
                                <Node item={item} />
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
}
