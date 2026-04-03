"use client";

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { routing, type Locale } from '@/i18n/routing';

export function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    const handleChange = (newLocale: Locale) => {
        router.replace(pathname, { locale: newLocale });
    };

    return (
        <div className="flex items-center gap-1 rounded-full border border-white/10 bg-background/50 p-1">
            {routing.locales.map((loc) => (
                <button
                    key={loc}
                    onClick={() => handleChange(loc)}
                    className={`rounded-full px-3 py-1 text-sm font-medium transition-colors ${locale === loc
                            ? 'bg-foreground text-background'
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                >
                    {loc.toUpperCase()}
                </button>
            ))}
        </div>
    );
}
