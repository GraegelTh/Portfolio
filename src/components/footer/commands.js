export const QUICK_COMMANDS = [
  { label: "run contact.exe", command: "run contact.exe" },
  { label: "fika --start", command: "fika --start" },
  { label: "deploy to_sweden", command: "deploy --target=sweden" },
];

const RESPONSES = {
  "run contact.exe": [
    "Booting contact.exe...",
    "> email:    contact@thomasgraegel.dev",
    "> linkedin: linkedin.com/in/thomas-graegel-dev",
    "> github:   github.com/GraegelTh",
    "> status:   based in Stockholm, open to opportunities",
  ],
  "fika --start": [
    "Initializing fika protocol...",
    "> coffee:      brewing (strong, this is Sweden)",
    "> kanelbulle:  1 found, 0 remaining",
    "> agents:      paused, even they need a break",
    "> small talk:  practicing Swedish... 'Vad gott!'",
    "Fika complete. Productivity restored.",
  ],
  "cat testimonial.txt": [
    "testimonial.txt has moved to the about section.",
    "Scroll up ↑ to read it.",
  ],
  "deploy --target=sweden": [
    "Resolving target: Sweden (Stockholm)...",
    "Deployment status: complete, live since August 2026.",
    "Currently running: Agentic Developer Intern @ SISP.",
    "Next release: open to new opportunities.",
  ],
  help: [
    "Available commands:",
    "  run contact.exe        show contact details",
    "  fika --start           take a Swedish coffee break",
    "  deploy --target=<x>    deployment / availability status",
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
