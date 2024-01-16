import React from "react";
import { Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";

import { useTheme } from "@/hooks/use-theme";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Navbar() {
  const [theme, setTheme] = useTheme({ disableTransitionOnChange: true });

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-14 items-center">
        <Link to="/">Solo Anime</Link>

        <nav></nav>

        <div className="flex flex-1 items-center justify-end gap-2">
          <Input className="h-9 w-64" />
          <Button size="sm">Login</Button>
          <Button size="icon" onClick={toggleTheme} className="h-9 w-9">
            {theme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
}
