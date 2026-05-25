import { ReactNode } from 'react';

// Replaces "{{...}}" runs with accent-styled spans.
export function renderHighlights(text: string): ReactNode[] {
  const parts = text.split(/(\{\{[^}]+\}\})/g);
  return parts.map((p, i) => {
    if (p.startsWith('{{') && p.endsWith('}}')) {
      return (
        <span key={i} className="num">
          {p.slice(2, -2)}
        </span>
      );
    }
    return <span key={i}>{p}</span>;
  });
}
