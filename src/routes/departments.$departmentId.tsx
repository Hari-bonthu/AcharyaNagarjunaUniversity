import { createFileRoute, notFound } from "@tanstack/react-router";
import BreadcrumbTrail from "@/components/BreadcrumbTrail";
import { DepartmentPage } from "@/components/departments/DepartmentPage";
import { getDepartmentPage } from "@/components/departments/department-data";
import { UniversityNavbar } from "@/components/university-navbar";

export const Route = createFileRoute("/departments/$departmentId")({
  head: ({ params }) => {
    const department = getDepartmentPage(params.departmentId);

    return {
      meta: [
        {
          title: department
            ? `${department.name} | Acharya Nagarjuna University`
            : "Department | Acharya Nagarjuna University",
        },
        {
          name: "description",
          content:
            department?.purpose ??
            "Explore department programs, skills, labs, faculty snapshot, career outcomes and updates at Acharya Nagarjuna University.",
        },
      ],
    };
  },
  component: DepartmentRoute,
});

function DepartmentRoute() {
  const { departmentId } = Route.useParams();
  const department = getDepartmentPage(departmentId);

  if (!department) {
    throw notFound();
  }

  return (
    <div className="min-h-screen bg-background">
      <UniversityNavbar />
      <BreadcrumbTrail
        items={[
          { label: "Home", href: "/" },
          { label: "Departments", href: "/departments" },
          { label: department.name },
        ]}
      />
      <DepartmentPage department={department} />
    </div>
  );
}