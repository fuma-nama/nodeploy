import { ReactNode } from "react";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";

import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: {
        template: "%s | No Deploy",
        default: "No Deploy",
    },
    description: "The hosting platform that supports Nothing",
    openGraph: {
        url: "https://nodeploy-neon.vercel.app",
        title: {
            template: "%s | No Deploy",
            default: "No Deploy",
        },
        description: "The hosting platform that supports Nothing",
        images: "/banner.png",
        siteName: "No Deploy",
    },
    twitter: {
        card: "summary_large_image",
        creator: "@money_is_shark",
        images: "/banner.png",
    },
    metadataBase:
        process.env.VERCEL_URL != null
            ? new URL(`https://${process.env.VERCEL_URL}`)
            : new URL(`http://localhost:${process.env.PORT || 3000}`),
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ThemeProvider attribute="class">{children}</ThemeProvider>
            </body>
        </html>
    );
}
