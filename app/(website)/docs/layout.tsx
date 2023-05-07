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
        <div className="flex flex-col p-8 sm:p-14 xl:p-24 mb-20">
            <div className="grid grid-cols-[300px_1fr_300px] gap-3 mx-auto w-full max-w-screen-2xl">
                <div>
                    <div className="sticky top-20 flex flex-col gap-3">
                        <h3 className="font-bold text-xl">Documentation</h3>
                        <Sidebar tree={tree} />
                    </div>
                </div>
                <div className="flex flex-col gap-6">{children}</div>
                <div className="flex flex-col gap-3">
                    <h3 className="font-semibold">On this page</h3>
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
