import { createFileRoute } from "@tanstack/react-router";
import BreadcrumbTrail from "@/components/BreadcrumbTrail";
import { DepartmentPage } from "@/components/departments/DepartmentPage";
import { getDepartmentPage } from "@/components/departments/department-data";
import { UniversityNavbar } from "@/components/university-navbar";

export const Route = createFileRoute("/departments/$departmentId")({
  component: DepartmentRoute,
  head: () => ({
    meta: [
      { title: "Department | Acharya Nagarjuna University" },
      {
        name: "description",
        content:
          "Explore department programs, skills, labs, faculty snapshot, career outcomes and updates at Acharya Nagarjuna University.",
      },
    ],
  }),
});

function DepartmentRoute() {
  const { departmentId } = Route.useParams();
  const department = getDepartmentPage(departmentId);

  return (
    <div className="min-h-screen bg-background">
      <UniversityNavbar />
      <BreadcrumbTrail
        items={[
          { label: "Home", href: "/" },
          { label: "Departments" },
          { label: department.name },
        ]}
      />
      <DepartmentPage departmentId={departmentId} />
    </div>
  );
}
