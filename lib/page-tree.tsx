import { Meta, allMeta } from "@/.contentlayer/generated";
import { TreeNode, buildPageTree } from "./generate-tree";

const rootMeta = allMeta.find((meta) => meta._raw.flattenedPath === "meta")!;

declare global {
    var cached_meta: Meta | undefined;
    var pageTree: TreeNode[] | undefined;
}

if (global.cached_meta !== rootMeta) {
    global.pageTree = undefined;
    global.cached_meta = rootMeta;
}

export function getPageTree() {
    if (global.pageTree != null) return global.pageTree;

    return (global.pageTree = buildPageTree(rootMeta));
}
