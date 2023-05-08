import { allDocs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { MdxContent } from "./mdx";
import { Param } from "../layout";
import type { Metadata } from "next";
import { getTableOfContents } from "@/lib/toc";
import { TOC } from "@/components/layout/toc";

export default async function Page({ params }: { params: Param }) {
    const path = params.slug.join("/");
    const page = allDocs.find((page) => page._raw.flattenedPath === path);

    if (page == null) {
        notFound();
    }

    const toc = await getTableOfContents(page.body.raw);

    return (
        <>
            <div className="flex flex-col gap-6 py-16">
                <h1 className="text-4xl font-bold">{page.title}</h1>
                <MdxContent docs={page} />
            </div>
            <div className="relative flex flex-col gap-3 max-xl:hidden py-16">
                <div className="sticky top-28 flex flex-col gap-3 overflow-auto max-h-[calc(100vh-4rem-3rem)]">
                    <h3 className="font-semibold">On this page</h3>
                    <TOC toc={toc} />
                </div>
            </div>
        </>
    );
}

export function generateMetadata({ params }: { params: Param }): Metadata {
    const page = allDocs.find((page) =>
        page._raw.flattenedPath.split("/").every((e, i) => params.slug[i] === e)
    );

    return {
        title: page?.title,
    };
}
