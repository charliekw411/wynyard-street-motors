import { CalendarDays, ExternalLink, Phone } from 'lucide-react';
import { business } from '../business';

const Bookings = () => {
  return (
    <section id="bookings" className="scroll-mt-32 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#d91c1c]">
            Get in touch
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Choose the option that suits you.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Speak directly with the workshop when you need advice, or book online
            when you are ready to choose a service and time.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <article className="flex flex-col rounded-2xl border border-stone-300 bg-[#f5f3ef] p-8 shadow-sm sm:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#d91c1c] text-white">
              <Phone className="h-7 w-7" />
            </div>
            <h3 className="mt-6 text-3xl font-black text-slate-900">Call the workshop</h3>
            <p className="mt-4 flex-1 text-lg leading-8 text-slate-600">
              Best when you are unsure what your car needs, have a fault to discuss,
              or would rather speak with someone directly.
            </p>
            <a
              href={business.phoneHref}
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-[#d91c1c] px-7 py-4 text-lg font-bold text-white transition-colors hover:bg-[#b91616]"
            >
              <Phone className="h-5 w-5" />
              {business.phoneDisplay}
            </a>
          </article>

          <article className="flex flex-col rounded-2xl border border-stone-300 bg-[#f5f3ef] p-8 shadow-sm sm:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#202020] text-white">
              <CalendarDays className="h-7 w-7" />
            </div>
            <h3 className="mt-6 text-3xl font-black text-slate-900">Book online</h3>
            <p className="mt-4 flex-1 text-lg leading-8 text-slate-600">
              Best for planned servicing or repair work when you already know what
              you need and want to choose a suitable appointment time.
            </p>
            <a
              href={business.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-lg bg-[#202020] px-7 py-4 text-lg font-bold text-white transition-colors hover:bg-black"
            >
              Book a service
              <ExternalLink className="h-5 w-5" />
            </a>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Bookings;