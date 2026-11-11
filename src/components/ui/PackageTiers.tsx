export type PackageTier = {
  name: string;
  popular?: boolean;
  meta?: string;
  items: string[];
};

export type AddOn = {
  name: string;
  detail: string;
};

export function PackageTiers({ tiers }: { tiers: PackageTier[] }) {
  return (
    <div className="mt-10 grid gap-6 md:grid-cols-3">
      {tiers.map((t) => (
        <div
          key={t.name}
          className={`relative rounded-sm border bg-paper p-6 ${
            t.popular ? "border-navy-bright" : "border-paper-line"
          }`}
        >
          {t.popular && (
            <span className="absolute -top-3 left-6 rounded-sm bg-navy-bright px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-ink">
              Most popular
            </span>
          )}
          <h3 className="font-display text-xl font-semibold text-ink">{t.name}</h3>
          {t.meta && (
            <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-navy">{t.meta}</p>
          )}
          <ul className="mt-4 space-y-2 border-t border-paper-line pt-4 text-sm text-ash">
            {t.items.map((i) => (
              <li key={i}>&mdash; {i}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export function AddOnGrid({ addOns }: { addOns: AddOn[] }) {
  return (
    <div className="mt-6 grid gap-px overflow-hidden rounded-sm border border-paper-line bg-paper-line sm:grid-cols-2 md:grid-cols-3">
      {addOns.map((a) => (
        <div key={a.name} className="bg-paper p-6">
          <h3 className="font-display text-lg font-semibold text-ink">{a.name}</h3>
          <p className="mt-2 text-sm text-ash">{a.detail}</p>
        </div>
      ))}
    </div>
  );
}
