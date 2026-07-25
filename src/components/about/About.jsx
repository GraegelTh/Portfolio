import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import TerminalWindow from "../ui/TerminalWindow";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <SectionHeading
        index="01"
        title="about_me"
        description="// whoami --verbose"
      />

      <div className="grid gap-10 sm:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="sm:col-span-3 space-y-4 text-base leading-relaxed text-text-dim"
        >
          <p>
            I'm driven by <span className="text-accent-2">curiosity</span> — the excitement of
            understanding how things work, why they're built the way they are, and what
            opportunities those decisions create. That curiosity shapes how I approach software
            development: I dig into how systems function, analyze different approaches, and aim
            to build solutions that are{" "}
            <span className="text-accent-2">carefully considered and sustainable</span> over
            time.
          </p>
          <p>
            I value the balance of working within structures while staying agile to solve
            complex problems. To me, being a good developer means being a reliable teammate who
            helps maintain a{" "}
            <span className="text-accent-2">calm and focused atmosphere</span>, even when
            projects get complex.
          </p>
          <p>
            I recently completed my Software Development degree with{" "}
            <span className="text-text">top grades</span> and am currently expanding my
            knowledge in the .NET ecosystem, Docker, and Agentic AI workflows. Most recently, I
            worked as a Fullstack Software Developer Intern at{" "}
            <span className="text-text">inovoo GmbH</span>, where I engineered a dynamic
            full-stack form builder module using ASP.NET Core and Blazor WebAssembly within an
            agile Scrum team.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="sm:col-span-2"
        >
          <TerminalWindow title="profile.ps1">
            <pre className="whitespace-pre-wrap font-mono text-sm text-text-dim">
              <code>
                {"{\n"}
                {"  "}<span className="text-accent-2">"role"</span>:{" "}
                <span className="text-text">"Junior .NET Developer"</span>{",\n"}
                {"  "}<span className="text-accent-2">"education"</span>:{" "}
                <span className="text-text">"Software Development — Top of Class"</span>{",\n"}
                {"  "}<span className="text-accent-2">"currently_learning"</span>: [{"\n"}
                {"    "}<span className="text-text">".NET 8"</span>,{"\n"}
                {"    "}<span className="text-text">"Docker"</span>,{"\n"}
                {"    "}<span className="text-text">"Agentic Workflows (Business Central)"</span>,{"\n"}
                {"    "}<span className="text-text">"Industrial Automation Patterns (Dark Factory / Fleet Manager)"</span>{"\n"}
                {"  ],\n"}
                {"  "}<span className="text-accent-2">"values"</span>: [{"\n"}
                {"    "}<span className="text-text">"curiosity"</span>,{"\n"}
                {"    "}<span className="text-text">"sustainability"</span>,{"\n"}
                {"    "}<span className="text-text">"calm focus"</span>{"\n"}
                {"  ],\n"}
                {"  "}<span className="text-accent-2">"status"</span>:{" "}
                <span className="text-accent">"relocating_to_sweden_aug_2026"</span>{"\n"}
                {"}"}
              </code>
            </pre>
          </TerminalWindow>
        </motion.div>
      </div>
    </section>
  );
}
