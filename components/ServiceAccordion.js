export default function ServiceAccordion({ title, description, isOpen, onClick }) {
    return (
      <div className={`rounded-md ${isOpen ? "bg-offwhite" : "bg-offwhite"}`}>
        <button
          onClick={onClick}
          className="flex w-full items-center justify-between px-10 py-6 text-left"
        >
          <span className="text-[22px] font-medium leading-8 tracking-tight  text-[#131728]">{title}</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className={`shrink-0 text-[#131728] transition-transform ${
              isOpen ? "rotate-90" : ""
            }`}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
  
        {isOpen && (
          <p className="px-10 pb-15 text-[15px] font-normal leading-7 text-[#182434] whitespace-pre-line">
            {description}
          </p>
        )}
      </div>
    );
  }