import React from 'react';
import { Link } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#f8f9fc] group/design-root overflow-x-hidden" style={{ fontFamily: '"Public Sans", "Noto Sans", sans-serif' }}>
      <div className="layout-container flex h-full grow flex-col">
        <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#e6e9f4] px-10 py-3">
          <div className="flex items-center gap-4 text-[#0d0f1c]">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h2 className="text-[#0d0f1c] text-lg font-bold leading-tight tracking-[-0.015em]">Mindful Path</h2>
          </div>
          <div className="flex flex-1 justify-end gap-8">
            <div className="flex items-center gap-9">
              <Link className="text-[#0d0f1c] text-sm font-medium leading-normal" to="/about">About</Link>
              <Link className="text-[#0d0f1c] text-sm font-medium leading-normal" to="/services">Services</Link>
              <Link className="text-[#0d0f1c] text-sm font-medium leading-normal" to="/contact">Contact</Link>
            </div>
            <Link to="/contact">
              <button
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#607afb] text-[#f8f9fc] text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">Book Appointment</span>
              </button>
            </Link>
          </div>
        </header>
        <main className="px-40 flex flex-1 justify-center py-5">
          {children}
        </main>
        <footer className="flex justify-center">
          <div className="flex max-w-[960px] flex-1 flex-col">
            <div className="flex flex-col gap-6 px-5 py-10 text-center @container">
              <div className="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
                <Link className="text-[#47569e] text-base font-normal leading-normal min-w-40" to="/privacy-policy">Privacy Policy</Link>
                <Link className="text-[#47569e] text-base font-normal leading-normal min-w-40" to="/terms-of-service">Terms of Service</Link>
              </div>
              <p className="text-[#47569e] text-base font-normal leading-normal">©2024 Mindful Path. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
