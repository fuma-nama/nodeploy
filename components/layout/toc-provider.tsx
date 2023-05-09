"use client";
import { ReactElement, ReactNode, useEffect, useMemo, useRef } from "react";
import { createContext, useContext, useState } from "react";

type ActiveAnchor = Record<
    string,
    {
        isActive?: boolean;
        aboveHalfViewport: boolean;
        index: number;
        insideHalfViewport: boolean;
    }
>;

const ActiveAnchorContext = createContext<ActiveAnchor>({});

export const useActiveAnchor = () => useContext(ActiveAnchorContext);

export const ActiveAnchorProvider = ({
    headings,
    children,
}: {
    headings: string[];
    children: ReactNode;
}): ReactElement => {
    const [activeAnchor, setActiveAnchor] = useState<ActiveAnchor>({});

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                setActiveAnchor((f) => {
                    const ret = { ...f };

                    for (const entry of entries) {
                        const headingIdx = headings.findIndex(
                            (heading) => heading === entry.target.id
                        );

                        if (entry?.rootBounds && headingIdx !== -1) {
                            const aboveHalfViewport =
                                entry.boundingClientRect.y +
                                    entry.boundingClientRect.height <=
                                entry.rootBounds.y + entry.rootBounds.height;
                            const insideHalfViewport =
                                entry.intersectionRatio > 0;
                            ret[entry.target.id] = {
                                index: headingIdx,
                                aboveHalfViewport,
                                insideHalfViewport,
                            };
                        }
                    }

                    let activeSlug = "";
                    let smallestIndexInViewport = Infinity;
                    let largestIndexAboveViewport = -1;
                    for (const s in ret) {
                        ret[s].isActive = false;
                        if (
                            ret[s].insideHalfViewport &&
                            ret[s].index < smallestIndexInViewport
                        ) {
                            smallestIndexInViewport = ret[s].index;
                            activeSlug = s;
                        }
                        if (
                            smallestIndexInViewport === Infinity &&
                            ret[s].aboveHalfViewport &&
                            ret[s].index > largestIndexAboveViewport
                        ) {
                            largestIndexAboveViewport = ret[s].index;
                            activeSlug = s;
                        }
                    }

                    if (ret[activeSlug]) ret[activeSlug].isActive = true;
                    return ret;
                });
            },
            {
                rootMargin: "0px 0px -50%",
                threshold: [0, 1],
            }
        );

        for (const heading of headings) {
            const element = document.getElementById(heading);

            if (element != null) {
                observer.observe(element);
            }
        }

        return () => {
            observer.disconnect();
        };
    }, [headings]);

    return (
        <ActiveAnchorContext.Provider value={activeAnchor}>
            {children}
        </ActiveAnchorContext.Provider>
    );
};
