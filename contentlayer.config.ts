import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrettycode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

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
            resolve: (post) => `/docs/${post._raw.flattenedPath}`,
        },
        pathSegments: {
            type: "json",
            resolve: (doc) =>
                doc._raw.flattenedPath
                    .split("/")
                    .slice(1)
                    .map((dirName) => {
                        const re = /^((\d+)-)?(.*)$/;
                        const [, , orderStr, pathName] =
                            dirName.match(re) ?? [];
                        const order = orderStr ? parseInt(orderStr) : 0;
                        return { order, pathName };
                    }),
        },
    },
}));

export default makeSource({
    contentDirPath: "docs",
    documentTypes: [Docs],
    mdx: {
        rehypePlugins: [[rehypePrettycode, { theme: "github-dark" }]],
        remarkPlugins: [remarkGfm],
    },
});
