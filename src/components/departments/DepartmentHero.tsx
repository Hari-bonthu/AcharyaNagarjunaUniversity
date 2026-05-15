import { ArrowRight, Mail } from "lucide-react";
import collegeArchitectureImage from "@/assets/Colleges/College_Architecture.jpeg";
import collegeArtsImage from "@/assets/Colleges/College_Arts.jpg";
import collegeEngineeringImage from "@/assets/Colleges/College_Engineering.jpg";
import collegePharmaImage from "@/assets/Colleges/College_Pharma.jpg";
import collegePhysicalEducationImage from "@/assets/Colleges/College_PhysicalEducation.jpg";
import collegeSciencesImage from "@/assets/Colleges/College_Sciences.jpg";
import type { DepartmentPageData } from "./department-data";

export function DepartmentHero({ department }: { department: DepartmentPageData }) {
  const bannerImageByCollege: Record<string, string> = {
    "ANU College of Sciences": collegeSciencesImage,
    "ANU College of Engineering & Technology": collegeEngineeringImage,
    "ANU College of Arts, Commerce & Law": collegeArtsImage,
    "ANU College of Pharmaceutical Sciences": collegePharmaImage,
    "ANU College of Physical Education & Sports": collegePhysicalEducationImage,
    "ANU College of Architecture & Planning": collegeArchitectureImage,
  };
  const bannerImage = bannerImageByCollege[department.college] ?? collegeSciencesImage;

  return (
    <section className="relative overflow-hidden text-white">
      <img src={bannerImage} alt={`${department.name} banner`} className="absolute inset-0 h-full w-full object-cover" />
      <div
        className="absolute inset-0 bg-[linear-gradient(112deg,rgba(7,26,51,0.7)_0%,rgba(11,45,90,0.56)_42%,rgba(15,118,110,0.36)_100%)]"
        aria-hidden
      />
      <div className="relative mx-auto grid min-h-[340px] max-w-7xl gap-6 px-6 py-12 lg:min-h-[420px] lg:px-8">
        <div className="self-end pb-1 lg:pb-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#FDBA74]">
            {department.college}
          </p>
          <h1 className="mt-3 max-w-4xl text-3xl font-bold leading-tight md:text-5xl">
            {department.name}
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-white/75 md:text-base">
            {department.purpose}
          </p>
          <p className="mt-2 text-sm font-semibold text-[#FDBA74] md:text-base">
            {department.heroLine}
          </p>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row">
            <a
              href="#curriculum"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-[#F97316] px-5 py-2.5 text-sm font-semibold text-[#0B1F3A] transition-colors hover:bg-[#fb923c]"
            >
              Apply Now <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Contact Department <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
