import { motion } from "framer-motion";

export default function SectionHeading({ index, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-10 sm:mb-14"
    >
      <div className="flex items-baseline gap-3 font-mono">
        <span className="text-sm text-accent">{index}</span>
        <h2 className="text-2xl font-semibold tracking-tight text-text sm:text-3xl">
          {title}
        </h2>
        <span className="h-5 w-2.5 animate-blink bg-accent/70" />
      </div>
      {description && (
        <p className="mt-3 max-w-2xl font-sans text-sm text-text-dim sm:text-base">
          {description}
        </p>
      )}
    </motion.div>
  );
}
