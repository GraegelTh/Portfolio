import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { LinkedinIcon } from "../ui/BrandIcons";

const RECOMMENDATIONS_URL =
  "https://www.linkedin.com/in/thomas-graegel-dev/details/recommendations/";

export default function Testimonial() {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="relative mt-16 overflow-hidden rounded-lg border border-border bg-surface p-6 sm:p-8"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-accent/60" />

      <p className="mb-4 font-mono text-xs text-accent">{"// cat testimonial.txt"}</p>

      <Quote size={28} className="mb-3 text-accent-2/60" aria-hidden="true" />

      <blockquote className="space-y-3 text-base leading-relaxed text-text sm:text-lg">
        <p>
          I had the pleasure of managing Tom as an intern on my engineering team for six months
          and he was one of the best I&rsquo;ve worked with.
        </p>
        <p className="text-text-dim">
          He picked up our codebase faster than expected and quickly became self-sufficient. I
          could hand him a problem and trust him to work through it well with little supervision.
          He also added valuable input to many product decisions regarding his project.{" "}
          <span className="text-text">Sharp, reliable, and a pleasure to work with.</span>
        </p>
      </blockquote>

      <figcaption className="mt-6 flex flex-wrap items-center justify-between gap-3">
        <div className="font-mono text-sm">
          <p className="text-text">Michael</p>
          <p className="text-text-dim">Software Architect / Manager, inovoo GmbH</p>
        </div>
        <a
          href={RECOMMENDATIONS_URL}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 font-mono text-xs text-text-dim transition-colors hover:text-accent"
        >
          <LinkedinIcon size={14} />
          Read on LinkedIn
        </a>
      </figcaption>
    </motion.figure>
  );
}
