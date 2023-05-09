"use client";

import clsx from "clsx";
import { ChevronDownIcon, MenuIcon } from "lucide-react";
import {
    ReactNode,
    createContext,
    useContext,
    useEffect,
    useState,
} from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { TreeNode, FileNode, FolderNode } from "@/lib/generate-tree";
import dynamic from "next/dynamic";
import { CommandShortcut } from "../ui/command";

const SearchDialog = dynamic(() => import("@/components/dialog/search"));

export function Sidebar({ tree }: { tree: TreeNode[] }) {
    return (
        <div className="relative max-lg:hidden">
            <div className="flex flex-col gap-3 sticky top-12 overflow-auto max-h-[calc(100vh-3rem)] py-16">
                <List items={tree} />
            </div>
        </div>
    );
}

export function SidebarResponsive({ tree }: { tree: TreeNode[] }) {
    const [open, setOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setOpen(false);
    }, [pathname]);

    return (
        <div className="sticky inset-x-0 top-12 z-50 max-h lg:hidden overflow-hidden">
            <button
                className={clsx(
                    "w-full h-10 bg-background border-b-[1px] px-8 sm:px-14",
                    "flex flex-row gap-2 items-center text-sm"
                )}
                onClick={() => setOpen((prev) => !prev)}
            >
                <MenuIcon className="w-4 h-4" />
                Menu
            </button>
            <div
                className={clsx(
                    "p-8 sm:p-14 overflow-auto backdrop-blur-xl bg-background/70 max-h-[calc(100vh-5.5rem)]",
                    open ? "block" : "hidden"
                )}
            >
                <List items={tree} />
            </div>
        </div>
    );
}

const SearchContext = createContext<{
    setOpen: (v: boolean) => void;
}>({
    setOpen: () => {},
});

export function SearchDialogProvider({ children }: { children: ReactNode }) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                setOpen(true);
                e.preventDefault();
            }
        };

        window.addEventListener("keydown", handler);

        return () => {
            window.removeEventListener("keydown", handler);
        };
    }, []);

    return (
        <SearchContext.Provider value={{ setOpen }}>
            {open && <SearchDialog open onOpenChange={setOpen} />}
            {children}
        </SearchContext.Provider>
    );
}

function List({ items }: { items: TreeNode[] }) {
    const { setOpen } = useContext(SearchContext);

    return (
        <div className="flex flex-col gap-3">
            <button
                className="flex flex-row items-center border-[1px] rounded-md text-muted-foreground cursor-pointer px-4 py-2 text-left text-sm"
                onClick={() => setOpen(true)}
            >
                Search Docs...
                <CommandShortcut className="ml-auto">⌘K</CommandShortcut>
            </button>
            {items.map((item, i) => (
                <Node key={i} item={item} />
            ))}
        </div>
    );
}

function Node({ item }: { item: TreeNode }) {
    if (item.type === "separator")
        return (
            <p className="font-semibold text-sm mt-3 first:mt-0">{item.name}</p>
        );
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
                    : "text-muted-foreground hover:text-foreground"
            )}
        >
            {name}
        </Link>
    );
}

function Folder({ item }: { item: FolderNode }) {
    const { name, children, index } = item;

    const pathname = usePathname();
    const active = pathname === item.url;
    const [extend, setExtend] = useState(
        () => active || pathname.startsWith(item.url + "/")
    );

    const styles = clsx(
        "text-sm flex flex-row justify-between cursor-pointer",
        active
            ? "font-semibold rounded-xl text-purple-400"
            : "text-muted-foreground hover:text-foreground"
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
                                    "flex pl-4 py-1.5 border-l-2 border-border",
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
