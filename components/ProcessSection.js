"use client";
import { useState } from "react";

const steps = [
  {
    id: "01",
    title: "Identifying The Problem",
    desc: "The first step of building your custom AI solutions begins with identifying the problems or opportunities that the system can solve. Our team runs a thorough analysis to examine the pain points of the project and create a business case. Analyzing the current practices and data sets is necessary to identify areas for implementing automation and development.",
    image: "/ai-process-1.jpg" 
  },
  { id: "02", title: "Preparing The Data", desc: "We collect, clean, validate and structure your raw data to make it AI-ready. This ensures model accuracy and removes bias from the dataset.", image: "/ai-process-1.jpg" },
  { id: "03", title: "The Suited AI Model", desc: "We choose the right architecture - LLM, Vision, or Predictive - based on your business goal, data type and required performance.", image: "/ai-process-1.jpg" },
  { id: "04", title: "Training The Model", desc: "Model is trained and fine-tuned with hyperparameter optimization to achieve maximum accuracy and stability.", image: "/ai-process-1.jpg" },
  { id: "05", title: "Testing & Validation", desc: "We rigorously test the model for accuracy, security and scalability before production.", image: "/ai-process-1.jpg" },
  { id: "06", title: "Deployment", desc: "We deploy the solution to your infrastructure with CI/CD and zero downtime.", image: "/ai-process-1.jpg" },
  { id: "07", title: "Support & Evolution", desc: "Continuous monitoring, retraining and improvement post-deployment.", image: "/ai-process-1.jpg" },
];

export default function ProcessSection() {
  const [active, setActive] = useState(0);
  const startIndex = Math.min(Math.max(active - 3, 0), steps.length - 4);

  return (
<section className="w-full bg-[#0E172A] py-16 text-white md:py-20">
<div className="mx-auto max-w-6xl">

        
        <div className="text-center">
          <h2 className="text-[35px] font-medium leading-[56px] tracking-[-0.5px] text-white">Our AI Development Process</h2>
          <p className="mt-3 max-w-[800px] mx-auto text-[16px] font-normal leading-[28px] tracking-normal text-center text-white">
            Developing an AI solution according to your needs involves a structured approach<br className="hidden md:block"/>
            to assure its success and effectiveness. Our expert AI developers ensure the<br className="hidden md:block"/>
            project's success by following a systematic process in building your artificial<br className="hidden md:block"/>
            intelligence solution.
          </p>
          <div className="mx-auto mt-4 h-[3px] w-30 rounded-full bg-[#0393B0]" />
        </div>

        
        <div className="mt-12 relative">
          <div className="flex justify-center lg:justify-end lg:max-xl:pr-7 items-center gap-2 mb-3">
            <button onClick={() => setActive(p => (p - 1 + steps.length) % steps.length)} className="w-12 h-12 rounded-full  flex items-center justify-center  hover:bg-white hover:text-black transition"><img
  src="/images/Frame 85.svg"
  alt="arrow"
  className="h-[47px] w-[47px]"
/></button>
            <span className="text-[20px] font-medium tracking-[-0.5px]">{active + 1} / {steps.length}</span>
            <button onClick={() => setActive(p => (p + 1) % steps.length)} className="w-12 h-12 rounded-full  flex items-center justify-center text-[12px] hover:bg-white hover:text-black transition"><img
  src="/images/Frame 86.svg"
  alt="arrow"
  className="h-[47px] w-[47px]"
/></button>
          </div>

         
          <div className="h-[3px] w-full bg-[#232F4A] relative">
  <div
    className="absolute top-0 left-0 h-[1px] bg-white transition-all duration-500"
    style={{ width: `${(100 / steps.length) * (active + 1)}%` }}
  />
</div>

         
          <div className="mx-auto w-full max-w-6xl overflow-hidden px-0">
  <div
    className="flex w-full transition-transform duration-500"
    style={{
      transform: `translateX(-${startIndex * 100}%)`,
    }}
  >
    {steps.map((s, i) => (
      <button
        key={s.id}
        onClick={() => setActive(i)}
        className={`relative w-full md:w-1/2 lg:w-1/3 xl:w-1/4 shrink-0 text-center lg:text-center pt-5 text-[20px] font-medium leading-[32px] tracking-[-0.3px] ${
          i === active
            ? "text-white before:absolute before:left-0 before:top-0 before:h-[1px] before:w-[90%] before:bg-white"
            : "text-[#6B7890] hover:text-[#A8B3C7]"
        }`}
      >
        {s.title}
      </button>
    ))}
  </div>
</div>
        </div>

        
        <div className="mt-15 grid grid-cols-1 items-start gap-6 xl:grid-cols-[453px_643.84px] xl:justify-center">
          
          <div className="min-h-[270px] w-full rounded-[8px] bg-white px-8 py-5 text-black">
  <span className="text-[20px] font-medium leading-7 text-[#1A1A24]">
    {steps[active].id}
  </span>

  <p className="mt-3 text-[14px] font-normal leading-6 text-[#1A1A24]">
    {steps[active].desc}
  </p>
</div>

<div className="aspect-[643.84/447.49] w-full overflow-hidden rounded-[8px]">
  <img
    src="/images/Rectangle 2838.jpg"
    alt="AI Process"
    className="h-full w-full object-cover"
  />
</div>
        </div>
      </div>
    </section>
  );
}