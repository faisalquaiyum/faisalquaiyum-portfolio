export interface Project {
  id: string;
  title: string;
  description: string;
  detailedDescription: string;
  slug: string;
  image: string;
  tags: string[];
  status: "active" | "archived";
  links: {
    visit?: string;
    github?: string;
    pypi?: string;
    link?: string;
    youtube?: string;
    archive?: string;
    howIBuilt?: string;
  };
  author: string;
  authorAvatar: string;
  techStack: string[];
  features: string[];
  learningOutcomes: string[];
}

/**
 * Main projects array — update content here as required.
 * Ensure slug values are URL-safe and unique.
 */
export const projects: Project[] = [
  {
    id: "1",
    title: "Rapid Site Builder",
    slug: "rapid-site-builder",
    description:
      "A scalable visual website builder that lets users create, customize, and preview websites using drag-and-drop components.",
    detailedDescription:
      "Rapid Site Builder is a full-stack website builder designed to make website creation fast and intuitive. Users can create websites by working with reusable components and customizing their content, styling, and layout through a visual editing interface with real-time preview. The application manages project state using cloud-hosted PostgreSQL on Neon with a normalized Prisma schema. It also provides secure session-based authentication through Better Auth and a REST API architecture tested with structured Postman test suites to validate workflows and edge cases.",
    image: "/rapid_web.png",
    tags: ["Next.js", "TypeScript", "SaaS", "Full-Stack", "Website Builder"],
    status: "active",
    techStack: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Neon", "Prisma", "Better Auth"],
    features: [
      "Visual editing of reusable website components",
      "Real-time website preview",
      "Cloud-hosted PostgreSQL project storage",
      "Normalized database schema with Prisma",
      "Session-based authentication with Better Auth",
      "RESTful API architecture",
      "Concurrent project state management",
      "Structured API testing with Postman",
    ],
    learningOutcomes: [
      "Learned to architect and build a scalable full-stack website builder",
      "Practiced managing complex project state with PostgreSQL and Prisma",
      "Gained experience designing and testing REST APIs with multiple edge cases",
      "Learned to implement session-based authentication using Better Auth",
      "Developed practical experience with Neon serverless PostgreSQL",
      "Practiced building real-time visual editing and preview workflows",
    ],
    links: {
      visit: "https://rapid-site-builder.vercel.app/",
      github: "https://github.com/faisalquaiyum/rapid-site-builder",
      howIBuilt: "https://youtube.com",
    },
    author: "Faisal",
    authorAvatar: "/rapid_web.png",
  },
  {
    id: "2",
    title: "Carbon Trace: Industrial Emission Auditor",
    slug: "carbon-trace",
    description:
      "A full-stack industrial emission auditing platform for tracking, validating, and reporting carbon emissions.",
    detailedDescription:
      "Carbon Trace is a full-stack auditing platform built for complex industrial emission management. The platform uses a Python FastAPI backend to orchestrate a 10-step validation and normalization pipeline with systematic error handling and structured compliance reporting. It also provides factory-scoped emission cap enforcement, automated cap alerts, and real-time dashboards, helping transform complex industrial compliance requirements into actionable insights.",
    image: "/carbon_trace.png",
    tags: ["React", "TypeScript", "FastAPI", "Python", "Sustainability", "Full-Stack"],
    status: "active",
    techStack: ["React", "TypeScript", "FastAPI", "Python", "Pandas", "MongoDB"],
    features: [
      "10-step emission validation and normalization pipeline",
      "Factory-scoped emission cap enforcement",
      "Automated emission cap alerts",
      "Real-time emission monitoring dashboards",
      "Structured compliance reporting",
      "Systematic error handling for audit workflows",
    ],
    learningOutcomes: [
      "Learned to architect a full-stack application for a complex industrial domain",
      "Practiced building data validation and normalization pipelines with FastAPI and Python",
      "Gained experience processing and analyzing data using Pandas",
      "Practiced working with MongoDB for storing and managing audit data",
      "Learned to translate complex business requirements into a working technical solution",
      "Developed experience building compliance-focused dashboards and reporting workflows",
    ],
    links: {
      visit: "https://carbon-trace-sand.vercel.app/",
      github: "https://github.com/faisalquaiyum/Carbon-Trace",
      howIBuilt: "https://youtube.com",
    },
    author: "Faisal",
    authorAvatar: "/carbon_trace.png",
  },
  {
    id: "3",
    title: "AI-Powered Lesson Generator",
    slug: "ai-lesson-generator",
    description:
      "A multilingual AI platform that generates personalized, curriculum-aligned lessons using Gemini AI.",
    detailedDescription:
      "AI-Powered Lesson Generator is a multilingual AI platform that helps users create personalized, curriculum-aligned lessons for different subjects, grades, and languages. The application integrates the Gemini API end-to-end, from prompt design and content generation to sandboxed rendering of AI-generated content. It also includes a secure iframe execution pipeline, rate-limited routes, and latency monitoring to provide a reliable and safe lesson-generation experience.",
    image: "/ai_lesson.png",
    tags: ["AI", "Next.js", "TypeScript", "Gemini API", "SaaS", "Full-Stack"],
    status: "active",
    techStack: ["Next.js", "TypeScript", "Gemini API", "Supabase", "AWS", "Tailwind CSS"],
    features: [
      "AI-powered personalized lesson generation",
      "Multilingual lesson generation across 11 languages",
      "Curriculum-aligned content generation",
      "Secure sandboxed rendering of AI-generated content",
      "Custom iframe execution pipeline for generated TSX",
      "Rate-limited API routes",
      "Latency monitoring for reliable AI responses",
    ],
    learningOutcomes: [
      "Learned to integrate the Gemini API into a full-stack AI application",
      "Practiced prompt engineering and AI-generated content workflows",
      "Gained experience building a multilingual AI platform",
      "Learned to securely render AI-generated TSX through a custom iframe execution pipeline",
      "Practiced implementing rate limiting and latency monitoring for AI APIs",
      "Gained hands-on experience deploying an AI application on AWS",
    ],
    links: {
      visit: "https://interactive-lesson-generator.vercel.app/",
      github: "https://github.com/faisalquaiyum/lesson-generator",
      howIBuilt: "https://youtube.com",
    },
    author: "Faisal",
    authorAvatar: "/ai_lesson.png",
  },
  {
    id: "4",
    title: "Flipearn Marketplace",
    slug: "flipearn-marketplace",
    description:
      "A marketplace for buying and selling social-media accounts, with listings, messaging, orders, and withdrawals.",
    detailedDescription:
      "Flipearn is a full-stack marketplace platform designed for buying and selling social-media accounts. Users can browse available listings, create and manage their own listings, communicate with sellers through messaging, place orders, and request withdrawals. Administrators can verify account credentials, manage marketplace listings, and review transactions. The platform combines a React-based frontend with an Express backend, Prisma ORM, Neon PostgreSQL, Clerk authentication, ImageKit for media handling, and Inngest for background workflows.",
    image: "/market_flipearn.png",
    tags: ["React", "Express", "Marketplace", "PostgreSQL", "Full-Stack", "SaaS"],
    status: "active",
    techStack: [
      "React",
      "Vite",
      "Redux Toolkit",
      "Tailwind CSS",
      "Express.js",
      "Prisma",
      "Neon PostgreSQL",
      "Clerk",
      "ImageKit",
      "Inngest",
    ],
    features: [
      "Browse and search social-media account listings",
      "Create and manage account listings",
      "Buyer and seller messaging",
      "Order placement and transaction management",
      "Withdrawal request system",
      "Administrator credential verification",
      "Listing and transaction management",
      "Secure user authentication with Clerk",
      "Image and media management with ImageKit",
    ],
    learningOutcomes: [
      "Learned to build a complete marketplace workflow from listing creation to order completion",
      "Practiced state management using Redux Toolkit in a React application",
      "Gained experience designing backend APIs with Express and Prisma",
      "Practiced working with PostgreSQL through Neon and Prisma ORM",
      "Learned to integrate authentication and user management using Clerk",
      "Gained experience implementing media handling and background workflows",
    ],
    links: {
      visit: "https://flipearn-marketplace-psi.vercel.app/",
      github: "https://github.com/faisalquaiyum/flipearn-marketplace",
      howIBuilt: "https://youtube.com",
    },
    author: "Faisal",
    authorAvatar: "/market_flipearn.png",
  },
  {
    id: "5",
    title: "AWS Cloud Club MAIT",
    slug: "aws-cloud-club-mait",
    description:
      "A modern community platform for AWS Cloud Club MAIT featuring events, learning resources, projects, and member engagement.",
    detailedDescription:
      "AWS Cloud Club MAIT is a community-focused web platform built to connect students interested in cloud computing and AWS technologies. The platform provides information about the club, upcoming events, learning opportunities, projects, and community activities through a modern and responsive interface. It is designed to make it easier for students to discover cloud-focused initiatives, explore opportunities, and stay connected with the AWS Cloud Club MAIT community.",
    image: "/aws_club.png",
    tags: ["Next.js", "AWS", "Cloud", "Community", "Web Development"],
    status: "active",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    features: [
      "Modern responsive community website",
      "AWS Cloud Club MAIT information and resources",
      "Upcoming events section",
      "Learning and cloud computing resources",
      "Projects and community activities",
      "Member engagement and club information",
      "Responsive navigation and interactive UI",
    ],
    learningOutcomes: [
      "Learned to build a modern community-focused website using Next.js",
      "Practiced creating responsive and reusable React components",
      "Gained experience designing clean interfaces with Tailwind CSS",
      "Practiced structuring content for events, resources, and community engagement",
      "Gained hands-on experience deploying a production-ready Next.js website",
    ],
    links: {
      visit: "https://aws-cloud-clubs-mait.vercel.app/",
      github: "https://github.com/faisalquaiyum/aws-cloud-clubs-mait",
      howIBuilt: "https://youtube.com",
    },
    author: "Faisal",
    authorAvatar: "/aws_club.png",
  },
];

/* -------------------------
   Helper utilities
   ------------------------- */

/** Return a project by slug or null */
export function getProjectBySlug(slug: string | undefined | null): Project | null {
  // defensive normalization: decode URI components, coerce to string, trim
  const normalized = decodeURIComponent(String(slug ?? "")).trim();
  if (!normalized) return null;
  return projects.find((p) => p.slug === normalized) ?? null;
}
/** Return all slugs (useful for generateStaticParams or getStaticPaths) */
export function getAllProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

/** Compose the canonical URL for a project (useful in UIs) */
export function getProjectUrl(project: Project | { slug: string }) {
  return `/projects/${project.slug}`;
}

/** Return all projects (shallow copy) */
export function getAllProjects(): Project[] {
  return [...projects];
}