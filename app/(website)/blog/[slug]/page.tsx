import { MdxContent } from "@/components/mdx/mdx-content";
import { absoluteUrl } from "@/lib/absolute-url";
import { Item, TableOfContents, getTableOfContents } from "@/lib/get-toc";
import { allBlogs } from "contentlayer/generated";
import { CalendarIcon, EditIcon } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Params = {
    slug: string;
};

export default async function BlogPage({ params }: { params: Params }) {
    const page = allBlogs.find((blog) => blog.slug === params.slug);

    if (page == null) {
        notFound();
    }
    const toc = await getTableOfContents(page.body.raw);

    return (
        <article className="flex flex-col gap-6 z-[2]">
            <div className="absolute top-0 left-0 right-0 h-60 bg-gradient-to-b from-purple-100/80 to-transparent dark:from-purple-900/50 dark:to-transparent -z-[1]" />

            <Link href="/blog" className="text-sm">
                {"<- Back to Blog"}
            </Link>
            <h1 className="text-4xl font-bold">{page.title}</h1>
            <div className="flex flex-row gap-2 text-sm text-muted-foreground items-center">
                <CalendarIcon className="w-4 h-4 text-purple-400" />
                <p>
                    {new Date(page.date).toLocaleDateString(undefined, {
                        dateStyle: "medium",
                    })}
                </p>
                <EditIcon className="ml-4 w-4 h-4 text-purple-400" />
                <p>{page.author}</p>
            </div>
            {toc.length > 0 && <TOC toc={toc} />}

            <MdxContent code={page.body.code} />
        </article>
    );
}

function TOC({ toc }: { toc: TableOfContents }) {
    return (
        <div className="p-4 border-[1px] bg-secondary text-secondary-foreground rounded-xl flex flex-col gap-4">
            <p className="text-sm text-muted-foreground">Table of Content</p>
            <ul className="space-y-2 font-semibold list-inside list-disc marker:text-xl marker:text-muted-foreground">
                {toc.map((item, i) => (
                    <TOCItem key={i} item={item} />
                ))}
            </ul>
        </div>
    );
}

function TOCItem({ item }: { item: Item }) {
    return (
        <li>
            <a href={item.url}>{item.title}</a>
            <ol className="text-sm font-normal space-y-2 ml-8 list-inside list-disc marker:text-sm">
                {item.items?.map((item, i) => (
                    <TOCItem key={i} item={item} />
                ))}
            </ol>
        </li>
    );
}

export function generateStaticParams(): Params[] {
    return allBlogs.map((blog) => ({
        slug: blog.slug,
    }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
    const page = allBlogs.find((blog) => blog.slug === params.slug);

    if (page == null) return {};

    const description =
        page.description ??
        "The Blog posts written by No Deploy Team developers and our community";
    return {
        title: page.title,
        description,
        openGraph: {
            title: page.title,
            description,
            authors: page.author,
            publishedTime: page.date,
            url: "https://nodeploy-neon.vercel.app",
            images: page.image,
            type: "article",
            siteName: "No Deploy",
        },
        twitter: {
            title: page.title,
            description,
            card: "summary_large_image",
            creator: "@money_is_shark",
            images: page.image,
        },
        metadataBase: absoluteUrl(),
    };
}
