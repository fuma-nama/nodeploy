import { CheckIcon } from "lucide-react";
import { Card } from "./card";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { absoluteUrl } from "@/lib/absolute-url";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
    title: "Pricing",
    description: "The Pricing of No Deploy",
    openGraph: {
        title: "Pricing",
        description: "The Pricing of No Deploy",
        url: "https://nodeploy-neon.vercel.app",
        images: "/banner.png",
        siteName: "No Deploy",
    },
    twitter: {
        title: "Pricing",
        description: "The Pricing of No Deploy",
        card: "summary_large_image",
        creator: "@money_is_shark",
        images: "/banner.png",
    },
    metadataBase: absoluteUrl(),
};

export default function PricingPage() {
    return (
        <div className="flex flex-col p-8 py-16 sm:px-14 xl:p-24 mb-20">
            <Content />
        </div>
    );
}

function Content() {
    return (
        <div className="flex flex-col gap-3 mx-auto w-full max-w-screen-2xl">
            <h1 className="text-4xl font-bold">
                Best Pricing for your Solution
            </h1>
            <p className="text-sm text-muted-foreground">
                No Price, No Feature, No Limit
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                <Card>
                    <div>
                        <h2 className="font-semibold">Free</h2>
                        <h2 className="font-bold text-3xl">$0 / Month</h2>
                        <p className="text-sm text-muted-foreground">
                            For personal projects
                        </p>
                    </div>
                    <ul className="text-muted-foreground text-sm flex flex-col gap-2 mt-6">
                        {[
                            "0 API calls per week",
                            "0 Regions",
                            "0KB Brandwidth",
                        ].map((item) => (
                            <li>
                                <CheckIcon className="inline text-background rounded-full p-0.5 w-4 h-4 bg-foreground mr-2" />
                                {item}
                            </li>
                        ))}
                    </ul>
                    <Button size="sm" variant="secondary" className="mt-6">
                        Ship Now
                    </Button>
                </Card>
                <Card>
                    <div>
                        <h2 className="font-semibold">Premium</h2>
                        <h2 className="font-bold text-3xl">$0 / Month</h2>
                        <p className="text-sm text-muted-foreground">
                            For small Business
                        </p>
                    </div>
                    <ul className="text-muted-foreground text-sm flex flex-col gap-2 mt-6">
                        {[
                            "0 API calls per week",
                            "0 Regions",
                            "0KB Brandwidth",
                        ].map((item, i) => (
                            <li key={i}>
                                <CheckIcon className="inline text-background rounded-full p-0.5 w-4 h-4 bg-foreground mr-2" />
                                {item}
                            </li>
                        ))}
                    </ul>
                    <Button size="sm" className="mt-6">
                        Start Trial
                    </Button>
                </Card>
                <Card>
                    <div>
                        <h2 className="font-semibold">Enterprise</h2>
                        <h2 className="font-bold text-3xl">Custom</h2>
                        <p className="text-sm text-muted-foreground">
                            For large Companies
                        </p>
                    </div>
                    <ul className="text-muted-foreground text-sm flex flex-col gap-2 mt-6">
                        {[
                            "0 API calls per week",
                            "0 Regions",
                            "0KB Brandwidth",
                        ].map((item) => (
                            <li>
                                <CheckIcon className="inline text-background rounded-full p-0.5 w-4 h-4 bg-foreground mr-2" />
                                {item}
                            </li>
                        ))}
                    </ul>
                    <Button size="sm" className="mt-6" variant="outline">
                        Contact Us
                    </Button>
                </Card>
            </div>

            <h2 className="mt-12 text-2xl font-bold">FAQ</h2>
            <Accordion type="single" collapsible>
                <AccordionItem value="money">
                    <AccordionTrigger>
                        Do we need to pay money to No Deploy?
                    </AccordionTrigger>
                    <AccordionContent>
                        No, you don't have to pay to any costs. No Deploy will
                        pay all the costs for you since your code hadn't
                        deployed to anywhere
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="over-limit">
                    <AccordionTrigger>
                        What should I do if I went over my limit?
                    </AccordionTrigger>
                    <AccordionContent>
                        Since we hope developers don't have to worry about
                        anything. Nothing will be affected after going over your
                        limit
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="usage">
                    <AccordionTrigger>
                        How does the usage being calculated?
                    </AccordionTrigger>
                    <AccordionContent>
                        We don't calculate your usage, because we have no limit
                        on anything
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="change-plan">
                    <AccordionTrigger>
                        How do I upgrade or downgrade to another plan?
                    </AccordionTrigger>
                    <AccordionContent>
                        You can delete your account and create another one
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
