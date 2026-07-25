import SectionHeading from "../ui/SectionHeading";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "./projectsData";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <SectionHeading
        index="03"
        title="projects"
        description="// ls ./projects --sort=recent"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}
