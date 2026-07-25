import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/BrandIcons";

export default function ProjectCard({ project, index }) {
  const isGithub = project.href.includes("github.com");
  const LinkIcon = isGithub ? GithubIcon : LinkedinIcon;

  return (
    <motion.a
      href={project.href}
      target="_blank"
      rel="noreferrer"
      aria-label={`${project.title} — ${project.linkLabel}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group relative block overflow-hidden rounded-lg border border-border bg-surface p-6 transition-colors hover:border-accent/40"
    >
      <div className="pointer-events-none absolute inset-0 origin-top scale-y-0 bg-gradient-to-b from-accent/[0.06] to-transparent transition-transform duration-300 group-hover:scale-y-100" />

      <div className="relative flex items-start justify-between gap-3">
        <p className="font-mono text-lg font-medium text-text">
          <span className="text-accent">{"> "}</span>
          {project.title}
        </p>
        <ArrowUpRight
          size={18}
          className="mt-1 shrink-0 text-text-dim transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
        />
      </div>

      {project.tag && (
        <span className="relative mt-1.5 inline-block font-mono text-xs uppercase tracking-wide text-accent">
          {project.tag}
        </span>
      )}

      <p className="relative mt-3 text-sm leading-relaxed text-text-dim">
        {project.description}
      </p>

      <div className="relative mt-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-border px-2.5 py-1 font-mono text-xs text-accent-2"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="relative mt-5 flex items-center gap-1.5 font-mono text-xs text-text-dim transition-colors group-hover:text-accent">
        <LinkIcon size={14} />
        {project.linkLabel}
      </div>
    </motion.a>
  );
}
