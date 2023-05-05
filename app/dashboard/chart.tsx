"use client";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

export function Chart({ data }: { data: any[] }) {
    return (
        <div className="mt-7 w-full h-[300px] max-w-xl">
            <ResponsiveContainer>
                <BarChart
                    width={600}
                    height={300}
                    data={data}
                    margin={{ left: -30 }}
                >
                    <Bar
                        dataKey="money"
                        fill="rgb(192 132 252)"
                        radius={[10, 10, 0, 0]}
                    />
                    <XAxis
                        dataKey="name"
                        stroke="hsl(215.4 16.3% 56.9%)"
                        axisLine={false}
                        tickLine={false}
                        fontSize="14px"
                    />
                    <YAxis
                        stroke="hsl(215.4 16.3% 56.9%)"
                        axisLine={false}
                        tickLine={false}
                        fontSize="12px"
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
