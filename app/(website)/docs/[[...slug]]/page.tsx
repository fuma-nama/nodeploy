import { allDocs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { MdxContent } from "@/components/mdx/mdx-content";
import { Param } from "../layout";
import type { Metadata } from "next";
import { getTableOfContents } from "@/lib/get-toc";
import { TOC } from "@/components/layout/toc";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { getPageTree } from "@/lib/page-tree";
import { absoluteUrl } from "@/lib/absolute-url";

export default async function Page({ params }: { params: Param }) {
    const path = (params.slug ?? []).join("/");
    const page = allDocs.find((page) => page.slug === path);

    if (page == null) {
        notFound();
    }

    const tree = getPageTree();
    const toc = await getTableOfContents(page.body.raw);

    return (
        <>
            <article className="flex flex-col gap-6 py-8 lg:py-16">
                <Breadcrumb tree={tree} />
                <h1 className="text-4xl font-bold">{page.title}</h1>
                <MdxContent code={page.body.code} />
            </article>
            <div className="relative flex flex-col gap-3 max-xl:hidden py-16">
                <div className="sticky top-28 flex flex-col gap-3 overflow-auto max-h-[calc(100vh-4rem-3rem)]">
                    {toc.length > 0 && (
                        <h3 className="font-semibold">On this page</h3>
                    )}
                    <TOC toc={toc} />
                </div>
            </div>
        </>
    );
}

export function generateMetadata({ params }: { params: Param }): Metadata {
    const path = (params.slug ?? []).join("/");
    const page = allDocs.find((page) => page.slug === path);

    if (page == null) return {};

    const description =
        page.description ?? "The hosting platform that supports Nothing";

    return {
        title: page.title,
        description: description,
        openGraph: {
            url: "https://nodeploy-neon.vercel.app",
            title: page.title,
            description: description,
            images: "/banner.png",
            siteName: "No Deploy",
        },
        twitter: {
            card: "summary_large_image",
            creator: "@money_is_shark",
            title: page.title,
            description: description,
            images: "/banner.png",
        },
        metadataBase: absoluteUrl(),
    };
}

export async function generateStaticParams(): Promise<Param[]> {
    return allDocs.map((docs) => ({
        slug: docs.slug.split("/"),
    }));
}
