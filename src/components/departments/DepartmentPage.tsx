import { CareerSection } from "./CareerSection";
import { CTASection } from "./CTASection";
import { DepartmentHero } from "./DepartmentHero";
import { FacilitiesSection } from "./FacilitiesSection";
import { FacultyPreview } from "./FacultyPreview";
import { LearningGrid } from "./LearningGrid";
import { ProgramsSection } from "./ProgramsSection";
import { ResearchFocusSection } from "./ResearchFocusSection";
import { SkillsSection } from "./SkillsSection";
import { UpdatesMini } from "./UpdatesMini";
import { getDepartmentPage } from "./department-data";

export function DepartmentPage({ departmentId }: { departmentId: string }) {
  const department = getDepartmentPage(departmentId);

  return (
    <main className="bg-background">
      <DepartmentHero department={department} />
      <ProgramsSection programs={department.programs} />
      <FacultyPreview faculty={department.faculty} />
      <ResearchFocusSection items={department.researchFocus} />
      <CTASection department={department} />
    </main>
  );
}
