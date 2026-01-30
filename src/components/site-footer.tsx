'use client'

export function SiteFooter() {
  return (
    <footer className="flex-shrink-0">
      <div className="win-taskbar">
        {/* Start button */}
        <a href="https://docs.pars.network" className="win-start-btn">
          <span className="win-start-icon">P</span>
          <span>Start</span>
        </a>

        {/* Quick launch */}
        <div className="win-quicklaunch hidden sm:flex">
          <a href="https://docs.pars.network">Docs</a>
          <a href="https://explore.pars.network">Explorer</a>
          <a href="https://bridge.pars.network">Bridge</a>
          <a href="https://github.com/pars-network">GitHub</a>
        </div>

        {/* System tray */}
        <div className="win-systray">
          <a href="https://twitter.com/parsnetwork" target="_blank" rel="noopener noreferrer">X</a>
          <a href="https://discord.gg/pars" target="_blank" rel="noopener noreferrer">DC</a>
          <a href="https://t.me/parsnetwork" target="_blank" rel="noopener noreferrer">TG</a>
          <span className="hidden sm:inline text-foreground/15">|</span>
          <span className="hidden sm:inline-flex items-center gap-1">
            <span className="led led-green" />
            494949
          </span>
        </div>
      </div>
    </footer>
  )
}
