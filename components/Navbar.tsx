"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from "@/components/ui/sheet"
import { Logo } from "@/components/Logo"
import { useTranslations, useLocale } from "next-intl"
import { useRouter, usePathname } from "@/i18n/navigation"

function LanguageSwitcher({ mobile = false }: { mobile?: boolean }) {
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  const handleSwitch = (newLocale: "en" | "mk") => {
    router.replace(pathname, { locale: newLocale })
  }

  if (mobile) {
    return (
      <div className="flex items-center gap-2">
        <button
          onClick={() => handleSwitch("en")}
          className={`text-xs font-semibold tracking-widest uppercase transition-colors cursor-pointer ${
            locale === "en" ? "text-brand-red" : "text-white/40 hover:text-white/70"
          }`}
        >
          EN
        </button>
        <span className="text-white/20 text-xs">|</span>
        <button
          onClick={() => handleSwitch("mk")}
          className={`text-xs font-semibold tracking-widest uppercase transition-colors cursor-pointer ${
            locale === "mk" ? "text-brand-red" : "text-white/40 hover:text-white/70"
          }`}
        >
          МК
        </button>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-1.5">
      <button
        onClick={() => handleSwitch("en")}
        className={`text-xs font-semibold tracking-wider transition-colors cursor-pointer px-1 ${
          locale === "en" ? "text-brand-red" : "text-gray-400 hover:text-foreground"
        }`}
      >
        EN
      </button>
      <span className="text-gray-300 text-xs">|</span>
      <button
        onClick={() => handleSwitch("mk")}
        className={`text-xs font-semibold tracking-wider transition-colors cursor-pointer px-1 ${
          locale === "mk" ? "text-brand-red" : "text-gray-400 hover:text-foreground"
        }`}
      >
        МК
      </button>
    </div>
  )
}

export function Navbar() {
  const t = useTranslations("nav")

  const navLinks = [
    { href: "#home", label: t("home") },
    { href: "#about", label: t("about") },
    { href: "#services", label: t("services") },
    { href: "#contact", label: t("contact") },
  ]

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Logo />

          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-semibold tracking-wider transition-colors ${
                  index === 0 ? "text-brand-red" : "text-gray-500 hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <LanguageSwitcher />
            <Link
              href="#contact"
              className="blob-button bg-foreground text-white px-8 py-4 text-xs font-semibold tracking-wider transition-transform hover:scale-105 cursor-pointer"
            >
              {t("bookConsultation")}
            </Link>
          </div>

          {/* Mobile */}
          <div className="flex md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <button type="button" className="p-2 cursor-pointer text-foreground" aria-label="Open menu">
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>

              <SheetContent side="left" showCloseButton={false} className="bg-foreground border-0 w-[78vw] sm:max-w-xs p-0 flex flex-col">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex items-center justify-between px-8 pt-8 pb-6 border-b border-white/10">
                  <Logo className="text-white" />
                  <SheetClose asChild>
                    <button type="button" className="text-white/50 hover:text-white transition-colors cursor-pointer" aria-label="Close menu">
                      <X className="h-5 w-5" />
                    </button>
                  </SheetClose>
                </div>

                <nav className="flex flex-col px-8 pt-10 gap-1">
                  {navLinks.map((link, index) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className={`text-3xl font-bold tracking-tight py-3 border-b border-white/5 transition-colors ${
                          index === 0 ? "text-brand-red" : "text-white/70 hover:text-white"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>

                <div className="mt-auto px-8 pb-12 pt-10">
                  <SheetClose asChild>
                    <Link
                      href="#contact"
                      className="block text-center blob-button bg-brand-red text-white px-8 py-4 text-xs font-semibold tracking-widest transition-transform hover:scale-105"
                    >
                      {t("bookConsultation")}
                    </Link>
                  </SheetClose>
                  <div className="mt-8 flex items-center justify-between">
                    <p className="text-xs text-white/30 font-medium tracking-wider uppercase">
                      Conevski · Skopje
                    </p>
                    <LanguageSwitcher mobile />
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
