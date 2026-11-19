import { motion } from "framer-motion";
import SectionHeading from "../ui/SectionHeading";
import TerminalWindow from "../ui/TerminalWindow";
import Testimonial from "./Testimonial";

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
            I recently completed my vocational training in Software Development with{" "}
            <span className="text-text">top grades</span>. Since October 2026 I have been working
            as an Agentic Developer Intern at{" "}
            <span className="text-text">SISP (Swedish Incubators &amp; Science Parks)</span>, where
            I build in a team with Claude Code inside an advanced harness of subagents, custom
            skills, hooks and MCP servers. Right now I mostly work on one of SISP&rsquo;s websites
            and the database behind it, where{" "}
            <span className="text-text">reporting data</span> is collected so it can be analysed
            and evaluated later. What interests me most is the question behind it: how agents
            become a reliable part of a real team&rsquo;s workflow, not just a faster autocomplete.
          </p>
          <p>
            Before that, I worked as a Fullstack Software Developer Intern at{" "}
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
                <span className="text-text">"Agentic Developer Intern @ SISP"</span>{",\n"}
                {"  "}<span className="text-accent-2">"education"</span>:{" "}
                <span className="text-text">"Software Development — Top of Class"</span>{",\n"}
                {"  "}<span className="text-accent-2">"currently_learning"</span>: [{"\n"}
                {"    "}<span className="text-text">".NET 10"</span>,{"\n"}
                {"    "}<span className="text-text">"Multi-Agent Workflows (Claude Code)"</span>,{"\n"}
                {"    "}<span className="text-text">"MCP Servers"</span>,{"\n"}
                {"    "}<span className="text-text">"Python"</span>,{"\n"}
                {"    "}<span className="text-text">"Swedish (A2)"</span>{"\n"}
                {"  ],\n"}
                {"  "}<span className="text-accent-2">"values"</span>: [{"\n"}
                {"    "}<span className="text-text">"curiosity"</span>,{"\n"}
                {"    "}<span className="text-text">"sustainability"</span>,{"\n"}
                {"    "}<span className="text-text">"calm focus"</span>{"\n"}
                {"  ],\n"}
                {"  "}<span className="text-accent-2">"status"</span>:{" "}
                <span className="text-accent">"based_in_stockholm"</span>{"\n"}
                {"}"}
              </code>
            </pre>
          </TerminalWindow>
        </motion.div>
      </div>

      <Testimonial />
    </section>
  );
}
