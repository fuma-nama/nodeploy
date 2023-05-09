"use client";

import { useTheme } from "next-themes";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "./select";
import { MoonIcon, SunIcon, MonitorIcon } from "lucide-react";
import { useEffect, useState } from "react";

export function ThemeSwitch() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <div className="w-[130px] h-[40px] mt-3" />;

    return (
        <Select value={theme} onValueChange={(v) => setTheme(v)}>
            <SelectTrigger className="gap-3 w-[130px] h-[40px] mt-3">
                {theme === "light" ? (
                    <SunIcon className="w-3 h-3" />
                ) : theme === "dark" ? (
                    <MoonIcon className="w-3 h-3" />
                ) : (
                    <MonitorIcon className="w-3 h-3" />
                )}
                <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
            </SelectContent>
        </Select>
    );
}
