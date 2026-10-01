import {
  Battery,
  CalendarDays,
  ClipboardCheck,
  Disc3,
  Phone,
  Settings,
  Wrench,
} from 'lucide-react';
import { business } from '../business';

const Services = () => {
  const services = [
    {
      icon: ClipboardCheck,
      title: 'WOF inspections',
      description: 'Straightforward WOF inspections from our Devonport workshop.',
    },
    {
      icon: Battery,
      title: 'Batteries',
      description: 'Battery testing and replacement when your car is slow to start or will not start.',
    },
    {
      icon: Settings,
      title: 'Servicing',
      description: 'Regular servicing to keep your vehicle running as it should.',
    },
    {
      icon: Wrench,
      title: 'Mechanical repairs',
      description: 'Fault finding and mechanical repairs for everyday vehicle problems.',
    },
    {
      icon: Disc3,
      title: 'Brakes',
      description: 'Brake inspections and repairs when something does not feel or sound right.',
    },
  ];

  return (
    <section id="services" className="scroll-mt-32 bg-[#f5f3ef] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#d91c1c]">
            Workshop services
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            WOFs, servicing and repairs.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            Available from our workshop at 1 Wynyard Street, Devonport.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="flex h-full flex-col rounded-xl border border-stone-300 border-t-4 border-t-[#d91c1c] bg-white p-7 shadow-sm"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-red-50 text-[#d91c1c]">
                <service.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-6 text-2xl font-black text-slate-900">{service.title}</h3>
              <p className="mt-3 flex-1 leading-7 text-slate-600">{service.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-xl border border-stone-300 bg-white px-6 py-7 shadow-sm sm:flex-row sm:px-8">
          <div>
            <p className="text-xl font-black text-slate-900">Want to discuss an issue?</p>
            <p className="mt-1 text-slate-600">
              Call the workshop, or book online for a WOF, service or planned visit.
            </p>
          </div>
          <div className="grid w-full gap-3 sm:w-auto sm:grid-cols-2">
            <a
              href={business.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#d91c1c] px-6 py-3 font-bold text-white transition-colors hover:bg-[#b91616]"
            >
              <Phone className="h-5 w-5" />
              Call the workshop
            </a>
            <a
              href={business.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#202020] px-6 py-3 font-bold text-white transition-colors hover:bg-black"
            >
              <CalendarDays className="h-5 w-5" />
              Book online
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;