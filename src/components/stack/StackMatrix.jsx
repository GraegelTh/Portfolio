import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import { CATEGORIES, CATEGORY_LABELS, STACK } from "./stackData";

export default function StackMatrix() {
  const [filter, setFilter] = useState("all");

  const items = filter === "all" ? STACK : STACK.filter((s) => s.category === filter);

  return (
    <section id="stack" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <SectionHeading
        index="02"
        title="stack_matrix"
        description="// filter --category=<name> to inspect the toolkit"
      />

      <div className="mb-8 flex flex-wrap gap-2 font-mono text-sm">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            aria-pressed={filter === cat}
            className={`rounded-md border px-3.5 py-1.5 transition-colors ${
              filter === cat
                ? "border-accent bg-accent/10 text-accent"
                : "border-border text-text-dim hover:border-accent/40 hover:text-text"
            }`}
          >
            {CATEGORY_LABELS[cat]}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-2.5">
        <AnimatePresence mode="popLayout">
          {items.map((item) => (
            <motion.span
              key={item.name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25 }}
              whileHover={{ y: -2 }}
              className="rounded-md border border-border bg-surface px-4 py-2 font-mono text-sm text-text transition-colors hover:border-accent/40 hover:bg-surface-hover hover:text-accent"
            >
              {item.name}
            </motion.span>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
