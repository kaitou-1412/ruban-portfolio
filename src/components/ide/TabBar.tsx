import type { SectionRef } from '../../types/portfolio';
import { FileIcon } from './FileIcon';

interface Props {
  open: string[];
  active: string;
  sections: SectionRef[];
  onSelect: (id: string) => void;
  onClose: (id: string) => void;
}

export function TabBar({ open, active, sections, onSelect, onClose }: Props) {
  return (
    <div className="tabbar" role="tablist">
      {open.map((id) => {
        const s = sections.find((x) => x.id === id);
        if (!s) return null;
        return (
          <button
            key={id}
            role="tab"
            aria-selected={active === id}
            className={`tab ${active === id ? 'is-active' : ''}`}
            onClick={() => onSelect(id)}
            title={`${s.path || ''}${s.label}`}
          >
            <FileIcon kind={s.kind} />
            <span>{s.label}</span>
            {open.length > 1 && (
              <span
                className="x"
                onClick={(e) => {
                  e.stopPropagation();
                  onClose(id);
                }}
                aria-label="Close tab"
              >
                ×
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
