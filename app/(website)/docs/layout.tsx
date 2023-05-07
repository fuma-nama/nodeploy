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
        <div className="flex flex-col px-8 sm:px-14 xl:px-24">
            <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] xl:grid-cols-[300px_1fr_150px] gap-3 mx-auto w-full max-w-screen-2xl">
                <div className="relative max-md:hidden">
                    <div className="sticky top-12 flex flex-col gap-3 overflow-auto max-h-[calc(100vh-3rem)] py-16">
                        <Sidebar tree={tree} />
                    </div>
                </div>
                {children}
            </div>
        </div>
    );
}

export async function generateStaticParams(): Promise<Param[]> {
    return allDocs.map((docs) => ({
        slug: docs._raw.flattenedPath.split("/"),
    }));
}
