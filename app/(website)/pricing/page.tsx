import { CheckIcon } from "lucide-react";
import { Card } from "./card";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pricing",
};

export default function PricingPage() {
    return (
        <div className="flex flex-col p-8 sm:p-14 xl:p-24 mb-20">
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
        </div>
    );
}
