"use client"
import { useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@heroui/react";
import { usePathname } from "next/navigation";
import NextLink from "next/link";
import { useAuthModal } from "./UI/AuthModal";
import MobileMenu from "./UI/MobileMenu";

export const AcmeLogo = () => {
  return (
    <div className="flex items-center gap-2 group">
      {/* Ювелирный логотип */}
      <div className="relative">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 shadow-lg shadow-pink-500/50 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-pink-500/70">
          {/* Иконка украшения */}
          <svg 
            className="w-7 h-7 text-white" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 9l10 13L22 9 12 2z"/>
          </svg>
        </div>
        {/* Блеск */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Текст логотипа */}
      <div className="flex flex-col">
        <span className="text-xl font-bold bg-gradient-to-r from-pink-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
          LuxeGems
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium -mt-1">
          Ювелирные украшения
        </span>
      </div>
    </div>
  );
};

// Новый набор пунктов меню
const navItems = [
  { href: "/services", label: "Каталог" },
  { href: "/collections", label: "Коллекции" },
  { href: "/about", label: "О бренде" },
  { href: "/contacts", label: "Контакты" }
];

export default function Header() {
  const pathname = usePathname();
  const { openModal } = useAuthModal();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <>
      <Navbar 
        className="border-b border-gray-200/50 dark:border-gray-800/50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 shadow-sm"
        maxWidth="full"
        height="80px"
      >
      <NavbarBrand className="gap-3">
        <NextLink href="/jewelry" className="flex items-center gap-2 group">
          <AcmeLogo />
        </NextLink>
      </NavbarBrand>
        
        <NavbarContent className="hidden sm:flex gap-6" justify="center">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (pathname === "/" && item.href === "/jewelry");
          return (
            <NavbarItem key={item.href} isActive={isActive}>
              <Link 
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`${
                  isActive 
                    ? "text-pink-600 dark:text-pink-400 font-semibold" 
                    : "text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 font-medium"
                } transition-colors duration-200 relative group`}
              >
                {item.label}
                <span 
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-pink-600 to-indigo-600 ${
                    isActive 
                      ? "w-full" 
                      : "w-0 group-hover:w-full transition-all duration-300"
                  }`}></span>
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>
      
      <NavbarContent justify="end" className="gap-3">
        <NavbarItem className="hidden lg:flex">
          <Button 
            onClick={() => openModal("login")}
            variant="light"
            className="text-gray-700 dark:text-gray-300 hover:text-pink-600 dark:hover:text-pink-400 font-medium"
          >
            Войти
          </Button>
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <Button 
            onClick={() => openModal("register")}
            className="bg-gradient-to-r from-pink-600 to-indigo-600 text-white font-semibold shadow-lg shadow-pink-400/30 hover:shadow-xl hover:shadow-pink-400/40 transition-all duration-300 hover:scale-105"
          >
            Регистрация
          </Button>
        </NavbarItem>

        {/* Mobile Menu Button */}
        <NavbarItem className="flex sm:hidden">
          <Button
            isIconOnly
            variant="light"
            onClick={() => setIsMobileMenuOpen(true)}
            className="text-gray-700 dark:text-gray-300"
            aria-label="Открыть меню"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>

    {/* Mobile Menu */}
    <MobileMenu 
      isOpen={isMobileMenuOpen} 
      onClose={() => setIsMobileMenuOpen(false)} 
    />
    </>
  );
}
