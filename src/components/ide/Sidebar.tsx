import { useState } from 'react';
import type { FolderNode, TreeEntry } from '../../types/portfolio';
import { FileIcon } from './FileIcon';

interface Props {
  files: TreeEntry[];
  active: string;
  onSelect: (id: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ files, active, onSelect, isOpen, onClose }: Props) {
  return (
    <>
      <aside
        className={`sidebar ${isOpen ? 'is-open' : ''}`}
        aria-label="File explorer"
      >
        <div className="sidebar-section">
          <span className="chev">▾</span>
          <span>ruban/</span>
          <span className="sidebar-section-meta">7 files</span>
        </div>
        <Tree files={files} active={active} onSelect={onSelect} />

        <div className="sidebar-foot">
          <a href="https://github.com/kaitou-1412" target="_blank" rel="noreferrer">
            ↗ github
          </a>
          {' · '}
          <a href="mailto:ruban1work@gmail.com">↗ email</a>
        </div>
      </aside>
      <div className={`scrim ${isOpen ? 'is-open' : ''}`} onClick={onClose} />
    </>
  );
}

function Tree({
  files,
  active,
  onSelect,
}: {
  files: TreeEntry[];
  active: string;
  onSelect: (id: string) => void;
}) {
  return (
    <ul className="tree">
      {files.map((node, i) => {
        if ('folder' in node) {
          return (
            <TreeFolder
              key={node.folder + i}
              folder={node}
              active={active}
              onSelect={onSelect}
            />
          );
        }
        return (
          <li key={node.id}>
            <button
              className={`tree-item ${active === node.id ? 'is-active' : ''}`}
              onClick={() => onSelect(node.id)}
            >
              <span className="indent" />
              <FileIcon kind={node.kind} />
              <span className="tree-name">{node.name}</span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}

function TreeFolder({
  folder,
  active,
  onSelect,
}: {
  folder: FolderNode;
  active: string;
  onSelect: (id: string) => void;
}) {
  const [open, setOpen] = useState(folder.open !== false);
  return (
    <li>
      <button
        className={`tree-item ${open ? '' : 'is-collapsed'}`}
        onClick={() => setOpen(!open)}
      >
        <span className="chev">▾</span>
        <span className="fi fi-folder">{open ? '▾' : '▸'}</span>
        <span className="tree-name">{folder.folder}/</span>
      </button>
      {open && (
        <ul className="tree">
          {folder.children.map((c) => (
            <li key={c.id}>
              <button
                className={`tree-item ${active === c.id ? 'is-active' : ''}`}
                onClick={() => onSelect(c.id)}
              >
                <span className="indent" />
                <span style={{ width: 14, display: 'inline-block' }} />
                <FileIcon kind={c.kind} />
                <span className="tree-name">{c.name}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
