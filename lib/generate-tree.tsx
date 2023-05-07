import { Docs, Meta, allDocs, allMeta } from "@/.contentlayer/generated";

export type TreeNode = FileNode | Separator | FolderNode;

export type FileNode = {
    type: "page";
    name: Docs["title"];
    url: Docs["url"];
};

export type Separator = {
    type: "separator";
    name: string;
};

export type FolderNode = {
    type: "folder";
    name: string;
    url: string;
    index?: FileNode;
    children: TreeNode[];
};

export function buildPageTree(meta: Meta): TreeNode[] {
    const folder = meta._raw.sourceFileDir.split("/").filter((c) => c !== ".");

    return meta.pages.flatMap<TreeNode>((item) => {
        const separator = /---(.*?)---/;

        const result = separator.exec(item);

        if (result != null)
            return {
                type: "separator",
                name: result[1],
            };

        const path = [...folder, item].join("/");
        const page = allDocs.find((page) => page._raw.flattenedPath === path);
        const meta = allMeta.find((meta) => meta._raw.sourceFileDir === path);

        if (meta != null)
            return {
                type: "folder",
                url: meta.url,
                index:
                    page != null
                        ? {
                              name: page.title,
                              url: page.url,
                              type: "page",
                          }
                        : undefined,
                name: meta.title ?? "",
                children: buildPageTree(meta),
            };

        if (page != null)
            return {
                type: "page",
                name: page.title,
                url: page.url,
            };

        return [];
    });
}
