import { CalendarDays, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { business } from '../business';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#171717] text-white">
      <div className="h-1.5 bg-[#d91c1c]" />
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.35fr_0.7fr_1fr]">
          <div>
            <img
              src="/logo.png"
              alt={business.name}
              className="h-auto w-full max-w-[330px]"
            />
            <p className="mt-5 max-w-md leading-7 text-white/65">
              Local automotive care in Devonport for WOFs, batteries, servicing,
              repairs, and brakes.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm font-bold text-white/70">
              <ShieldCheck className="h-4 w-4" />
              MTA Assured
            </div>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.16em] text-[#ef4444]">
              Quick links
            </h4>
            <ul className="mt-5 space-y-3">
              {[
                ['Home', 'home'],
                ['Services', 'services'],
                ['Bookings', 'bookings'],
                ['About us', 'about'],
                ['Contact', 'contact'],
              ].map(([label, sectionId]) => (
                <li key={sectionId}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(sectionId)}
                    className="text-white/65 transition-colors hover:text-white"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.16em] text-[#ef4444]">
              Contact
            </h4>
            <div className="mt-5 space-y-5">
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 text-white/65 transition-colors hover:text-white"
              >
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#ef4444]" />
                {business.address}
              </a>
              <a
                href={business.phoneHref}
                className="flex items-center gap-3 text-white/65 transition-colors hover:text-white"
              >
                <Phone className="h-5 w-5 shrink-0 text-[#ef4444]" />
                {business.phoneDisplay}
              </a>
              <a
                href={business.bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#d91c1c] px-5 py-3 font-bold text-white transition-colors hover:bg-[#b91616]"
              >
                <CalendarDays className="h-4 w-4" />
                Book online
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-7 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <p>{business.services.join(' · ')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;