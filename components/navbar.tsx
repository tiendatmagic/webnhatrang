"use client";

import * as React from "react";
import { Button } from "./ui/button";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-surface/70 backdrop-blur-md border-b border-white/20 shadow-xs">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-8 py-4">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <img
            src="/logowebsite.png"
            alt="Logo Web Nha Trang"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a
            className="text-primary font-bold border-b-2 border-primary text-label-md pb-1"
            href="#home"
          >
            Trang chủ
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors hover:bg-black/5 text-label-md pb-1 px-2 rounded-md"
            href="#services"
          >
            Dịch vụ
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors hover:bg-black/5 text-label-md pb-1 px-2 rounded-md"
            href="#pricing"
          >
            Bảng giá
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors hover:bg-black/5 text-label-md pb-1 px-2 rounded-md"
            href="#process"
          >
            Quy trình
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors hover:bg-black/5 text-label-md pb-1 px-2 rounded-md"
            href="#contact"
          >
            Liên hệ
          </a>
        </div>

        {/* Start Button & Hamburger (Mobile) */}
        <div className="flex items-center gap-3">
          <a href="https://zalo.me/0933663112" target="_blank" rel="noopener noreferrer">
            <Button size="default" className="hidden sm:inline-flex">
              Bắt đầu ngay
            </Button>
          </a>
          
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-on-surface-variant hover:text-primary transition-colors focus:outline-hidden"
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined text-2xl">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-outline-variant/30 shadow-lg px-6 py-4 flex flex-col space-y-4 animate-in fade-in slide-in-from-top-5 duration-200">
          <a
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-primary font-bold text-label-md py-2 border-b border-outline-variant/10"
            href="#home"
          >
            Trang chủ
          </a>
          <a
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-on-surface-variant hover:text-primary text-label-md py-2 border-b border-outline-variant/10"
            href="#services"
          >
            Dịch vụ
          </a>
          <a
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-on-surface-variant hover:text-primary text-label-md py-2 border-b border-outline-variant/10"
            href="#pricing"
          >
            Bảng giá
          </a>
          <a
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-on-surface-variant hover:text-primary text-label-md py-2 border-b border-outline-variant/10"
            href="#process"
          >
            Quy trình
          </a>
          <a
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-on-surface-variant hover:text-primary text-label-md py-2"
            href="#contact"
          >
            Liên hệ
          </a>
          <a
            onClick={() => setIsMobileMenuOpen(false)}
            href="https://zalo.me/0933663112"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full pt-2"
          >
            <Button className="w-full">Bắt đầu ngay</Button>
          </a>
        </div>
      )}
    </nav>
  );
}
