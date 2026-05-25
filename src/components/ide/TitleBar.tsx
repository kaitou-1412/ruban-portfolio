import type { Theme } from '../../types/portfolio';

interface Props {
  theme: Theme;
  onToggleTheme: () => void;
  onToggleSidebar: () => void;
  branch: string;
  dirty?: boolean;
}

export function TitleBar({ theme, onToggleTheme, onToggleSidebar, branch, dirty }: Props) {
  return (
    <div className="titlebar">
      <button className="menu-btn" onClick={onToggleSidebar} aria-label="Toggle files">
        ☰ <span>files</span>
      </button>
      <div className="lights" aria-hidden>
        <span className="light red" />
        <span className="light yellow" />
        <span className="light green" />
      </div>
      <div className="tb-path">
        ruban@portfolio: <span className="branch">~/{branch}</span>
        {dirty ? <span className="dirty">●</span> : null}
      </div>
      <div className="tb-actions">
        <button
          className="tb-btn"
          onClick={onToggleTheme}
          aria-pressed={theme === 'light'}
          title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? '◐' : '◑'} <span className="label">{theme}</span>
        </button>
      </div>
    </div>
  );
}
