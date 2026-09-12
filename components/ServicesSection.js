"use client";

import { useState } from "react";
import { services } from "@/app/content";
import ServiceAccordion from "./ServiceAccordion";

const orbitItems = [
  { label: "Automation", angle: 250 },
  { label: "Cloud computing", angle: 320 },
  { label: "Big data", angle: 20 },
  { label: "Autonomous", angle: 80 },
  { label: "IoT", angle: 130 },
  { label: "Data management", angle: 200 },
];

export default function ServicesSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="services" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-4xl font-medium text-[#182434]">
            Our Artificial Intelligence Services
          </h2>
          <p className="mt-7 text-base font-normal leading-7 text-[#182434]">
            As one of India&apos;s leading AI development companies, SysAlly offers
            the following <br></br> services to businesses.
          </p>
          <div className="mx-auto mt-4 h-[3px] w-30 rounded-full bg-[#0393B0]" />
        </div>

        <div className="mt-25 grid grid-cols-1 items-center gap-[40px] xl:grid-cols-2 xl:gap-0">
         
          
        <div className="mx-auto w-full md:w-[400px] lg:w-[500px] xl:w-full">
  <img
    src="/images/AI.svg"
    alt="Artificial Intelligence services"
    className="h-auto w-full scale-100"
  />
</div>

          
          <div className="flex flex-col gap-5 lg:translate-x-0">
            {services.map((service, i) => (
              <ServiceAccordion
                key={service.title}
                title={service.title}
                description={service.description}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </div>

        <div className="mt-17 text-center">
          <a
            href="#"
            className="inline-block rounded-full bg-[#182434] px-8 py-3 text-base font-medium text-white hover:bg-navyLight transition-colors"
          >
            View all services
          </a>
        </div>
      </div>
    </section>
  );
}