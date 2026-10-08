"use client";

import { useState } from "react";

const initialFormState = {
  email: "",
  name: "",
  message: "",
};

export default function ScheduleMeeting() {
  const [formData, setFormData] = useState(initialFormState);
  const [status, setStatus] = useState("idle"); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    await new Promise((resolve) => setTimeout(resolve, 1200));

    setStatus("success");
    setFormData(initialFormState);
  };

  return (
    <section id="contact" className="bg-[#C9D6D6] px-6 py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 md:grid-cols-[1.3fr_1fr] md:items-center">
        <div>
        <h2 className="text-3xl font-semibold leading-[40px] md:text-5xl md:leading-[60px] tracking-[-0.5px] text-[#182434]">
        Let&apos;s talk about how digital initiatives can transform your business
        </h2>
          <p className="mt-4 text-lg leading-8 tracking-normal text-[#182434]">
            We&apos;ll happily assist in exploring what will work best for you.
            Like,<br></br> really best.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
          <h3 className="text-[30px] font-medium leading-[60px] tracking-[-0.5px] text-[#131728]">Schedule Meeting</h3>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-xs font-medium text-[#131728]">
            
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              required
              value={formData.email}
              onChange={handleChange}
              disabled={status === "loading"}
              className="h-[72px] w-full max-w-[488px] placeholder:text-lg rounded-md border border-[#2D4362] bg-white px-4 py-3 placeholder:text-[#182434] outline-none focus:border-[#2D4362] disabled:opacity-60"
            />
          </div>

          <div className="flex flex-col gap-6">
            <label htmlFor="name" className="text-xs font-medium text-navy/70">
            
            </label>
            <input
              id="name"
              type="text"
              name="name"
              placeholder="Name"
              required
              value={formData.name}
              onChange={handleChange}
              disabled={status === "loading"}
              className="h-[72px] w-full max-w-[488px] rounded-md border border-[#2D4362] bg-white px-4 py-3 placeholder:text-lg placeholder:text-[#182434] outline-none focus:border-[#2D4362] disabled:opacity-60"
            />
          </div>

          <div className="flex flex-col gap-3">
            <label htmlFor="message" className="text-xs font-medium text-navy/70">
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              disabled={status === "loading"}
               className="h-[72px] w-full max-w-[488px] resize-none rounded-md border border-[#2D4362] bg-white px-4 py-3 placeholder:text-lg placeholder:text-[#182434] outline-none focus:border-[#2D4362] disabled:opacity-60"
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="mt-5 self-center md:self-start rounded-full bg-[#182434] h-[50px] w-[152px] text-base font-semibold leading-6 text-[#F6F6F6] transition-colors hover:bg-[#182434] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {status === "loading" ? "Submitting..." : "Submit"}
          </button>

          {status === "success" && (
            <p role="status" className="text-sm text-navy/70">
              Thanks — we&apos;ll be in touch shortly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}