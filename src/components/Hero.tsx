import {
  CalendarDays,
  MapPin,
  Phone,
  ShieldCheck,
  Wrench,
} from 'lucide-react';
import { business } from '../business';

const Hero = () => {
  return (
    <section id="home" className="scroll-mt-32 overflow-hidden bg-[#f5f3ef] text-[#202020]">
      <div className="relative">
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 md:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.12em] text-[#d91c1c]">
              <ShieldCheck className="h-5 w-5" />
              MTA Assured · Devonport
            </div>
            <h1 className="max-w-3xl text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Your local workshop in{' '}
              <span className="text-[#d91c1c]">Devonport.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
              WOF inspections, batteries, servicing, mechanical repairs and brakes
              at 1 Wynyard Street.
            </p>

            <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-2">
              <a
                href={business.phoneHref}
                className="flex min-h-16 items-center gap-3 rounded-xl bg-[#d91c1c] px-5 py-3 text-white transition-colors hover:bg-[#b91616]"
              >
                <Phone className="h-6 w-6 shrink-0" />
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.12em] text-white/65">
                    Call the workshop
                  </span>
                  <span className="mt-0.5 block text-lg font-black">{business.phoneDisplay}</span>
                </span>
              </a>
              <a
                href={business.bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-16 items-center gap-3 rounded-xl bg-[#202020] px-5 py-3 text-white transition-colors hover:bg-black"
              >
                <CalendarDays className="h-6 w-6 shrink-0" />
                <span>
                  <span className="block text-xs font-bold uppercase tracking-[0.12em] text-white/55">
                    Book online
                  </span>
                  <span className="mt-0.5 block text-lg font-black">Book a service</span>
                </span>
              </a>
            </div>

            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-slate-600 transition-colors hover:text-[#d91c1c]"
            >
              <MapPin className="h-5 w-5 text-[#d91c1c]" />
              {business.address}
            </a>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-stone-300 bg-white shadow-xl shadow-black/10">
              <img
                src="https://images.pexels.com/photos/3806288/pexels-photo-3806288.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Mechanic inspecting a vehicle engine"
                className="h-[360px] w-full object-cover sm:h-[430px]"
              />
              <div className="flex items-center gap-4 border-t border-slate-200 bg-white p-4 text-slate-900">
                <div className="h-14 w-14 shrink-0 overflow-hidden rounded-lg border border-slate-200 bg-white p-1">
                  <img
                    src="/mta-assured.jpg"
                    alt="MTA Assured"
                    className="h-full w-full rounded-md object-cover"
                  />
                </div>
                <div>
                  <p className="font-black text-[#202020]">MTA Assured</p>
                  <p className="text-sm text-slate-600">Wynyard Street Motors, Devonport</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-y border-stone-200 bg-white">
        <div className="mx-auto grid max-w-7xl divide-y divide-stone-200 px-4 sm:px-6 md:grid-cols-3 md:divide-x md:divide-y-0 lg:px-8">
          <a
            href={business.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-4 py-5 transition-colors hover:bg-stone-50 md:px-6"
          >
            <MapPin className="h-6 w-6 shrink-0 text-[#d91c1c]" />
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">Find us</p>
              <p className="mt-1 font-semibold text-slate-800">{business.address}</p>
            </div>
          </a>
          <a
            href={business.phoneHref}
            className="flex items-center gap-4 py-5 transition-colors hover:bg-stone-50 md:px-6"
          >
            <Phone className="h-6 w-6 shrink-0 text-[#d91c1c]" />
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">Call the workshop</p>
              <p className="mt-1 font-semibold text-slate-800">{business.phoneDisplay}</p>
            </div>
          </a>
          <a
            href="#services"
            className="flex items-center gap-4 py-5 transition-colors hover:bg-stone-50 md:px-6"
          >
            <Wrench className="h-6 w-6 shrink-0 text-[#d91c1c]" />
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">What we do</p>
              <p className="mt-1 font-semibold text-slate-800">{business.services.join(' · ')}</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;