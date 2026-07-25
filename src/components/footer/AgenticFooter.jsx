import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import TerminalWindow from "../ui/TerminalWindow";
import SectionHeading from "../ui/SectionHeading";
import { QUICK_COMMANDS, resolveCommand } from "./commands";

const PROMPT = "PS C:\\Users\\guest> ";

const INTRO = [
  "Windows PowerShell — agentic-shell v1.0.0",
  "Type 'help' or click a command below.",
];

export default function AgenticFooter() {
  const [history, setHistory] = useState(() => [{ command: null, output: INTRO }]);
  const [input, setInput] = useState("");
  const scrollRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [history]);

  const runCommand = (raw) => {
    const result = resolveCommand(raw);
    if (!result) return;

    if (result.clear) {
      setHistory([]);
      return;
    }

    setHistory((prev) => [...prev, result]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    runCommand(input);
    setInput("");
  };

  return (
    <footer id="contact" className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
      <SectionHeading
        index="04"
        title="agentic_shell"
        description="// an interactive faux CLI — try a command, or click one below"
      />

      <TerminalWindow title="Windows PowerShell" className="mx-auto">
        <div
          ref={scrollRef}
          role="log"
          aria-live="polite"
          aria-label="Terminal output"
          className="mb-4 h-56 overflow-y-auto font-mono text-sm leading-relaxed sm:h-64"
        >
          {history.map((entry, i) => (
            <div key={i} className="mb-3">
              {entry.command && (
                <p className="text-text">
                  <span className="whitespace-pre text-accent">{PROMPT}</span>
                  {entry.command}
                </p>
              )}
              {entry.output.map((line, j) => (
                <motion.p
                  key={j}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: j * 0.05 }}
                  className="text-text-dim"
                >
                  {line}
                </motion.p>
              ))}
            </div>
          ))}
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex items-center gap-2 border-t border-border pt-3 font-mono text-sm"
        >
          <span className="whitespace-pre text-accent">{PROMPT}</span>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="type a command..."
            aria-label="Terminal command input"
            className="min-w-0 flex-1 bg-transparent text-text outline-none placeholder:text-text-muted"
            autoComplete="off"
            spellCheck={false}
          />
          <span className="animate-blink text-accent">▍</span>
        </form>
      </TerminalWindow>

      <div className="mt-5 flex flex-wrap justify-center gap-2 font-mono text-xs">
        {QUICK_COMMANDS.map(({ label, command }) => (
          <button
            key={label}
            type="button"
            onClick={() => runCommand(command)}
            aria-label={`Run command: ${command}`}
            className="rounded-md border border-border px-3 py-1.5 text-text-dim transition-colors hover:border-accent/40 hover:text-accent"
          >
            [{label}]
          </button>
        ))}
      </div>

      <p className="mt-12 text-center font-mono text-xs text-text-muted">
        built with React · Tailwind · Framer Motion — © {new Date().getFullYear()} Thomas Grägel
      </p>
    </footer>
  );
}
