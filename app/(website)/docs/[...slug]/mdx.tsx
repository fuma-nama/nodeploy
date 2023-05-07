"use client";
import { Docs } from "contentlayer/generated";
import { CheckIcon, CopyIcon } from "lucide-react";
import { useMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";
import { ComponentPropsWithoutRef, useEffect, useRef, useState } from "react";

export function MdxContent({ docs }: { docs: Docs }) {
    const MDX = useMDXComponent(docs.body.code);

    return (
        <MDX
            components={{
                h1: (props) => <h1 className="font-bold text-4xl" {...props} />,
                h2: (props) => <h2 className="font-bold text-3xl" {...props} />,
                h3: (props) => <h3 className="font-bold text-2xl" {...props} />,
                h4: (props) => <h4 className="font-bold text-xl" {...props} />,
                h5: (props) => <h5 className="font-bold text-lg" {...props} />,
                pre: (props) => {
                    const ref = useRef<HTMLPreElement>(null);

                    return (
                        <pre {...props} ref={ref} className="relative">
                            <CopyButton
                                onCopy={() => {
                                    if (
                                        ref.current == null ||
                                        ref.current.textContent == null
                                    )
                                        return;

                                    navigator.clipboard.writeText(
                                        ref.current.textContent
                                    );
                                }}
                            />
                            {props.children}
                        </pre>
                    );
                },
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
                            className="text-purple-400 underline"
                        />
                    );
                },
                code: CodeBlock,
            }}
        />
    );
}

function CodeBlock(props: ComponentPropsWithoutRef<"code">) {
    return (
        <code
            {...props}
            className="p-3 rounded-xl border-[1px] bg-secondary overflow-x-auto"
        >
            {props.children}
        </code>
    );
}

function CopyButton({ onCopy }: { onCopy: () => void }) {
    const [checked, setChecked] = useState(false);

    const onClick = () => {
        onCopy();
        setChecked(true);
    };

    useEffect(() => {
        if (!checked) return;

        const timer = setTimeout(() => {
            setChecked(false);
        }, 1500);

        return () => {
            clearTimeout(timer);
        };
    }, [checked]);

    return (
        <button
            className="absolute top-0 right-0 p-2 bg-secondary text-secondary-foreground border-[1px]"
            onClick={onClick}
        >
            {checked ? (
                <CheckIcon className="w-3 h-3" />
            ) : (
                <CopyIcon className="w-3 h-3" />
            )}
        </button>
    );
}
