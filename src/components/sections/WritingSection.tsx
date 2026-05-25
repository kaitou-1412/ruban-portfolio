import { Fragment, useState } from 'react';
import type { Portfolio, Post } from '../../types/portfolio';
import { FileFrame } from '../ide/FileFrame';

export function WritingSection({ data }: { data: Portfolio }) {
  const me = data.me;
  const meta = data.writingMeta;
  return (
    <FileFrame id="writing" path="writing/" name="latest-posts.md" kind="md">
      <div className="writing-head">
        <div>
          <div className="writing-title">Ruban's blog</div>
          <div className="writing-meta">
            <span className="tk-com"># </span>
            <span>{meta.totalPosts} posts on hashnode</span>
            <span className="tk-pun"> · </span>
            <span>writing on </span>
            {meta.categories.map((c, i) => (
              <Fragment key={c}>
                <span className="writing-cat">{c}</span>
                {i < meta.categories.length - 1 ? <span>, </span> : null}
              </Fragment>
            ))}
          </div>
        </div>
        <a className="btn" href={me.blog} target="_blank" rel="noreferrer">
          <span className="glyph">↗</span> read on hashnode
        </a>
      </div>

      <div className="post-list">
        {data.writing.map((p, i) => (
          <a
            className="post-card"
            href={p.url}
            target="_blank"
            rel="noreferrer"
            key={i}
          >
            <div className="post-num">{String(i + 1).padStart(2, '0')}</div>
            <PostThumb post={p} idx={i} />
            <div className="post-body">
              <div className="post-title">{p.title}</div>
              <div className="post-sub">{p.subtitle}</div>
              <div className="post-foot">
                <span className="post-date">{p.date}</span>
                <span className="post-dot">·</span>
                <span className="post-read">{p.read} read</span>
                <span className="post-dot">·</span>
                <span className="post-tag">{p.tag}</span>
                <span className="post-likes" title={`${p.likes} likes`}>
                  <span className="like-glyph">♥</span> {p.likes}
                </span>
              </div>
            </div>
            <div className="post-arrow">↗</div>
          </a>
        ))}
      </div>

      <div className="post-foot-link">
        <a href={me.blog} target="_blank" rel="noreferrer">
          → all {meta.totalPosts} posts on hashnode
        </a>
      </div>
    </FileFrame>
  );
}

function PostThumb({ post, idx }: { post: Post; idx: number }) {
  const [imgError, setImgError] = useState(false);

  if (post.cover && !imgError) {
    return (
      <div className="post-thumb">
        <img src={post.cover} alt="" onError={() => setImgError(true)} />
      </div>
    );
  }

  const hue = post.thumb?.hue ?? (idx * 80) % 360;
  const motif = post.thumb?.motif || 'grid';
  const initials =
    post.title
      .split(/\s+/)
      .filter((w) => /^[A-Z]/.test(w))
      .slice(0, 2)
      .map((w) => w[0])
      .join('') || post.title.slice(0, 2).toUpperCase();
  const bg = `hsl(${hue}, 38%, 16%)`;
  const fg = `hsl(${hue}, 75%, 78%)`;
  return (
    <div className="post-thumb" aria-hidden>
      <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice">
        <rect width="100" height="100" fill={bg} />
        <PostMotif name={motif} hue={hue} />
        <text x="50" y="60" textAnchor="middle" className="thumb-initials" fill={fg}>
          {initials}
        </text>
      </svg>
    </div>
  );
}

function PostMotif({ name, hue }: { name: Post['thumb']['motif']; hue: number }) {
  const stroke = `hsla(${hue}, 80%, 78%, 0.5)`;
  const fill = `hsla(${hue}, 80%, 78%, 0.12)`;
  if (name === 'grid') {
    const dots = [];
    for (let y = 8; y < 100; y += 10)
      for (let x = 8; x < 100; x += 10)
        dots.push(<circle key={`${x}-${y}`} cx={x} cy={y} r="1.2" fill={stroke} />);
    return <g>{dots}</g>;
  }
  if (name === 'hex') {
    return (
      <g fill={fill} stroke={stroke} strokeWidth="1.1">
        <polygon points="20,18 30,13 40,18 40,30 30,35 20,30" />
        <polygon points="62,10 72,5 82,10 82,22 72,27 62,22" />
        <polygon points="35,52 45,47 55,52 55,64 45,69 35,64" />
        <polygon points="72,72 82,67 92,72 92,84 82,89 72,84" />
      </g>
    );
  }
  if (name === 'diag') {
    return (
      <g stroke={stroke} strokeWidth="1.4" fill="none">
        <line x1="-10" y1="20" x2="60" y2="-50" />
        <line x1="0" y1="40" x2="90" y2="-50" />
        <line x1="20" y1="60" x2="110" y2="-30" />
        <line x1="40" y1="80" x2="120" y2="0" />
        <line x1="60" y1="100" x2="130" y2="30" />
        <line x1="80" y1="120" x2="140" y2="60" />
      </g>
    );
  }
  if (name === 'stack') {
    return (
      <g stroke={stroke} strokeWidth="1.1" fill={fill}>
        <rect x="22" y="22" width="56" height="9" rx="2" />
        <rect x="22" y="36" width="56" height="9" rx="2" />
        <rect x="22" y="50" width="56" height="9" rx="2" />
        <rect x="22" y="64" width="56" height="9" rx="2" />
      </g>
    );
  }
  return null;
}
