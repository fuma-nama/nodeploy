import { MdxContent } from "@/components/mdx/mdx-content";
import { getTableOfContents } from "@/lib/get-toc";
import { allBlogs } from "contentlayer/generated";
import { CalendarIcon, EditIcon } from "lucide-react";
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
            {toc.length > 0 && (
                <div className="p-8 border-[1px] bg-secondary text-secondary-foreground rounded-xl">
                    {toc.map((item, i) => (
                        <a key={i} href={item.url}>
                            {item.title}
                        </a>
                    ))}
                </div>
            )}

            <MdxContent code={page.body.code} />
        </article>
    );
}

export function generateStaticParams(): Params[] {
    return allBlogs.map((blog) => ({
        slug: blog.slug,
    }));
}
