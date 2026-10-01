import { CheckCircle2, MapPin, Phone } from 'lucide-react';
import { business } from '../business';

const About = () => {
  return (
    <section id="about" className="scroll-mt-32 bg-[#f5f3ef] py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl bg-white shadow-lg shadow-black/10">
          <img
            src="https://images.pexels.com/photos/4489741/pexels-photo-4489741.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Mechanic working inside an automotive workshop"
            className="relative h-[420px] w-full object-cover sm:h-[500px]"
          />
          <div className="relative flex items-center gap-4 bg-[#202020] p-5 text-white">
            <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl border border-white/20 bg-white p-1">
              <img
                src="/mta-assured.jpg"
                alt="MTA Assured"
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <div>
              <p className="font-black text-white">MTA Assured</p>
              <p className="text-sm leading-5 text-white/60">
                Wynyard Street Motors, Devonport
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 lg:pl-8 lg:pt-0">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#d91c1c]">
            About
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            An MTA Assured workshop in Devonport.
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Wynyard Street Motors is at {business.address}. The workshop provides
            WOF inspections, batteries, servicing, mechanical repairs and brake work.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              'WOF inspections',
              'Batteries',
              'Servicing',
              'Mechanical repairs',
              'Brakes',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 font-semibold text-slate-800">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#d91c1c]" />
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#202020] px-6 py-3 font-bold text-white transition-colors hover:bg-black"
            >
              <MapPin className="h-5 w-5" />
              Get directions
            </a>
            <a
              href={business.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-[#d91c1c] px-6 py-3 font-bold text-[#d91c1c] transition-colors hover:bg-[#d91c1c] hover:text-white"
            >
              <Phone className="h-5 w-5" />
              Call the workshop
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;