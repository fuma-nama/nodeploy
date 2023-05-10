import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrettycode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";

export const Docs = defineDocumentType(() => ({
    name: "Docs",
    filePathPattern: `**/*.mdx`,
    contentType: "mdx",
    fields: {
        title: {
            type: "string",
            description: "The title of the post",
            required: true,
        },
    },
    computedFields: {
        url: {
            type: "string",
            resolve: (post) => {
                if (post._raw.flattenedPath.length === 0) return "/docs";

                return `/docs/${post._raw.flattenedPath}`;
            },
        },
    },
}));

export const Meta = defineDocumentType(() => ({
    name: "Meta",
    filePathPattern: `**/meta.json`,
    contentType: "data",
    fields: {
        title: {
            type: "string",
            description: "The title of the folder",
            required: false,
        },
        pages: {
            type: "list",
            of: {
                type: "string",
            },
            description: "Pages of the folder",
            default: [],
        },
    },
    computedFields: {
        url: {
            type: "string",
            resolve: (post) =>
                post._raw.sourceFileDir === "."
                    ? "/docs"
                    : `/docs/${post._raw.sourceFileDir}`,
        },
    },
}));

export default makeSource({
    contentDirPath: "docs",
    documentTypes: [Docs, Meta],
    mdx: {
        rehypePlugins: [
            [
                rehypePrettycode,
                {
                    theme: "css-variables",
                },
            ],
            rehypeSlug,
        ],
        remarkPlugins: [remarkGfm],
    },
});
