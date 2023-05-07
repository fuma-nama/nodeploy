import { Docs, allDocs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { MdxContent } from "./mdx";
import type { Metadata } from "next";

type Param = {
    slug: string[];
};

export default async function Page({ params }: { params: Param }) {
    const page = allDocs.find((page) =>
        page._raw.flattenedPath.split("/").every((e, i) => params.slug[i] === e)
    );

    if (page == null) {
        notFound();
    }

    return (
        <>
            <div className="flex flex-col p-8 sm:p-14 xl:p-24 mb-20">
                <div className="grid grid-cols-[300px_1fr_300px] gap-3 mx-auto w-full max-w-screen-2xl">
                    <div>
                        <div className="sticky top-20 flex flex-col gap-3">
                            <h3 className="font-bold text-xl">Documentation</h3>
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <MdxContent docs={page} />
                    </div>
                    <div className="flex flex-col gap-3">
                        <h3 className="font-semibold">On this page</h3>
                    </div>
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

export async function generateStaticParams(): Promise<Param[]> {
    return allDocs.map((docs) => ({
        slug: docs._raw.flattenedPath.split("/"),
    }));
}
