"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import CloseIcon from "@mui/icons-material/Close";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  navItems: {
    label: string;
    href: string;
    icon: React.ElementType;
  }[];
}

export default function MobileMenu({
  open,
  onClose,
  navItems,
}: MobileMenuProps) {
  const pathname = usePathname();
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  return (
    <div
      aria-hidden={!open}
      className={`fixed inset-0 z-60 transition-all duration-300 md:hidden ${
        open
          ? "pointer-events-auto bg-black/60 opacity-100"
          : "pointer-events-none opacity-0"
      }`}
    >
      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        className={`absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col border-l border-white/10 bg-neutral-950/60 p-6 shadow-2xl backdrop-blur-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-10 flex items-center justify-between">
          <div>
            <p className="text-lg font-semibold text-white">
              Navigation
            </p>

            <p className="text-sm text-white/60">
              Explore the website
            </p>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Close mobile menu"
            onClick={onClose}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:bg-white/20"
          >
            <CloseIcon sx={{ fontSize: 20 }} />
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-2 p-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={onClose}
                className={`group relative overflow-hidden rounded-2xl px-4 py-4 text-base font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-white text-black shadow-[0_0_30px_rgba(255,255,255,0.15)]"
                    : "text-white/75 hover:bg-white/10 hover:text-white"
                }`}
              >
                <span className="relative z-10 flex items-center gap-4">
                  <item.icon
                    sx={{
                      fontSize: 22,
                      opacity: isActive ? 1 : 0.7,
                      transition: "0.3s",
                    }}
                  />

                  <span>{item.label}</span>
                </span>

                <span
                  className={`absolute left-0 top-1/2 h-8 w-1 -translate-y-1/2 rounded-r-full bg-white transition-all duration-300 ${
                    isActive
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-60"
                  }`}
                />
              </Link>
            );
          })}
        </nav>
      </div>

      <button
        type="button"
        aria-label="Close menu overlay"
        onClick={onClose}
        className="absolute inset-0 -z-10 cursor-default"
      />
    </div>
  );
}