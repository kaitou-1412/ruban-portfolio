import { useEffect, useRef, useState } from 'react';
import type { Accent, Density, Theme, Tweaks } from '../../types/portfolio';

interface Props {
  tweaks: Tweaks;
  setTweak: <K extends keyof Tweaks>(key: K, value: Tweaks[K]) => void;
}

const ACCENTS: Array<{ name: Accent; hex: string }> = [
  { name: 'green', hex: '#7cc88f' },
  { name: 'amber', hex: '#e7a55b' },
  { name: 'blue', hex: '#79b6ff' },
  { name: 'magenta', hex: '#e886c5' },
];

const THEMES: Theme[] = ['dark', 'light'];
const DENSITIES: Density[] = ['cozy', 'compact'];

export function TweaksPanel({ tweaks, setTweak }: Props) {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      const t = e.target as Node;
      if (panelRef.current && !panelRef.current.contains(t)) {
        const fab = document.getElementById('twk-fab');
        if (!fab || !fab.contains(t)) setOpen(false);
      }
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [open]);

  return (
    <>
      <button
        id="twk-fab"
        className="twk-fab"
        onClick={() => setOpen((o) => !o)}
        aria-label="Open tweaks"
        title="Tweaks"
      >
        ✦
      </button>
      {open && (
        <div ref={panelRef} className="twk-panel" role="dialog" aria-label="Tweaks">
          <Row label="Theme">
            <Seg
              value={tweaks.theme}
              options={THEMES}
              onChange={(v) => setTweak('theme', v as Theme)}
            />
          </Row>
          <Row label="Accent">
            <div className="twk-swatches">
              {ACCENTS.map((a) => (
                <button
                  key={a.name}
                  className="twk-swatch"
                  aria-label={a.name}
                  aria-pressed={tweaks.accent === a.name}
                  style={{ background: a.hex }}
                  onClick={() => setTweak('accent', a.name)}
                />
              ))}
            </div>
          </Row>
          <Row label="Density">
            <Seg
              value={tweaks.density}
              options={DENSITIES}
              onChange={(v) => setTweak('density', v as Density)}
            />
          </Row>
          <Row label="Hero typing" inline>
            <button
              className="twk-toggle"
              aria-pressed={tweaks.typing}
              onClick={() => setTweak('typing', !tweaks.typing)}
            >
              <i />
            </button>
          </Row>
        </div>
      )}
    </>
  );
}

function Row({
  label,
  inline,
  children,
}: {
  label: string;
  inline?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className={inline ? 'twk-row twk-row-h' : 'twk-row'}>
      <div className="twk-label">{label}</div>
      {children}
    </div>
  );
}

function Seg<T extends string>({
  value,
  options,
  onChange,
}: {
  value: T;
  options: readonly T[];
  onChange: (v: T) => void;
}) {
  return (
    <div className="twk-seg" role="radiogroup">
      {options.map((o) => (
        <button
          key={o}
          role="radio"
          aria-checked={value === o}
          onClick={() => onChange(o)}
        >
          {o}
        </button>
      ))}
    </div>
  );
}
