"use client";
import { TreeNode } from "@/lib/generate-tree";
import clsx from "clsx";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useMemo } from "react";

type Item = {
    name: string;
    url: string | null;
};

const itemStyles = "overflow-hidden overflow-ellipsis whitespace-nowrap";

export function Breadcrumb({ tree }: { tree: TreeNode[] }) {
    const pathname = usePathname();
    const items = useMemo(() => {
        const items: Item[] = [];
        let root: TreeNode[] = tree;
        const segments = pathname.split("/");

        for (let i = 2; i < segments.length; i++) {
            const segment = segments[i];
            const node = root.find((node) => {
                if (node.type === "page" || node.type === "folder") {
                    return node.url.split("/")[i] === segment;
                }

                return false;
            });

            if (node == null || node.type === "separator") break;
            items.push({
                name: node.name,
                url:
                    node.type === "folder" && node.index == null
                        ? null
                        : node.url,
            });

            if (node.type === "folder") {
                root = node.children;
            }
        }

        return items;
    }, [tree, pathname]);

    return (
        <div className="flex flex-row gap-1 text-sm text-muted-foreground items-center">
            <p className={itemStyles}>Docs</p>
            {items.map((item, i) => {
                const active = items.length === i + 1;
                const style = clsx(itemStyles, active && "text-foreground");

                return (
                    <Fragment key={i}>
                        <ChevronRightIcon className="w-4 h-4 flex-shrink-0" />
                        {item.url != null ? (
                            <Link href={item.url} className={style}>
                                {item.name}
                            </Link>
                        ) : (
                            <p className={style}>{item.name}</p>
                        )}
                    </Fragment>
                );
            })}
        </div>
    );
}
