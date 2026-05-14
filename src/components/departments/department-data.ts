import {
  Brain,
  BriefcaseBusiness,
  Building2,
  Code2,
  Cpu,
  Database,
  FlaskConical,
  GraduationCap,
  Lightbulb,
  Microscope,
  Network,
  Rocket,
  ScrollText,
  ShieldCheck,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type DepartmentCardItem = {
  title: string;
  text: string;
  icon: LucideIcon;
};

export type ProgramItem = {
  name: string;
  duration: string;
  description: string;
};

export type FacultyItem = {
  name: string;
  role: string;
  focus: string;
};

export type UpdateItem = {
  date: string;
  title: string;
  tag: string;
};

export type DepartmentPageData = {
  id: string;
  name: string;
  purpose: string;
  heroLine: string;
  college: string;
  imageLabel: string;
  learning: DepartmentCardItem[];
  programs: ProgramItem[];
  skills: DepartmentCardItem[];
  facilities: DepartmentCardItem[];
  faculty: FacultyItem[];
  careers: DepartmentCardItem[];
  updates: UpdateItem[];
};

export const departmentPages: Record<string, DepartmentPageData> = {
  "computer-science": {
    id: "computer-science",
    name: "Department of Computer Science",
    purpose: "Designing practical, reliable and intelligent digital systems.",
    heroLine: "Building intelligent systems for tomorrow",
    college: "ANU College of Sciences",
    imageLabel: "Department image placeholder",
    learning: [
      {
        title: "Programming & Problem Solving",
        text: "Write clean code and reason through computational problems.",
        icon: Code2,
      },
      {
        title: "Data Structures & Algorithms",
        text: "Build strong foundations for efficient software design.",
        icon: Network,
      },
      {
        title: "AI & Machine Learning",
        text: "Apply intelligent models to data-rich real-world problems.",
        icon: Brain,
      },
      {
        title: "Software Development",
        text: "Plan, build, test and ship maintainable applications.",
        icon: Cpu,
      },
      {
        title: "Real-world Projects",
        text: "Practice through guided labs, seminars and team projects.",
        icon: Rocket,
      },
    ],
    programs: [
      {
        name: "B.Sc / B.Tech",
        duration: "3-4 Years",
        description: "Undergraduate pathways in computing and applied technology.",
      },
      {
        name: "M.Sc / M.Tech",
        duration: "2 Years",
        description: "Advanced study in software systems, data and research methods.",
      },
      {
        name: "PhD",
        duration: "3+ Years",
        description: "Faculty-guided research in emerging computing domains.",
      },
    ],
    skills: [
      {
        title: "Critical Thinking",
        text: "Analyze requirements, tradeoffs and technical decisions.",
        icon: Lightbulb,
      },
      {
        title: "Industry-ready Coding",
        text: "Use modern tools, workflows and development practices.",
        icon: Code2,
      },
      {
        title: "Research Skills",
        text: "Read, evaluate and contribute to technical literature.",
        icon: Microscope,
      },
      {
        title: "Problem Solving",
        text: "Turn ambiguous problems into working solutions.",
        icon: ShieldCheck,
      },
    ],
    facilities: [
      {
        title: "Programming Labs",
        text: "Hands-on coding spaces for core and advanced courses.",
        icon: Code2,
      },
      {
        title: "AI & Data Tools",
        text: "Software environments for analytics and model building.",
        icon: Database,
      },
      {
        title: "Research Support",
        text: "Faculty mentoring for publications and scholar projects.",
        icon: FlaskConical,
      },
      {
        title: "Project Studio",
        text: "Collaborative workspace for capstones and prototypes.",
        icon: Building2,
      },
      {
        title: "Seminar Room",
        text: "Talks, workshops and student technical presentations.",
        icon: Users,
      },
      {
        title: "Digital Library Access",
        text: "Journals, references and online learning resources.",
        icon: ScrollText,
      },
    ],
    faculty: [
      {
        name: "Prof. V. Ramachandra Rao",
        role: "Professor & Head",
        focus: "Algorithms, software systems",
      },
      {
        name: "Dr. P. Lakshmi Narayana",
        role: "Associate Professor",
        focus: "Data mining, machine learning",
      },
      {
        name: "Dr. K. Anitha Devi",
        role: "Assistant Professor",
        focus: "Networks, cloud computing",
      },
    ],
    careers: [
      {
        title: "Software Engineer",
        text: "Build applications, platforms and digital services.",
        icon: Code2,
      },
      {
        title: "Data Analyst",
        text: "Transform data into decisions and measurable insight.",
        icon: Database,
      },
      {
        title: "Research Scientist",
        text: "Explore advanced computing questions through research.",
        icon: Microscope,
      },
      {
        title: "Higher Studies",
        text: "Move into specialized PG, doctoral or global programs.",
        icon: GraduationCap,
      },
    ],
    updates: [
      {
        date: "Apr 28",
        title: "Guest faculty notification released for computing streams",
        tag: "NEW",
      },
      {
        date: "Apr 18",
        title: "July 2026 examination timetable published",
        tag: "EXAM",
      },
      {
        date: "Apr 12",
        title: "Student project seminar schedule announced",
        tag: "WORKSHOP",
      },
    ],
  },
};

export function getDepartmentPage(departmentId: string): DepartmentPageData {
  return departmentPages[departmentId] ?? departmentPages["computer-science"];
}

export function slugFromDepartmentName(name: string) {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
