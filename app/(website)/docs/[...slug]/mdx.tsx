"use client";
import { Docs } from "contentlayer/generated";
import { CheckIcon, CopyIcon, LinkIcon } from "lucide-react";
import { useMDXComponent } from "next-contentlayer/hooks";
import Link from "next/link";
import {
    ComponentProps,
    createElement,
    useEffect,
    useRef,
    useState,
} from "react";

function heading<T extends keyof JSX.IntrinsicElements>(
    element: T,
    className: string,
    { id, children, ...props }: ComponentProps<T>
) {
    return createElement(element, {
        ...props,
        className: `group font-bold ${className}`,
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
                h1: (props) => heading("h1", "text-4xl", props),
                h2: (props) => heading("h2", "text-3xl", props),
                h3: (props) => heading("h3", "text-2xl", props),
                h4: (props) => heading("h4", "text-xl", props),
                h5: (props) => heading("h5", "text-lg", props),
                h6: (props) => heading("h6", "test-base", props),
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
                code: (props) => (
                    <code
                        {...props}
                        className="p-3 rounded-xl border-[1px] bg-secondary overflow-x-auto"
                    >
                        {props.children}
                    </code>
                ),
            }}
        />
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
