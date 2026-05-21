"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import MenuIcon from "@mui/icons-material/Menu";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ArticleOutlinedIcon from "@mui/icons-material/ArticleOutlined";
import ExploreIcon from "@mui/icons-material/Explore";

import MobileMenu from "./MobileMenu";

const navItems = [
  { label: "Home", href: "/", icon: HomeOutlinedIcon },
  { label: "Explore", href: "/countries", icon: ExploreIcon },
  { label: "About", href: "/about", icon: InfoOutlinedIcon },
  { label: "Blog", href: "/blog", icon: ArticleOutlinedIcon },
];

export default function Navbar() {
  const pathname = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed left-1/2 top-5 z-50 flex h-17 w-[90%] max-w-5xl -translate-x-1/2 items-center justify-between rounded-2xl px-8 transition ${
          isScrolled
            ? "border-b border-white/10 bg-black/40 shadow-lg backdrop-blur-2xl"
            : ""
        }`}
      >
        <div className="flex h-20 w-full items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-lg font-bold tracking-wide text-white md:text-xl">
              Country Explorer
            </span>
          </Link>

          <nav className="ml-auto hidden items-center gap-2 md:flex">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`relative rounded-full px-4 py-2 text-md font-medium transition-all duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.label}

                  <span
                    className={`absolute inset-x-2 -bottom-1 h-0.75 rounded-full bg-white transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isActive
                        ? "scale-x-100 opacity-100"
                        : "scale-x-0 opacity-0"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <button
            type="button"
            aria-label="Open mobile menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen(true)}
            className="ml-auto flex h-11 w-11 items-center justify-center text-white/70 transition hover:text-white md:hidden"
          >
            <MenuIcon sx={{ fontSize: 24 }} />
          </button>
        </div>
      </header>

      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        navItems={navItems}
      />
    </>
  );
}