"use client";

import { Item, TableOfContents } from "@/lib/toc";
import clsx from "clsx";
import Link from "next/link";
import { useEffect, useState } from "react";

export function TOC({
    relativeUrl,
    toc,
    itemIds,
}: {
    relativeUrl: string;
    toc: TableOfContents;
    itemIds: string[];
}) {
    const activeHeading = useActiveItem(itemIds);
    console.log(activeHeading);

    return (
        <>
            {toc.items?.map((item, i) => (
                <Item
                    key={i}
                    item={item}
                    activeId={activeHeading}
                    relativeUrl={relativeUrl}
                />
            ))}
        </>
    );
}

function Item({
    item,
    activeId,
    relativeUrl,
}: {
    item: Item;
    activeId: string | null;
    relativeUrl: string;
}) {
    const active = item.url === "#" + activeId;

    return (
        <div>
            <Link
                href={relativeUrl + item.url}
                className={clsx(
                    "text-sm",
                    active
                        ? "text-foreground font-semibold"
                        : "text-muted-foreground"
                )}
            >
                {item.title}
            </Link>
            {item.items?.map((item, i) => (
                <Item
                    key={i}
                    item={item}
                    activeId={activeId}
                    relativeUrl={relativeUrl}
                />
            ))}
        </div>
    );
}

function useActiveItem(itemIds: string[]) {
    const [activeId, setActiveId] = useState<string | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const items = entries.filter((e) => e.isIntersecting);
                if (items.length > 0) {
                    setActiveId(items[0].target.id);
                }
            },
            { rootMargin: `0% 0% -80% 0%` }
        );

        itemIds.forEach((id) => {
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, [itemIds]);

    return activeId;
}
