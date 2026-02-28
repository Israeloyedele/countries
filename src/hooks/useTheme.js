import { useEffect, useState } from "react";

export function useTheme() {
    const getInitialTheme = () => {
        const stored = localStorage.getItem("theme");
        if (stored) return stored;

        return window.matchMedia("(prefers-color-scheme: dark)").matches
            ? "dark"
            : "light";
    };

    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        document.documentElement.classList.remove("light", "dark");
        document.documentElement.classList.add(theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () =>
        setTheme(prev => (prev === "dark" ? "light" : "dark"));

    return { theme, toggleTheme };
}