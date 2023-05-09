import { allDocs } from "@/.contentlayer/generated";
import FlexSearch from "flexsearch";

type Docs = {
    title: string;
    content: string;
    url: string;
};

const index = new FlexSearch.Document<Docs, ["title", "url"]>({
    tokenize: "forward",
    optimize: true,
    resolution: 9,
    cache: 100,
    document: {
        id: "url",
        store: ["title", "url"],
        index: [
            {
                field: "title",
                tokenize: "forward",
                optimize: true,
                resolution: 9,
            },
            {
                field: "content",
                tokenize: "strict",
                optimize: true,
                resolution: 9,
                context: {
                    depth: 1,
                    resolution: 3,
                },
            },
        ],
    },
});

for (const docs of allDocs) {
    index.add({
        title: docs.title,
        url: docs.url,
        content: docs.body.raw,
    });
}

export function searchDocs(query: string) {
    const results = index.search(query, 5, {
        enrich: true,
        suggest: true,
    });

    return results[0]?.result ?? [];
}
