import { CareerSection } from "./CareerSection";
import { CTASection } from "./CTASection";
import { DepartmentHero } from "./DepartmentHero";
import { FacilitiesSection } from "./FacilitiesSection";
import { FacultyPreview } from "./FacultyPreview";
import { ProgramsSection } from "./ProgramsSection";
import { ResearchFocusSection } from "./ResearchFocusSection";
import { getDepartmentPage } from "./department-data";

export function DepartmentPage({ departmentId }: { departmentId: string }) {
  const department = getDepartmentPage(departmentId);

  return (
    <main className="bg-background">
      <DepartmentHero department={department} />
      <ProgramsSection programs={department.programs} />
      <FacultyPreview faculty={department.faculty} />
      <CTASection department={department} />
      <FacilitiesSection items={department.facilities.slice(0, 4)} />
      <ResearchFocusSection items={department.researchFocus} />
    </main>
  );
}
