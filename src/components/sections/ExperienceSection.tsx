import { useState } from 'react';
import type { ExperienceCommit, Portfolio } from '../../types/portfolio';
import { FileFrame } from '../ide/FileFrame';
import { renderHighlights } from '../../lib/highlights';

export function ExperienceSection({ data }: { data: Portfolio }) {
  return (
    <FileFrame id="experience" name="experience.json" kind="json" badge="GIT-LOG">
      <p style={{ color: 'var(--muted)', marginTop: 0 }}>
        <span className="tk-com">
          {'// 3 commits on this branch — click `git show` to expand any of them.'}
        </span>
      </p>
      <div className="gitlog">
        {data.experience.map((c) => (
          <Commit key={c.hash} c={c} />
        ))}
      </div>
    </FileFrame>
  );
}

interface DatePart {
  month: string;
  year: string;
  current: boolean;
}

function parseDatePart(part: string): DatePart {
  if (!part) return { month: '', year: '', current: false };
  if (/present|current|now/i.test(part)) return { month: 'NOW', year: '', current: true };
  const m = part.match(/([A-Za-z]+)\s+(\d{4})/);
  if (!m) return { month: part.toUpperCase(), year: '', current: false };
  return { month: m[1].toUpperCase().slice(0, 3), year: '’' + m[2].slice(2), current: false };
}

function parseDateRange(s: string): { from: DatePart; to: DatePart } {
  const [a, b] = s.split(/—|–|-/).map((x) => x.trim());
  return { from: parseDatePart(a), to: parseDatePart(b) };
}

function CalendarIcon() {
  return (
    <svg
      className="cal-icon"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      aria-hidden
    >
      <rect x="2" y="3.5" width="12" height="10.5" rx="1.4" />
      <line x1="2" y1="6.5" x2="14" y2="6.5" />
      <line x1="5" y1="2" x2="5" y2="4.5" />
      <line x1="11" y1="2" x2="11" y2="4.5" />
    </svg>
  );
}

function DateBlock({ part }: { part: DatePart }) {
  return (
    <span className={`date-block ${part.current ? 'is-current' : ''}`}>
      <CalendarIcon />
      <span className="db-month">{part.month}</span>
      {part.year && <span className="db-year">{part.year}</span>}
    </span>
  );
}

function Commit({ c }: { c: ExperienceCommit }) {
  const [open, setOpen] = useState(false);
  const range = parseDateRange(c.date);
  return (
    <div className={`commit ${c.isHead ? 'is-head' : ''}`}>
      <div className="commit-head">
        <span className="commit-hash">{c.hash}</span>
        {c.isHead && <span className="commit-ref">HEAD → main</span>}
        <span className="date-range commit-daterange">
          <DateBlock part={range.from} />
          <span className="db-arrow" aria-hidden>
            →
          </span>
          <DateBlock part={range.to} />
        </span>
      </div>
      <div className="commit-title">{c.role}</div>
      <div className="commit-meta">
        <span className="at">@</span> {c.company} · {c.location}
      </div>

      {c.headline && <div className="commit-headline">{c.headline}</div>}

      {c.metrics.length > 0 && (
        <div className="commit-metrics">
          {c.metrics.map((m, i) => (
            <div className="metric-tile" key={i}>
              <div className="metric-v">{m.v}</div>
              <div className="metric-l">{m.l}</div>
            </div>
          ))}
        </div>
      )}

      {c.tags.length > 0 && (
        <div className="tags">
          {c.tags.map((t) => (
            <span className="tag" key={t}>
              {t}
            </span>
          ))}
        </div>
      )}

      <button
        className="show-more"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="prompt">$</span>
        <span>git show {c.hash}</span>
        <span className={`chev ${open ? 'is-open' : ''}`}>›</span>
      </button>

      {open && (
        <ul className="commit-bullets">
          {c.bullets.map((b, i) => (
            <li key={i}>{renderHighlights(b)}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
