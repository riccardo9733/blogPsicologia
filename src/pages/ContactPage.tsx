import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="layout-content-container flex flex-col w-[512px] max-w-[512px] py-5 max-w-[960px] flex-1"> {/* Adjusted classes to match provided HTML structure */}
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <p className="text-[#0d0f1c] tracking-light text-[32px] font-bold leading-tight min-w-72">Contact Us</p>
      </div>
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <input
            placeholder="Your Name"
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d0f1c] focus:outline-0 focus:ring-0 border border-[#ced2e9] bg-[#f8f9fc] focus:border-[#ced2e9] h-14 placeholder:text-[#47569e] p-[15px] text-base font-normal leading-normal"
          />
        </label>
      </div>
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <input
            placeholder="Your Email"
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d0f1c] focus:outline-0 focus:ring-0 border border-[#ced2e9] bg-[#f8f9fc] focus:border-[#ced2e9] h-14 placeholder:text-[#47569e] p-[15px] text-base font-normal leading-normal"
          />
        </label>
      </div>
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <input
            placeholder="Subject"
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d0f1c] focus:outline-0 focus:ring-0 border border-[#ced2e9] bg-[#f8f9fc] focus:border-[#ced2e9] h-14 placeholder:text-[#47569e] p-[15px] text-base font-normal leading-normal"
          />
        </label>
      </div>
      <div className="flex max-w-[480px] flex-wrap items-end gap-4 px-4 py-3">
        <label className="flex flex-col min-w-40 flex-1">
          <textarea
            placeholder="Your Message"
            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0d0f1c] focus:outline-0 focus:ring-0 border border-[#ced2e9] bg-[#f8f9fc] focus:border-[#ced2e9] min-h-36 placeholder:text-[#47569e] p-[15px] text-base font-normal leading-normal"
          ></textarea>
        </label>
      </div>
      <div className="flex px-4 py-3 justify-end">
        <button
          className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-[#607afb] text-[#f8f9fc] text-sm font-bold leading-normal tracking-[0.015em]"
        >
          <span className="truncate">Send Message</span>
        </button>
      </div>
      <h3 className="text-[#0d0f1c] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">Opening Hours</h3>
      <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
        {/* Opening Hours Data */}
        {[
          { day: 'Monday', hours: '9:00 AM - 5:00 PM' },
          { day: 'Tuesday', hours: '9:00 AM - 5:00 PM' },
          { day: 'Wednesday', hours: '9:00 AM - 5:00 PM' },
          { day: 'Thursday', hours: '9:00 AM - 5:00 PM' },
          { day: 'Friday', hours: '9:00 AM - 5:00 PM' },
          { day: 'Saturday', hours: 'Closed' },
          { day: 'Sunday', hours: 'Closed' },
        ].map(item => (
          <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#ced2e9] py-5" key={item.day}>
            <p className="text-[#47569e] text-sm font-normal leading-normal">{item.day}</p>
            <p className="text-[#0d0f1c] text-sm font-normal leading-normal">{item.hours}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactPage;
