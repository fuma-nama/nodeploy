import { searchDocs } from "@/lib/search";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("query");

    if (query == null) return NextResponse.error();

    const res = searchDocs(query);

    return NextResponse.json(res);
}

export type SearchDocsResult = ReturnType<typeof searchDocs>;
