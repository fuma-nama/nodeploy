import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <div className="flex flex-col p-8 py-16 sm:px-14 xl:p-24 relative">
            <div className="flex flex-col gap-3 mx-auto w-full max-w-screen-2xl min-h-screen">
                {children}
            </div>
        </div>
    );
}
