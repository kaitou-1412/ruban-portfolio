import type { Portfolio, SkillCategory, SkillIcon } from '../../types/portfolio';
import { FileFrame } from '../ide/FileFrame';

export function SkillsSection({ data }: { data: Portfolio }) {
  return (
    <FileFrame id="skills" name="skills.yaml" kind="yaml">
      <p style={{ marginTop: 0, color: 'var(--muted)' }}>
        <span className="tk-com">
          # tools I reach for first — bold ones are daily drivers.
        </span>
      </p>

      <div className="skills-stack">
        {data.skills.map((cat, i) => (
          <SkillRow key={cat.key} cat={cat} index={i} />
        ))}
      </div>

      <div className="skills-foot">
        <span className="tk-com"># currently learning</span>
        <div className="tags" style={{ marginTop: 6 }}>
          <span className="tag">Rust</span>
          <span className="tag">OpenTelemetry</span>
          <span className="tag">SLO design</span>
          <span className="tag">eBPF</span>
        </div>
      </div>
    </FileFrame>
  );
}

function SkillRow({ cat, index }: { cat: SkillCategory; index: number }) {
  return (
    <div className="skill-row">
      <div className="skill-row-side">
        <div className="skill-row-headline">
          <CategoryIcon name={cat.icon} />
          <div className="skill-row-title">
            <div className="skill-key">{String(index + 1).padStart(2, '0')}</div>
            <div className="skill-label">{cat.label}</div>
          </div>
        </div>
        <div className="skill-note">{cat.note}</div>
      </div>
      <div className="skill-row-main">
        <div className="skill-tier skill-tier-primary">
          {cat.primary.map((p) => (
            <span className="skill-pill is-primary" key={p}>
              {p}
            </span>
          ))}
        </div>
        {cat.secondary.length > 0 && (
          <div className="skill-tier skill-tier-secondary">
            {cat.secondary.map((p) => (
              <span className="skill-pill" key={p}>
                {p}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function CategoryIcon({ name }: { name: SkillIcon }) {
  const common = {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.5,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
    className: 'cat-icon',
  };
  switch (name) {
    case 'lang':
      return (
        <svg {...common}>
          <path d="M10 4c-3 0-3 4-3 6 0 1.2-.6 2-2 2 1.4 0 2 .8 2 2 0 2 0 6 3 6" />
          <path d="M14 4c3 0 3 4 3 6 0 1.2.6 2 2 2-1.4 0-2 .8-2 2 0 2 0 6-3 6" />
        </svg>
      );
    case 'api':
      return (
        <svg {...common}>
          <rect x="3" y="6" width="6" height="12" rx="1.2" />
          <rect x="15" y="6" width="6" height="12" rx="1.2" />
          <path d="M9.5 10h5" />
          <path d="M13 8.5l1.7 1.5L13 11.5" />
          <path d="M14.5 14h-5" />
          <path d="M11 12.5L9.3 14L11 15.5" />
        </svg>
      );
    case 'data':
      return (
        <svg {...common}>
          <ellipse cx="12" cy="6" rx="7" ry="2.4" />
          <path d="M5 6v12c0 1.3 3.1 2.4 7 2.4s7-1.1 7-2.4V6" />
          <path d="M5 12c0 1.3 3.1 2.4 7 2.4s7-1.1 7-2.4" />
        </svg>
      );
    case 'cloud':
      return (
        <svg {...common}>
          <path d="M7 17.5c-2.5 0-4-1.6-4-3.6 0-1.9 1.5-3.5 3.7-3.6.3-2.6 2.6-4.7 5.4-4.7 2.8 0 5.1 2 5.4 4.6 2 0 4 1.4 4 3.5 0 2-1.4 3.6-3.9 3.6H7Z" />
        </svg>
      );
    case 'ops':
      return (
        <svg {...common}>
          <path d="M7 8C4 8 4 16 7 16c2.5 0 4-3 5-4 1-1 2.5-4 5-4 3 0 3 8 0 8-2.5 0-4-3-5-4-1-1-2.5-4-5-4Z" />
        </svg>
      );
  }
}
