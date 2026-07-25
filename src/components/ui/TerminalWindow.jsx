import { Minus, Square, SquareTerminal, X } from "lucide-react";

export default function TerminalWindow({ title = "Windows PowerShell", children, className = "" }) {
  return (
    <div
      className={`overflow-hidden rounded-md border border-border bg-surface/90 shadow-[0_0_0_1px_rgba(57,255,157,0.05),0_20px_60px_-15px_rgba(0,0,0,0.6)] backdrop-blur-sm ${className}`}
    >
      <div className="flex items-center justify-between border-b border-border bg-[#0d1210] pl-3 pr-0">
        <div className="flex min-w-0 items-center gap-2 py-2">
          <SquareTerminal size={14} className="shrink-0 text-accent" />
          <span className="truncate font-mono text-xs text-text-dim">{title}</span>
        </div>
        <div className="flex items-stretch">
          <button
            type="button"
            aria-label="Minimize window"
            className="flex w-10 items-center justify-center text-text-dim transition-colors hover:bg-white/5 hover:text-text"
          >
            <Minus size={13} />
          </button>
          <button
            type="button"
            aria-label="Maximize window"
            className="flex w-10 items-center justify-center text-text-dim transition-colors hover:bg-white/5 hover:text-text"
          >
            <Square size={11} />
          </button>
          <button
            type="button"
            aria-label="Close window"
            className="flex w-10 items-center justify-center text-text-dim transition-colors hover:bg-red-600 hover:text-white"
          >
            <X size={14} />
          </button>
        </div>
      </div>
      <div className="p-5 sm:p-6">{children}</div>
    </div>
  );
}
