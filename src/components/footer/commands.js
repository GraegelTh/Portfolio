export const QUICK_COMMANDS = [
  { label: "run contact.exe", command: "run contact.exe" },
  { label: "cat testimonial.txt", command: "cat testimonial.txt" },
  { label: "deploy to_sweden", command: "deploy --target=sweden" },
];

const RESPONSES = {
  "run contact.exe": [
    "Booting contact.exe...",
    "> email:    contact@thomasgraegel.dev",
    "> linkedin: linkedin.com/in/thomas-graegel-dev",
    "> github:   github.com/GraegelTh",
    "> status:   relocating to Sweden, Aug 2026 — open to opportunities",
  ],
  "cat testimonial.txt": [
    '"I had the pleasure of managing Tom as an intern on my engineering',
    ' team for six months and he was one of the best I’ve worked with.',
    " He picked up our codebase faster than expected and quickly became",
    " self-sufficient. I could hand him a problem and trust him to work",
    " through it well with little supervision. He also added valuable",
    " input to many product decisions regarding his project. Sharp,",
    ' reliable, and a pleasure to work with."',
    "",
    "  — Michael, Software Architect / Manager, inovoo GmbH",
  ],
  "deploy --target=sweden": [
    "Resolving relocation target: Sweden (Stockholm / Gothenburg)...",
    "Packing skills, curiosity, and coffee habit...",
    "Scheduled arrival: August 2026.",
    "Deployment window: open. Awaiting an offer to trigger the pipeline.",
  ],
  help: [
    "Available commands:",
    "  run contact.exe        show contact details",
    "  cat testimonial.txt    read a quick testimonial",
    "  deploy --target=<x>    relocation / availability status",
    "  help                   show this message",
  ],
  clear: [],
};

export function resolveCommand(raw) {
  const command = raw.trim();
  if (!command) return null;

  const key = Object.keys(RESPONSES).find(
    (k) => k.toLowerCase() === command.toLowerCase()
  );

  if (key) return { command, output: RESPONSES[key], clear: key === "clear" };

  return {
    command,
    output: [`command not found: ${command}`, "type 'help' to see available commands"],
  };
}
