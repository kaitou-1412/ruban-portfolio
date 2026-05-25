import type { Accent, SectionRef } from '../../types/portfolio';

interface Props {
  active: string;
  sections: SectionRef[];
  accent: Accent;
}

const KIND_LABEL: Record<string, string> = {
  json: 'JSON',
  yaml: 'YAML',
  sh: 'Shell',
  md: 'Markdown',
};

export function StatusBar({ active, sections, accent }: Props) {
  const s = sections.find((x) => x.id === active) || sections[0];
  const idx = sections.findIndex((x) => x.id === active);
  return (
    <div className="statusbar" role="status">
      <span className="item">
        <span className="icn">⎇</span> main
      </span>
      <span className="sep">|</span>
      <span className="item hide-sm">
        <span className="icn">●</span> 0 errors · 0 warnings
      </span>
      <span className="spacer" />
      <span className="item hide-sm">
        {s.path || ''}
        {s.label}
      </span>
      <span className="sep">|</span>
      <span className="item">Ln {Math.max(idx + 1, 1) * 12}</span>
      <span className="sep hide-sm">|</span>
      <span className="item hide-sm">{KIND_LABEL[s.kind] ?? 'Markdown'}</span>
      <span className="sep hide-sm">|</span>
      <span className="item hide-sm">UTF-8</span>
      <span className="sep">|</span>
      <span className="item">{accent}</span>
    </div>
  );
}
