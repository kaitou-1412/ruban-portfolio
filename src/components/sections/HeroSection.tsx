import { useEffect, useRef, useState } from 'react';
import type { Portfolio } from '../../types/portfolio';
import { FileFrame } from '../ide/FileFrame';

interface Props {
  data: Portfolio;
  onJumpTo: (id: string) => void;
  typing: boolean;
}

type PromptLine = { prompt: true; cmd: string; arg?: string } | { prompt: false; out: string };

export function HeroSection({ data, onJumpTo, typing }: Props) {
  const me = data.me;
  const lines: PromptLine[] = [
    { prompt: true, cmd: 'whoami' },
    { prompt: false, out: `${me.name} · ${me.role} · ${me.location}` },
    { prompt: true, cmd: 'cat', arg: 'intro.txt' },
  ];

  return (
    <FileFrame id="readme" name="README.md" kind="md">
      <div className="hero">
        <TypedPromptBlock lines={lines} typing={typing} />

        <h1 className="name">
          {me.name}
          <span className="accent">.</span>
        </h1>
        <p className="tagline">{me.tagline}</p>

        <div className="hero-meta">
          <span>
            <span className="k">role</span>
            <span className="v">{me.role} · 3+ yrs</span>
          </span>
          <span>
            <span className="k">based</span>
            <span className="v">{me.location}</span>
          </span>
          <span>
            <span className="k">stack</span>
            <span className="v">Go · Python · TS · k8s</span>
          </span>
          <span>
            <span className="k">status</span>
            <span className="v accent-text">open to chat</span>
          </span>
        </div>

        <div className="hero-cta">
          <a className="btn primary" href={`mailto:${me.email}`}>
            <span className="glyph">$</span> say hi
          </a>
          <button className="btn" onClick={() => onJumpTo('experience')}>
            <span className="glyph">›</span> ./experience
          </button>
          <button className="btn" onClick={() => onJumpTo('auth')}>
            <span className="glyph">›</span> ./projects
          </button>
          <a className="btn" href={me.github} target="_blank" rel="noreferrer">
            <span className="glyph">↗</span> github
          </a>
        </div>
      </div>

      <div className="hero-divider" aria-hidden />

      <div className="hero-stats">
        {data.stats.map((s) => (
          <div className="hero-stat" key={s.lbl}>
            <div className="hero-stat-v">{s.stat}</div>
            <div className="hero-stat-l">{s.lbl}</div>
          </div>
        ))}
      </div>

      <p className="hero-bio">{me.bio}</p>

      <p className="hero-elsewhere">
        <span className="tk-com"># elsewhere</span>{' '}
        <a href={me.github} target="_blank" rel="noreferrer">
          github
        </a>
        {' · '}
        <a href={me.linkedin} target="_blank" rel="noreferrer">
          linkedin
        </a>
        {' · '}
        <a href={me.blog} target="_blank" rel="noreferrer">
          hashnode
        </a>
      </p>
    </FileFrame>
  );
}

function TypedPromptBlock({ lines, typing }: { lines: PromptLine[]; typing: boolean }) {
  const [idx, setIdx] = useState(typing ? 0 : lines.length - 1);
  const [chars, setChars] = useState(typing ? 0 : Number.MAX_SAFE_INTEGER);
  const [done, setDone] = useState(!typing);
  const skipRef = useRef(false);

  useEffect(() => {
    if (done) return;
    const line = lines[idx];
    const fullText = line.prompt ? `${line.cmd}${line.arg ? ' ' + line.arg : ''}` : line.out;
    if (chars < fullText.length) {
      const t = window.setTimeout(() => setChars(chars + 1), skipRef.current ? 0 : 22);
      return () => window.clearTimeout(t);
    } else if (idx < lines.length - 1) {
      const t = window.setTimeout(
        () => {
          setIdx(idx + 1);
          setChars(0);
        },
        skipRef.current ? 0 : 200,
      );
      return () => window.clearTimeout(t);
    } else {
      setDone(true);
    }
  }, [idx, chars, done, lines]);

  const skip = () => {
    skipRef.current = true;
  };

  return (
    <div onClick={skip} style={{ cursor: done ? 'default' : 'pointer' }}>
      {lines.slice(0, idx + 1).map((l, i) => {
        const fullText = l.prompt ? `${l.cmd}${l.arg ? ' ' + l.arg : ''}` : l.out;
        const showText = i < idx ? fullText : fullText.slice(0, chars);
        if (l.prompt) {
          const parts = showText.split(' ');
          return (
            <div className="hero-prompt" key={i}>
              <span className="prompt">~$</span>
              <span className="cmd">
                {parts[0]}
                {parts[1] && (
                  <>
                    {' '}
                    <span className="arg">{parts.slice(1).join(' ')}</span>
                  </>
                )}
              </span>
              {i === idx && !done && <span className="cursor" />}
            </div>
          );
        }
        return (
          <div
            key={i}
            style={{ color: 'var(--text-2)', paddingLeft: 22, fontSize: 13 }}
          >
            {showText}
            {i === idx && !done && <span className="cursor" />}
          </div>
        );
      })}
    </div>
  );
}
