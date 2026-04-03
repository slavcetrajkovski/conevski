export function DemoBanner() {
  return (
    <div className="w-full bg-brand-brown py-4 px-4 text-center">
      <p className="text-xs text-white/60 font-medium tracking-wide">
        This is a demo page.{" "}
        <span className="text-white/40 mx-2">·</span>
        For the full website contact{" "}
        <a
          href="https://slavkotrajkovski.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white underline underline-offset-4 decoration-white/30 hover:decoration-white transition-colors"
        >
          slavkotrajkovski.com
        </a>
      </p>
    </div>
  )
}
