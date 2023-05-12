import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-col gap-3 mx-auto w-full max-w-normal min-h-screen p-8 py-16 sm:px-14 xl:p-24">
            {children}
        </div>
    );
}
