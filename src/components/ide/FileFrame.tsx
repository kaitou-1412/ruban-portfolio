import { ReactNode, useLayoutEffect, useRef, useState } from 'react';
import type { FileKind } from '../../types/portfolio';

interface Props {
  id: string;
  path?: string;
  name: string;
  kind: FileKind;
  badge?: string;
  children: ReactNode;
}

const KIND_LETTER: Record<FileKind, string> = {
  md: 'M',
  json: 'J',
  yaml: 'Y',
  sh: 'S',
  folder: '▸',
};

export function FileFrame({ id, path = '', name, kind, badge, children }: Props) {
  const contentRef = useRef<HTMLDivElement>(null);
  return (
    <section className="file" id={id}>
      <div className="file-head">
        <span className={`fi fi-${kind}`}>{KIND_LETTER[kind]}</span>
        <span className="name">
          {path}
          {name}
        </span>
        <span className="badge">{badge || kind.toUpperCase()}</span>
      </div>
      <div className="file-body">
        <Gutter contentRef={contentRef} />
        <div className="content md" ref={contentRef}>
          {children}
        </div>
      </div>
    </section>
  );
}

// Renders only as many line numbers as fit the content (ResizeObserver-driven).
function Gutter({
  contentRef,
  start = 1,
}: {
  contentRef: React.RefObject<HTMLDivElement>;
  start?: number;
}) {
  const [count, setCount] = useState(8);
  useLayoutEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const lineH = 24;
    const update = (h: number) => setCount(Math.max(6, Math.ceil(h / lineH)));
    update(el.getBoundingClientRect().height);
    const ro = new ResizeObserver((entries) => {
      update(entries[0].contentRect.height);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, [contentRef]);

  const lines = [];
  for (let i = 0; i < count; i++) lines.push(start + i);
  return (
    <div className="gutter" aria-hidden>
      {lines.map((n) => (
        <div key={n}>{n}</div>
      ))}
    </div>
  );
}
