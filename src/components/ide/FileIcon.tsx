import type { FileKind } from '../../types/portfolio';

const LETTER: Record<FileKind, string> = {
  md: 'M',
  json: '{}',
  yaml: 'Y',
  sh: '$',
  folder: '▸',
};

export function FileIcon({ kind }: { kind: FileKind }) {
  return <span className={`fi fi-${kind}`}>{LETTER[kind]}</span>;
}
