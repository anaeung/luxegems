"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@heroui/react";
import { useAuthModal } from "./AuthModal";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { href: "/cars", label: "Автомобили" },
  { href: "/services", label: "Услуги" },
  { href: "/about", label: "О нас" },
  { href: "/contacts", label: "Контакты" }
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const { openModal } = useAuthModal();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // Блокируем скролл при открытом меню
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Закрываем меню при изменении маршрута
  useEffect(() => {
    if (isOpen) {
      onClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const handleLinkClick = () => {
    onClose();
  };

  if (!isOpen || !mounted) return null;

  const menuContent = (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[9998]"
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white dark:bg-gray-900 shadow-2xl z-[9999] flex flex-col"
          >
            {/* Decorative gradient top */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600" />

            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
              <Link href="/cars" onClick={handleLinkClick} className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 shadow-lg shadow-blue-500/50 flex items-center justify-center">
                  <svg 
                    className="w-6 h-6 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                    <path 
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0"
                    />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    AvtoPetro
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                    Автомобили
                  </span>
                </div>
              </Link>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-2 rounded-xl text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800/50 transition-all duration-200"
                aria-label="Закрыть меню"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Navigation Items */}
            <nav className="flex-1 overflow-y-auto py-6">
              <div className="px-4 space-y-2">
                {navItems.map((item, index) => {
                  const isActive = pathname === item.href || (pathname === "/" && item.href === "/cars");
                  return (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={handleLinkClick}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`block px-4 py-3 rounded-xl font-medium transition-all duration-200 relative ${
                        isActive
                          ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                          : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800/50"
                      }`}
                    >
                      {item.label}
                      {isActive && (
                        <motion.div
                          layoutId="mobileActiveIndicator"
                          className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-r-full"
                          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                    </motion.a>
                  );
                })}
              </div>
            </nav>

            {/* Auth Buttons */}
            <div className="p-6 border-t border-gray-200 dark:border-gray-800 space-y-3">
              <Button
                onClick={() => {
                  openModal("login");
                  onClose();
                }}
                variant="bordered"
                className="w-full text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500 dark:hover:border-blue-500 font-medium border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
                size="lg"
                radius="lg"
              >
                Войти
              </Button>
              <Button
                onClick={() => {
                  openModal("register");
                  onClose();
                }}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300"
                size="lg"
                radius="lg"
              >
                Регистрация
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return createPortal(menuContent, document.body);
}

