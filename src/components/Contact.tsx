import { CalendarDays, ExternalLink, MapPin, Phone, ShieldCheck, Wrench } from 'lucide-react';
import { business } from '../business';

const Contact = () => {
  return (
    <section id="contact" className="scroll-mt-32 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#d91c1c]">
            Contact Wynyard Street Motors
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Visit, call, or book online.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Find the workshop at 1 Wynyard Street in Devonport, or call the team to
            discuss what your vehicle needs.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-2xl border border-stone-300 shadow-lg shadow-black/10 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="bg-[#202020] p-8 text-white sm:p-10 lg:p-12">
            <h3 className="text-3xl font-black">Workshop details</h3>
            <div className="mt-8 space-y-7">
              <a
                href={business.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-4 rounded-lg p-2 transition-colors hover:bg-white/5"
              >
                <div className="mt-0.5 rounded-lg bg-white/10 p-3 text-[#ef4444]">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.14em] text-white/45">Address</p>
                  <p className="mt-1 text-lg font-semibold">{business.address}</p>
                  <span className="mt-2 inline-flex items-center gap-1 text-sm text-[#fca5a5]">
                    Open in Google Maps
                    <ExternalLink className="h-3.5 w-3.5" />
                  </span>
                </div>
              </a>

              <a
                href={business.phoneHref}
                className="flex items-start gap-4 rounded-lg p-2 transition-colors hover:bg-white/5"
              >
                <div className="mt-0.5 rounded-lg bg-white/10 p-3 text-[#ef4444]">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.14em] text-white/45">Phone</p>
                  <p className="mt-1 text-lg font-semibold">{business.phoneDisplay}</p>
                  <span className="mt-2 block text-sm text-[#fca5a5]">
                    Call for current workshop hours
                  </span>
                </div>
              </a>

              <div className="flex items-start gap-4 p-2">
                <div className="mt-0.5 rounded-lg bg-white/10 p-3 text-[#ef4444]">
                  <Wrench className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.14em] text-white/45">Services</p>
                  <p className="mt-1 leading-7 text-white/80">{business.services.join(' · ')}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                <ShieldCheck className="h-6 w-6 shrink-0 text-[#ef4444]" />
                <p className="font-bold">MTA Assured automotive workshop</p>
              </div>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <a
                href={business.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-4 font-bold text-[#202020] transition-colors hover:bg-stone-100"
              >
                <Phone className="h-5 w-5" />
                Call
              </a>
              <a
                href={business.bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#d91c1c] px-5 py-4 font-bold text-white transition-colors hover:bg-[#b91616]"
              >
                <CalendarDays className="h-5 w-5" />
                Book
              </a>
            </div>
          </div>

          <div className="min-h-[430px] bg-[#f5f3ef] p-3 sm:p-5">
            <iframe
              src={business.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '430px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${business.name} location`}
              className="h-full w-full rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;