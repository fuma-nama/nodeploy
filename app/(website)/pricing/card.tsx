"use client";
import clsx from "clsx";
import { ReactNode, useState } from "react";

export function Card({ children }: { children: ReactNode }) {
    const [marker, setMarker] = useState<[x: number, y: number]>();
    const [position, setPosition] =
        useState<[x: number, y: number, deg: number]>();

    return (
        <div
            onMouseMove={(e) => {
                const bound = e.currentTarget.getBoundingClientRect();
                const xDif = e.clientX - (bound.left + bound.width / 2);
                const yDif = e.clientY - (bound.top + bound.height / 2);

                setPosition([
                    xDif / (bound.width / 2),
                    yDif / -(bound.height / 2),
                    Math.sqrt(Math.pow(xDif, 2) + Math.pow(yDif, 2)) * 0.05,
                ]);
                setMarker([e.clientX - bound.x, e.clientY - bound.y]);
            }}
            onMouseLeave={() => {
                setPosition(undefined);
                setMarker(undefined);
            }}
        >
            <div
                className={clsx(
                    "z-[2] relative w-full flex flex-col gap-3 rounded-2xl bg-background text-foreground p-6 border-2 border-border",
                    "md:p-10",
                    position != null
                        ? "overflow-hidden shadow-purple-400/30"
                        : "transition-all duration-300"
                )}
                style={{
                    boxShadow:
                        position != null
                            ? `${position[0] * -10}px ${
                                  position[1] * 10
                              }px 40px var(--tw-shadow-color)`
                            : undefined,
                    transform:
                        position != null
                            ? `rotate3d(${position[1]},${position[0]},0,${position[2]}deg)`
                            : undefined,
                }}
            >
                {marker != null && (
                    <div
                        className="w-52 h-52 bg-purple-400/20 absolute rounded-full blur-3xl -translate-y-[50%] -translate-x-[50%] -z-[1]"
                        style={{
                            top: marker[1],
                            left: marker[0],
                        }}
                    />
                )}
                {children}
            </div>
        </div>
    );
}
