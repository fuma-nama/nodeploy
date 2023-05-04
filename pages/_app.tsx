import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <DefaultSeo
                titleTemplate="No Deploy | %s"
                description="The hosting platform that supports Nothing"
                openGraph={{
                    url: "https://nodeploy-neon.vercel.app",
                    title: "No Deploy",
                    description: "The hosting platform that supports Nothing",
                    images: [
                        {
                            url: "/banner.png",
                            width: 2507,
                            height: 884,
                            alt: "Banner",
                            type: "image/png",
                        },
                    ],
                    siteName: "No Deploy",
                }}
                twitter={{
                    handle: "@money_is_shark",
                    cardType: "summary_large_image",
                }}
            />
            <Component {...pageProps} />
        </>
    );
}
