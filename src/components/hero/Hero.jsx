import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import TerminalWindow from "../ui/TerminalWindow";
import { GithubIcon, LinkedinIcon } from "../ui/BrandIcons";
import { useTypewriter } from "../../hooks/useTypewriter";

const COMMAND = "Thomas.Grägel.init()";

const SOCIALS = [
  { icon: GithubIcon, label: "GitHub", href: "https://github.com/GraegelTh" },
  { icon: LinkedinIcon, label: "LinkedIn", href: "https://www.linkedin.com/in/thomas-graegel-dev/" },
];

export default function Hero() {
  const { output, done } = useTypewriter(COMMAND, { speed: 60, startDelay: 400 });

  return (
    <section
      id="hero"
      className="relative flex min-h-svh items-center overflow-hidden px-6 pt-24"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(57,255,157,0.08), transparent 40%), radial-gradient(circle at 80% 60%, rgba(94,234,212,0.06), transparent 45%)",
        }}
      />

      <div className="mx-auto grid w-full max-w-6xl gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-4 font-mono text-sm text-accent">PS C:\Users\guest&gt; whoami /verbose</p>
        </motion.div>

        <TerminalWindow title="Windows PowerShell" className="max-w-3xl">
          <div className="font-mono text-lg sm:text-2xl">
            <span className="text-accent">{"> "}</span>
            <span className="text-glow text-text">{output}</span>
            <span className="animate-blink text-accent">▍</span>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: done ? 1 : 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 space-y-1 font-mono text-sm text-text-dim"
          >
            <p>{"// Agentic Developer Intern @ SISP | C# / .NET"}</p>
            <p>{"// Based in Stockholm, Sweden"}</p>
          </motion.div>
        </TerminalWindow>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: done ? 1 : 0, y: done ? 0 : 12 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-center gap-3"
        >
          <a
            href="mailto:contact@thomasgraegel.dev"
            className="flex items-center gap-2 rounded-md border border-accent/60 bg-accent/10 px-4 py-2.5 font-mono text-sm text-accent transition-colors hover:bg-accent/20"
          >
            <Mail size={16} />
            get_in_touch
          </a>
          <span className="mx-1 hidden h-6 w-px bg-border sm:block" aria-hidden="true" />
          {SOCIALS.map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="rounded-md border border-border p-2.5 text-text-dim transition-colors hover:border-accent/50 hover:text-accent"
            >
              <Icon size={18} />
            </a>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-xs text-text-muted"
      >
        scroll ↓
      </motion.div>
    </section>
  );
}
