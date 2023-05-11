import clsx from "clsx";
import { Docs } from "contentlayer/generated";
import { LinkIcon } from "lucide-react";
import { useMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";
import { ComponentProps, createElement } from "react";

import { Card, Cards } from "@/components/mdx/card";
import { Pre } from "@/components/mdx/pre";

function heading<T extends keyof JSX.IntrinsicElements>(
    element: T,
    { id, children, ...props }: ComponentProps<T>
) {
    return createElement(element, {
        ...props,
        className: clsx(`group`, props.className),
        children: [
            <span id={id} className="absolute -mt-20" />,
            children,
            <a
                href={`#${id}`}
                className="opacity-0 group-hover:opacity-100 inline-block ml-2 text-muted-foreground"
            >
                <LinkIcon className="w-4 h-4" />
            </a>,
        ],
    });
}

export function MdxContent({ docs }: { docs: Docs }) {
    const MDX = useMDXComponent(docs.body.code);

    return (
        <MDX
            components={{
                Card: Card,
                Cards: Cards,
                pre: (props) => <Pre {...props} />,
                h1: (props) => heading("h1", props),
                h2: (props) => heading("h2", props),
                h3: (props) => heading("h3", props),
                h4: (props) => heading("h4", props),
                h5: (props) => heading("h5", props),
                h6: (props) => heading("h6", props),
                a: ({ href, ref, ...props }) => {
                    if (href == null) return <></>;

                    const isExternalUrl = !(
                        href.startsWith("/") || href.startsWith("#")
                    );

                    return (
                        <Link
                            {...props}
                            href={href}
                            target={isExternalUrl ? "_blank" : "_self"}
                            rel={isExternalUrl ? "noreferrer" : undefined}
                        />
                    );
                },
            }}
        />
    );
}
