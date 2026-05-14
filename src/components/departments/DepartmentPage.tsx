import { CareerSection } from "./CareerSection";
import { CTASection } from "./CTASection";
import { DepartmentHero } from "./DepartmentHero";
import { FacilitiesSection } from "./FacilitiesSection";
import { FacultyPreview } from "./FacultyPreview";
import { LearningGrid } from "./LearningGrid";
import { ProgramsSection } from "./ProgramsSection";
import { SkillsSection } from "./SkillsSection";
import { UpdatesMini } from "./UpdatesMini";
import { getDepartmentPage } from "./department-data";

export function DepartmentPage({ departmentId }: { departmentId: string }) {
  const department = getDepartmentPage(departmentId);

  return (
    <main className="bg-background">
      <DepartmentHero department={department} />
      <LearningGrid items={department.learning} />
      <ProgramsSection programs={department.programs} />
      <SkillsSection items={department.skills} />
      <FacilitiesSection items={department.facilities} />
      <FacultyPreview faculty={department.faculty} />
      <CareerSection items={department.careers} />
      <UpdatesMini updates={department.updates} />
      <CTASection department={department} />
    </main>
  );
}
