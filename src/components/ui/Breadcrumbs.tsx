import Link from "next/link";
import { BreadcrumbSchema, type Crumb } from "@/components/schema/BreadcrumbSchema";

export function Breadcrumbs({ items, tone = "paper" }: { items: Crumb[]; tone?: "paper" | "ink" }) {
  const textColor = tone === "paper" ? "text-ash" : "text-smoke";
  const currentColor = tone === "paper" ? "text-ink" : "text-paper";
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <BreadcrumbSchema items={[{ label: "Home", path: "/" }, ...items]} />
      <ol className={`flex flex-wrap items-center gap-1.5 font-mono text-[11px] uppercase tracking-wider ${textColor}`}>
        <li>
          <Link href="/" className="hover:underline">
            Home
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={item.path} className="flex items-center gap-1.5">
            <span aria-hidden="true">/</span>
            {i === items.length - 1 ? (
              <span className={currentColor} aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link href={item.path} className="hover:underline">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
