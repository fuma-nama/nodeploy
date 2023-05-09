import { ReactNode } from "react";
import {
    SearchDialogProvider,
    Sidebar,
    SidebarResponsive,
} from "@/components/layout/sidebar";
import { getPageTree } from "@/lib/page-tree";

export type Param = {
    slug?: string[];
};

export default function DocsLayout({ children }: { children: ReactNode }) {
    const tree = getPageTree();

    return (
        <SearchDialogProvider>
            <SidebarResponsive tree={tree} />
            <div className="flex flex-col px-8 sm:px-14 xl:px-24">
                <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] 2xl:grid-cols-[300px_1fr_300px] gap-12 mx-auto w-full max-w-screen-2xl min-h-screen">
                    <Sidebar tree={tree} />
                    {children}
                </div>
            </div>
        </SearchDialogProvider>
    );
}
