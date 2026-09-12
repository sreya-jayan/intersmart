"use client";

import { useState } from "react";
import { navLinks } from "@/app/content";

const slides = [
  {
    heading: "AI development company\nIn India",
    text: "One of the leading AI development companies in India with remarkable expertise\nin artificial intelligence solutions. Our forte in AI technologies spans diverse\nverticals like machine learning (ML).....",
  },
  {
    heading: "Machine learning at\nenterprise scale",
    text: "We build production-grade ML systems that turn your data into predictions, automation, and measurable business outcomes.",
  },
  {
    heading: "NLP that understands\nyour customers",
    text: "From intelligent chatbots to document automation, our NLP solutions make\nsense of unstructured language data.",
  },
];

export default function Hero() {
  const [active, setActive] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const slide = slides[active];

  return (
    <section
      className="
        relative  min-h-screen  overflow-hidden 
        bg-navy
        bg-[url('/images/Layer_1.png')]
        text-white">
     
      <header className="relative z-50">
      <nav className="relative mx-auto flex w-full max-w-6xl items-center justify-center  max-[620px]:pt-6 sm:py-10 lg:px-7 xl:px-0">
         
          <a href="#" className="flex items-center">
            <img
              src="/images/intersmart-logo.png"
              alt="Intersmart"
              className="w-64 max-[500px]:w-48 h-auto"
            />
          </a>

        
          <ul className="ml-auto hidden items-center font-medium gap-6 xl:gap-10 text-base lg:flex">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="transition-colors hover:[#232F4A]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

         
          <a href="#contact" className="hidden ml-15 rounded-full bg-white w-36 h-12 text-base font-medium text-navy md:flex items-center justify-center">
            Get in touch
          </a>

         
          <button
            type="button"
            className="absolute right-4 text-white md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu">

            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  menuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </nav>

       
        {menuOpen && (
          <div className="border-t border-white/10 px-6 pb-4 md:hidden">
            <ul className="flex flex-col gap-4 pt-4 text-sm">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="
                mt-4 block rounded-full bg-white
                px-5 py-2 text-center text-sm
                font-medium text-navy
              "
              onClick={() => setMenuOpen(false)}
            >
              Get in touch
            </a>
          </div>
        )}
      </header>

      
      
      <div
  className="
  relative z-10 mx-auto w-full
  grid max-w-6xl grid-cols-1
  items-center lg:px-7 xl:px-0
  lg:pt-24 xl:pt-40 lg:pb-30 max-[620px]:pt-20
"
>

        
        <div>
        <h1 className="whitespace-pre-line text-4xl font-semibold leading-tight sm:text-4xl lg:text-6xl lg:tracking-tighter max-md:text-center md:max-lg:pl-8">
          {slide.heading}
        </h1>

          <p className="mt-4 max-w-[340px] whitespace-pre-line font-normal leading-6 text-white sm:max-w-2xl text-xs min-[321px]:text-sm sm:text-base max-md:text-center max-md:mx-auto md:max-lg:pl-8">
            {slide.text}
          </p>

          <a href="#contact" className="mt-6 mx-auto md:mx-0 md:max-lg:ml-8 flex h-12 w-36 items-center justify-center
          rounded-full bg-white text-base font-medium text-navy">
          Reach us
          </a>
        </div>
      </div>

      
      <div className="relative z-10 flex justify-center gap-2 pb-8">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`
              h-2 rounded-full transition-all
              ${
                i === active
                  ? "w-6 bg-[#232F4A]"
                  : "w-2 bg-white/30"
              }
            `}
          />
        ))}
      </div>
    </section>
  );
}