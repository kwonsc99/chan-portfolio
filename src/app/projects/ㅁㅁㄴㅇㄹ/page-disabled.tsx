// import { notFound } from "next/navigation";
// import { getProjectBySlug, getAllSlugs } from "@/data/projects";
// import ProjectDetail from "@/components/sections/ProjectDetail";

// export async function generateStaticParams() {
//   const slugs = await getAllSlugs();
//   return slugs.map((slug) => ({
//     slug,
//   }));
// }

// export async function generateMetadata({
//   params,
// }: {
//   params: Promise<{ slug: string }>;
// }) {
//   const { slug } = await params; // params를 await로 처리
//   const project = await getProjectBySlug(slug);

//   if (!project) {
//     return {
//       title: "Project Not Found",
//     };
//   }

//   return {
//     title: `${project.title} | Portfolio`,
//     description: project.description,
//   };
// }

// export default async function ProjectPage({
//   params,
// }: {
//   params: Promise<{ slug: string }>; // Promise 타입으로 변경
// }) {
//   const { slug } = await params; // params를 await로 처리
//   const project = await getProjectBySlug(slug);

//   if (!project) {
//     notFound();
//   }

//   return <ProjectDetail project={project} />;
// }
