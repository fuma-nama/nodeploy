import clsx from "clsx";
import { Blog, allBlogs } from "contentlayer/generated";
import { CalendarIcon, EditIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BlogsListPage() {
    const blogs = allBlogs.sort((a, b) =>
        new Date(a.date) < new Date(b.date) ? 1 : -1
    );

    return (
        <div className="flex flex-col gap-4 z-[2]">
            <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-purple-200/50 to-transparent dark:from-purple-800/50 dark:to-transparent -z-[1]" />
            <h1 className="text-4xl font-bold">Our Blog.</h1>
            <p className="text-muted-foreground">
                High-quality posts written by great developers ant community
            </p>

            <div className="flex flex-col gap-8 mt-12">
                {blogs.map((blog) => (
                    <Post key={blog._id} blog={blog} />
                ))}
            </div>
        </div>
    );
}

function Post({ blog }: { blog: Blog }) {
    return (
        <Link
            href={blog.url}
            className={clsx(
                "grid grid-cols-1 p-4 gap-8 rounded-xl border-[1px] bg-secondary text-secondary-foreground",
                "md:p-8 lg:grid-cols-[400px_auto]"
            )}
        >
            <Image
                alt={blog.title}
                src={blog.image}
                width={400}
                height={400 * (9 / 16)}
                className="rounded-xl"
            />
            <div className="flex flex-col gap-4">
                <h2 className="text-xl font-semibold">{blog.title}</h2>
                <div className="flex flex-row gap-2 text-sm text-muted-foreground items-center">
                    <CalendarIcon className="w-4 h-4 text-purple-400" />
                    <p>
                        {new Date(blog.date).toLocaleDateString(undefined, {
                            dateStyle: "medium",
                        })}
                    </p>
                    <EditIcon className="ml-4 w-4 h-4 text-purple-400" />
                    <p>{blog.author}</p>
                </div>
                <p className="text-muted-foreground text-sm md:text-base">
                    {blog.description}
                </p>
                <p className="text-purple-400 font-medium mt-auto">
                    {"Read More ->"}
                </p>
            </div>
        </Link>
    );
}
