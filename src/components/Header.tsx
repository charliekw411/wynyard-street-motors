import { useState } from 'react';
import { CalendarDays, MapPin, Menu, Phone, ShieldCheck, X } from 'lucide-react';
import { business } from '../business';

const navItems = [
  { label: 'Services', sectionId: 'services' },
  { label: 'About', sectionId: 'about' },
  { label: 'Contact', sectionId: 'contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white">
      <div className="bg-[#202020] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-sm sm:px-6 lg:px-8">
          <a
            href={business.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 text-white/90 transition-colors hover:text-white sm:flex"
          >
            <MapPin className="h-4 w-4 text-[#ef4444]" />
            {business.address}
          </a>
          <div className="flex items-center gap-2 text-white/90 sm:hidden">
            <ShieldCheck className="h-4 w-4 text-[#ef4444]" />
            MTA Assured workshop
          </div>
          <a
            href={business.phoneHref}
            className="flex items-center gap-2 font-semibold transition-colors hover:text-[#fca5a5]"
          >
            <Phone className="h-4 w-4 text-[#ef4444]" />
            {business.phoneDisplay}
          </a>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:h-24 lg:px-8">
          <a href="#home" aria-label={`${business.name} home`} className="shrink-0">
            <img
              src="/logo.png"
              alt={business.name}
              className="h-auto w-[220px] sm:w-[290px]"
            />
          </a>

          <nav className="hidden items-center gap-5 lg:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <button
                key={item.sectionId}
                type="button"
                onClick={() => scrollToSection(item.sectionId)}
                className="text-sm font-bold uppercase tracking-[0.08em] text-slate-700 transition-colors hover:text-[#d91c1c]"
              >
                {item.label}
              </button>
            ))}
            <div className="ml-2 flex items-center gap-2">
              <a
                href={business.phoneHref}
                className="inline-flex items-center gap-2 rounded-lg bg-[#202020] px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-black"
              >
                <Phone className="h-4 w-4" />
                Call
              </a>
              <a
                href={business.bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#d91c1c] px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-[#b91616]"
              >
                <CalendarDays className="h-4 w-4" />
                Book
              </a>
            </div>
          </nav>

          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-lg border border-slate-300 p-2 text-slate-700 transition-colors hover:border-[#d91c1c] hover:text-[#d91c1c]"
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="border-t border-slate-100 bg-white px-4 pb-5 pt-3 shadow-xl lg:hidden">
            <nav className="mx-auto max-w-7xl space-y-1" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <button
                  key={item.sectionId}
                  type="button"
                  onClick={() => scrollToSection(item.sectionId)}
                  className="block w-full px-3 py-3 text-left font-semibold text-slate-700 transition-colors hover:bg-stone-100 hover:text-[#d91c1c]"
                >
                  {item.label}
                </button>
              ))}
              <div className="mt-3 grid grid-cols-2 gap-3">
                <a
                  href={business.phoneHref}
                  className="flex items-center justify-center gap-2 rounded-lg bg-[#202020] px-4 py-3 font-bold text-white"
                >
                  <Phone className="h-5 w-5" />
                  Call
                </a>
                <a
                  href={business.bookingUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-lg bg-[#d91c1c] px-4 py-3 font-bold text-white"
                >
                  <CalendarDays className="h-5 w-5" />
                  Book
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;