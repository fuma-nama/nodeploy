import { allDocs, allMeta } from "@/.contentlayer/generated";
import { ReactNode } from "react";
import { buildPageTree } from "@/lib/generate-tree";
import { Sidebar } from "./sidebar";

export type Param = {
    slug: string[];
};

const rootMeta = allMeta.find((meta) => meta._raw.flattenedPath === "meta")!;

export default function DocsLayout({ children }: { children: ReactNode }) {
    const tree = buildPageTree(rootMeta);

    return (
        <div className="flex flex-col px-8 sm:px-14 xl:px-24 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] xl:grid-cols-[300px_1fr_300px] gap-3 mx-auto w-full max-w-screen-2xl">
                <div className="relative max-md:hidden">
                    <div className="sticky top-28 flex flex-col gap-3 overflow-auto max-h-[calc(100vh-4rem-3rem)]">
                        <Sidebar tree={tree} />
                    </div>
                </div>
                <div className="flex flex-col gap-6">{children}</div>
                <div className="relative flex flex-col gap-3 max-xl:hidden">
                    <div className="sticky top-28 flex flex-col gap-3 overflow-auto max-h-[calc(100vh-4rem-3rem)]">
                        <h3 className="font-semibold">On this page</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export async function generateStaticParams(): Promise<Param[]> {
    return allDocs.map((docs) => ({
        slug: docs._raw.flattenedPath.split("/"),
    }));
}
