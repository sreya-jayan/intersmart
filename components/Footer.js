"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#1A2332] text-white">
   <div className="mx-auto w-full max-w-none px-6 pt-24 pb-28 md:pt-32 md:pb-36 lg:max-w-6xl">
       
        <div className="flex flex-col items-center gap-10 text-center md:flex-row md:items-start md:justify-between md:text-left">
          
          <div>
          <h3 className="mb-5 font-medium text-[24px] leading-8 tracking-[-0.3px] text-[#F1F1F1]">
            Services
          </h3> 
            <ul className="space-y-7">
              <li>
                <Link href="#" className="text-[16px] font-normal leading-7 tracking-normal text-[#F6F6F6] hover:text-white transition-colors">
                  Hyperparameter model tuning
                </Link>
              </li>
              <li>
              <Link href="#" className="text-[16px] font-normal leading-7 tracking-normal text-[#F6F6F6] hover:text-white transition-colors">
                  PoC of AI Solutions
                </Link>
              </li>
              <li>
              <Link href="#" className="text-[16px] font-normal leading-7 tracking-normal text-[#F6F6F6] hover:text-white transition-colors">
                  AI Model Optimization
                </Link>
              </li>
              <li>
              <Link href="#" className="text-[16px] font-normal leading-7 tracking-normal text-[#F6F6F6] hover:text-white transition-colors">
                  AI Consultation
                </Link>
              </li>
            </ul>
          </div>

         
          <div>
          <h3 className="mb-5 font-medium text-[24px] leading-8 tracking-[-0.3px] text-[#F1F1F1]">
            pages
          </h3>
            <ul className="space-y-7">
              <li>
              <Link href="#" className="text-[16px] font-normal leading-7 tracking-normal text-[#F6F6F6] hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
              <Link href="#" className="text-[16px] font-normal leading-7 tracking-normal text-[#F6F6F6] hover:text-white transition-colors">
                  Technology
                </Link>
              </li>
              <li>
              <Link href="#" className="text-[16px] font-normal leading-7 tracking-normal text-[#F6F6F6] hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
              <Link href="#" className="text-[16px] font-normal leading-7 tracking-normal text-[#F6F6F6] hover:text-white transition-colors">
                  virtual team
                </Link>
              </li>
              <li>
              <Link href="#" className="text-[16px] font-normal leading-7 tracking-normal text-[#F6F6F6] hover:text-white transition-colors">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

         
          <div>
          <h3 className=" mb-5 font-medium text-[24px] leading-8 tracking-[-0.3px] text-[#F1F1F1]">
          Stay connected
          </h3>
            <div className="flex items-center gap-3">
             
              <a href="#" className="w-10 h-10 flex items-center justify-center">
               <img src="/images/facebook.svg" alt="facebook"/>
              </a>
              
              <a href="#" className="w-10 h-10 flex items-center justify-center">
              <img src="/images/instagram.svg" alt="facebook"/>
              </a>
              
              <a href="#" className="w-10 h-10 flex items-center justify-center">
              <img src="/images/linkedin.svg" alt="facebook"/>
              </a>
              
              <a href="#" className="w-10 h-10 flex items-center justify-center">
              <img src="/images/twitter.svg" alt="facebook"/>
              </a>
            </div>
          </div>
        </div>

       
        <div className="mt-10 flex flex-col items-center gap-2 text-center md:mt-16 md:flex-row md:items-center md:justify-between md:text-left">
        <p className="text-sm leading-6 md:text-[16px] md:leading-7">
            ©️ 2023 intersmart Ltd. All rights reserved.
          </p>
          <p className="text-sm leading-6 md:text-base md:leading-7">
            <Link href="#" className="hover:text-white">Privacy Policy</Link>
            <span className="mx-1">|</span>
            <Link href="#" className="hover:text-white">GDPR Policy</Link>
            <span className="mx-1">|</span>
            <Link href="#" className="hover:text-white">Terms of Service</Link>
          </p>
        </div>

      </div>
    </footer>
  );
}