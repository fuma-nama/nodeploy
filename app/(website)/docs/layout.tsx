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
            <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] 2xl:grid-cols-[300px_1fr_300px] gap-12 mx-auto w-full max-w-screen-2xl min-h-screen">
                <Sidebar tree={tree} />
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
