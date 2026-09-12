"use client";
import { useState, useRef } from "react";

const projects = [
  { id: 1, img: "/images/Mask group.png" },
  { id: 2, img: "/images/Mask group (1).png" },
  { id: 3, img: "/images/Rectangle 2838.jpg" },
  
];

export default function ProjectsSection() {
  const [current, setCurrent] = useState(0);
  const [dragX, setDragX] = useState(0);
  const startX = useRef(0);
  const dragging = useRef(false);

  const getX = (e) => e.touches? e.touches[0].clientX : e.clientX;

  const onStart = (e) => {
    dragging.current = true;
    startX.current = getX(e);
  };

  const onMove = (e) => {
    if (!dragging.current) return;
    const diff = getX(e) - startX.current;
    setDragX(diff);
  };

  const onEnd = () => {
    if (!dragging.current) return;
    dragging.current = false;

    if (dragX < -60 && current < projects.length - 1) {
      setCurrent(c => c + 1);
    } else if (dragX > 60 && current > 0) {
      setCurrent(c => c - 1);
    }
    setDragX(0);
  };

  return (
    <section className="w-full bg-white py-14 md:py-20 overflow-hidden select-none">
      <div className="max-w-[1140px] mx-auto px-6">
        <div className="text-center">
          <h2 className="text-[35px] font-medium leading-[56px] tracking-[-0.5px] text-[#182434]">Our Recent AI Projects</h2>
          <p className="mt-2  mx-auto text-center text-[16px] font-normal leading-[28px] tracking-normal text-[#182434]">
            As one of India's leading AI development companies, SysAlly offers the following <br></br> services to businesses.
          </p>
          <div className="mx-auto mt-4 h-[3px] w-30 rounded-full bg-[#0393B0]" />
        </div>
      </div>

      
      <div className="mt-15 w-full pl-6 md:pl-[max(24px,calc((100vw-1140px)/2+24px))] cursor-grab active:cursor-grabbing">
        <div
          className="flex gap-8 touch-pan-y"
          style={{
            transform: `translateX(calc(-${current * 52}% + ${dragX}px))`,
            transition: dragging.current? 'none' : 'transform 0.5s cubic-bezier(0.25,1,0.5,1)'
          }}
          onTouchStart={onStart}
          onTouchMove={onMove}
          onTouchEnd={onEnd}
          onMouseDown={onStart}
          onMouseMove={onMove}
          onMouseUp={onEnd}
          onMouseLeave={onEnd}
        >
          {projects.map((p) => (
  <div
    key={p.id}
    className={`shrink-0 ${
      p.id === 1 ? "w-[calc(100vw-48px)] md:w-[719px]"
      : p.id === 2 ? "w-[calc(100vw-48px)] md:w-[659px]"
      : "w-[calc(100vw-48px)] md:w-[719px]"
    }`}
  >
   <div className="h-[260px] md:h-[503px] w-full overflow-hidden rounded-[8px] bg-[#E5E7EB]">
      <img
        src={p.img}
        alt=""
        className="h-full w-full object-cover pointer-events-none"
        draggable={false}
      />
    </div>
  </div>
))}
        </div>
      </div>
      <div className="mt-11 text-center">
          <a
            href="#"
            className="inline-block rounded-full bg-[#182434] px-8 py-3 text-base font-medium text-white hover:bg-navyLight transition-colors"
          >
            View all services
          </a>
        </div>
    </section>
  );
}