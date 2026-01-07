"use client";

export function GrainyTexture() {
  return (
    <section className="relative w-full py-20 overflow-hidden bg-background">
      {/* Exact background pattern */}
      <div className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden">
        <div className="absolute left-1/4 top-0 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-foreground/[0.03] to-transparent blur-3xl dark:from-white/[0.03]"></div>
        <div className="absolute bottom-0 right-1/4 h-[600px] w-[600px] rounded-full bg-gradient-to-tl from-foreground/[0.02] to-transparent blur-3xl dark:from-white/[0.02]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000000a_1px,transparent_1px),linear-gradient(to_bottom,#0000000a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>

      {/* Pure CSS grain texture */}
      <div className="relative z-10">
        {/* Grain layer 1 - small dots */}
        <div 
          className="absolute inset-0 opacity-30 dark:opacity-40"
          style={{
            background: `
              radial-gradient(circle at 20% 50%, transparent 0%, rgba(0, 0, 0, 0.2) 1px, transparent 1px),
              radial-gradient(circle at 60% 30%, transparent 0%, rgba(0, 0, 0, 0.2) 1px, transparent 1px),
              radial-gradient(circle at 40% 80%, transparent 0%, rgba(0, 0, 0, 0.2) 1px, transparent 1px),
              radial-gradient(circle at 80% 70%, transparent 0%, rgba(0, 0, 0, 0.2) 1px, transparent 1px)
            `,
            backgroundSize: '8px 8px, 10px 10px, 9px 9px, 11px 11px',
            backgroundPosition: '0 0, 3px 3px, 6px 6px, 9px 9px',
          }}
        />

        {/* Grain layer 2 - medium dots */}
        <div 
          className="absolute inset-0 opacity-20 dark:opacity-30"
          style={{
            background: `
              radial-gradient(circle at 10% 20%, transparent 0%, rgba(0, 0, 0, 0.15) 0.8px, transparent 0.8px),
              radial-gradient(circle at 50% 60%, transparent 0%, rgba(0, 0, 0, 0.15) 0.8px, transparent 0.8px),
              radial-gradient(circle at 90% 40%, transparent 0%, rgba(0, 0, 0, 0.15) 0.8px, transparent 0.8px),
              radial-gradient(circle at 30% 90%, transparent 0%, rgba(0, 0, 0, 0.15) 0.8px, transparent 0.8px)
            `,
            backgroundSize: '12px 12px, 14px 14px, 13px 13px, 15px 15px',
            backgroundPosition: '0 0, 4px 4px, 8px 8px, 12px 12px',
          }}
        />

        {/* Grain layer 3 - fine grain */}
        <div 
          className="absolute inset-0 opacity-40 dark:opacity-50"
          style={{
            background: `
              radial-gradient(circle at 25% 25%, transparent 0%, rgba(0, 0, 0, 0.3) 0.5px, transparent 0.5px),
              radial-gradient(circle at 75% 75%, transparent 0%, rgba(0, 0, 0, 0.3) 0.5px, transparent 0.5px),
              radial-gradient(circle at 50% 10%, transparent 0%, rgba(0, 0, 0, 0.3) 0.5px, transparent 0.5px),
              radial-gradient(circle at 15% 85%, transparent 0%, rgba(0, 0, 0, 0.3) 0.5px, transparent 0.5px)
            `,
            backgroundSize: '6px 6px, 7px 7px, 5px 5px, 8px 8px',
            backgroundPosition: '0 0, 2px 2px, 4px 4px, 6px 6px',
          }}
        />

        {/* Additional random grain pattern */}
        <div 
          className="absolute inset-0 opacity-25 dark:opacity-35"
          style={{
            background: `
              radial-gradient(circle at 35% 45%, transparent 0%, rgba(0, 0, 0, 0.25) 0.6px, transparent 0.6px),
              radial-gradient(circle at 65% 15%, transparent 0%, rgba(0, 0, 0, 0.25) 0.6px, transparent 0.6px),
              radial-gradient(circle at 85% 85%, transparent 0%, rgba(0, 0, 0, 0.25) 0.6px, transparent 0.6px),
              radial-gradient(circle at 5% 65%, transparent 0%, rgba(0, 0, 0, 0.25) 0.6px, transparent 0.6px)
            `,
            backgroundSize: '10px 10px, 11px 11px, 12px 12px, 9px 9px',
            backgroundPosition: '1px 1px, 5px 5px, 9px 9px, 13px 13px',
          }}
        />
      </div>
    </section>
  );
}