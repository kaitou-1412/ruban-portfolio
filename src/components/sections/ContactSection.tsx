import type { Portfolio } from '../../types/portfolio';
import { FileFrame } from '../ide/FileFrame';

export function ContactSection({ data }: { data: Portfolio }) {
  const me = data.me;
  return (
    <FileFrame id="contact" name="contact.sh" kind="sh">
      <p style={{ marginTop: 0, color: 'var(--muted)' }}>
        <span className="tk-com">#!/usr/bin/env bash</span>
        <br />
        <span className="tk-com"># the friendliest way to reach me: just email.</span>
      </p>

      <div className="contact">
        <div style={{ color: 'var(--text-2)' }}>
          <span className="prompt" style={{ color: 'var(--accent)' }}>
            ~$
          </span>{' '}
          <span className="tk-fn">echo</span> <span className="tk-str">"$EMAIL"</span>
        </div>
        <a className="big-email" href={`mailto:${me.email}`}>
          {me.email}
        </a>

        <div style={{ color: 'var(--text-2)', marginTop: 8 }}>
          <span className="prompt" style={{ color: 'var(--accent)' }}>
            ~$
          </span>{' '}
          <span className="tk-fn">open</span>{' '}
          <span className="tk-com"># elsewhere on the internet</span>
        </div>
        <div className="links">
          <a className="btn" href={me.github} target="_blank" rel="noreferrer">
            <span className="glyph">↗</span> github / {me.handle}
          </a>
          <a className="btn" href={me.linkedin} target="_blank" rel="noreferrer">
            <span className="glyph">↗</span> linkedin
          </a>
          <a className="btn" href={me.blog} target="_blank" rel="noreferrer">
            <span className="glyph">↗</span> hashnode
          </a>
          <a className="btn" href={`tel:${me.phone.replace(/\s/g, '')}`}>
            <span className="glyph">☎</span> {me.phone}
          </a>
        </div>

        <div className="exit">
          <span className="prompt" style={{ color: 'var(--accent)' }}>
            ~$
          </span>{' '}
          exit <span className="ok">{'// status 0 — thanks for reading.'}</span>
        </div>
      </div>
    </FileFrame>
  );
}
