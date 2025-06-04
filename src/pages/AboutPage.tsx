import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
      {/* Page-specific content from about.html goes here */}
      <div className="flex flex-wrap justify-between gap-3 p-4">
        <div className="flex min-w-72 flex-col gap-3">
          <p className="text-[#0d0f1c] tracking-light text-[32px] font-bold leading-tight">About Me</p>
          <p className="text-[#47569e] text-sm font-normal leading-normal">
            I am a licensed psychologist with over 10 years of experience in neuropsychology, psychological support, and caregiver support. My approach is rooted in empathy
            and evidence-based practices, tailored to meet the unique needs of each individual and family I work with.
          </p>
        </div>
      </div>
      <h2 className="text-[#0d0f1c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Experience</h2>
      <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
        <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#ced2e9] py-5">
          <p className="text-[#47569e] text-sm font-normal leading-normal">Licensed Psychologist</p>
          <p className="text-[#0d0f1c] text-sm font-normal leading-normal">State Board of Psychology</p>
        </div>
        <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#ced2e9] py-5">
          <p className="text-[#47569e] text-sm font-normal leading-normal">Neuropsychology Specialist</p>
          <p className="text-[#0d0f1c] text-sm font-normal leading-normal">Certified by the National Institute of Neuropsychology</p>
        </div>
        <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#ced2e9] py-5">
          <p className="text-[#47569e] text-sm font-normal leading-normal">Caregiver Support Expert</p>
          <p className="text-[#0d0f1c] text-sm font-normal leading-normal">Certified by the Caregiver Support Network</p>
        </div>
      </div>
      <h2 className="text-[#0d0f1c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Education</h2>
      <div className="p-4 grid grid-cols-[20%_1fr] gap-x-6">
        <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#ced2e9] py-5">
          <p className="text-[#47569e] text-sm font-normal leading-normal">Ph.D. in Clinical Psychology</p>
          <p className="text-[#0d0f1c] text-sm font-normal leading-normal">University of Serenity, 2013</p>
        </div>
        <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#ced2e9] py-5">
          <p className="text-[#47569e] text-sm font-normal leading-normal">M.A. in Psychology</p>
          <p className="text-[#0d0f1c] text-sm font-normal leading-normal">University of Serenity, 2010</p>
        </div>
        <div className="col-span-2 grid grid-cols-subgrid border-t border-t-[#ced2e9] py-5">
          <p className="text-[#47569e] text-sm font-normal leading-normal">B.A. in Psychology</p>
          <p className="text-[#0d0f1c] text-sm font-normal leading-normal">University of Serenity, 2008</p>
        </div>
      </div>
      <h2 className="text-[#0d0f1c] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Approach</h2>
      <p className="text-[#0d0f1c] text-base font-normal leading-normal pb-3 pt-1 px-4">
        My therapeutic approach is integrative, drawing from cognitive-behavioral, humanistic, and mindfulness-based techniques. I believe in fostering a collaborative and
        supportive environment where clients feel empowered to explore their challenges and achieve their goals. I am committed to providing compassionate care that promotes
        healing and personal growth.
      </p>
    </div>
  );
};

export default AboutPage;
