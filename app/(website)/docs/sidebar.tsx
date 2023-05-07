"use client";

import clsx from "clsx";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { TreeNode, FileNode, FolderNode } from "@/lib/generate-tree";

export function Sidebar({ tree }: { tree: TreeNode[] }) {
    return (
        <div className="flex flex-col gap-3">
            {tree.map((item, i) => (
                <Node key={i} item={item} />
            ))}
        </div>
    );
}

function Node({ item }: { item: TreeNode }) {
    if (item.type === "separator")
        return <p className="font-semibold">{item.name}</p>;
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
                    {index.name}
                    {icon}
                </Link>
            )}
            {extend && (
                <div className="flex flex-col mt-3">
                    {children.map((item, i) => {
                        const active =
                            item.type !== "separator" && pathname === item.url;

                        return (
                            <div key={i} className="flex flex-row gap-4 py-1">
                                <span
                                    className={clsx(
                                        "w-[1px] -my-1",
                                        active
                                            ? "bg-purple-400"
                                            : "bg-muted-foreground"
                                    )}
                                />
                                <Node item={item} />
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
