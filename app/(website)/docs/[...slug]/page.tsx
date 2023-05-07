import { allDocs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { MdxContent } from "./mdx";
import { Param } from "../layout";
import type { Metadata } from "next";

export default async function Page({ params }: { params: Param }) {
    const path = params.slug.join("/");
    const page = allDocs.find((page) => page._raw.flattenedPath === path);

    if (page == null) {
        notFound();
    }

    return <MdxContent docs={page} />;
}

export function generateMetadata({ params }: { params: Param }): Metadata {
    const page = allDocs.find((page) =>
        page._raw.flattenedPath.split("/").every((e, i) => params.slug[i] === e)
    );

    return {
        title: page?.title,
    };
}
