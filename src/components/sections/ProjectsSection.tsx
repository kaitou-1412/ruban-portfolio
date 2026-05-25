import type { Portfolio, Project } from '../../types/portfolio';
import { FileFrame } from '../ide/FileFrame';

export function ProjectsSection({ data }: { data: Portfolio }) {
  const featured = data.projects.find((p) => p.featured) || data.projects[0];
  return (
    <FileFrame id="auth" path="projects/" name="auth-service.md" kind="md" badge="FEATURED">
      <FeaturedProject p={featured} />

      <p style={{ marginTop: 28, color: 'var(--muted)' }}>
        <span className="tk-com">{'// more projects in flight — check back soon'}</span>
      </p>
      <div className="projects-row">
        <ComingSoonProject
          title="Realtime feed engine"
          stack={['Go', 'Redis', 'WebSockets']}
          summary="Fan-out engine for 100k+ concurrent listeners with backpressure-aware delivery."
        />
        <ComingSoonProject
          title="kube-cost-cop"
          stack={['Go', 'Prometheus', 'k8s']}
          summary="Kubernetes cost telemetry + per-team budget alerts. Slack-native digest."
        />
      </div>
    </FileFrame>
  );
}

function FeaturedProject({ p }: { p: Project }) {
  const summary =
    'One deploy, many apps. RS256 JWT with refresh rotation, rate-limited auth, decentralized authorization — services verify tokens with the public key and never round-trip back.';
  return (
    <article className="project">
      <div className="project-head">
        <span className="fi fi-md">M</span>
        <span className="filename">projects/{p.id}.md</span>
        <span className="badge">{p.featured ? 'FEATURED' : 'PROJECT'}</span>
      </div>
      <div className="project-body">
        <div>
          <div className="project-title">{p.title}</div>
          <div className="project-stack">
            <span className="br">[</span> {p.stack.join(' · ')} <span className="br">]</span>
          </div>
          <p className="project-summary">{summary}</p>
          <div className="project-links">
            <ProjectLink href={p.links.code} glyph="$" label="git clone" />
            <ProjectLink href={p.links.demo} glyph="▶" label="demo video" variant="primary" />
            <ProjectLink href={p.links.live} glyph="↗" label="live app" />
          </div>
        </div>
        <div className="project-art">
          <div className="art-title">{'/* request flow */'}</div>
          <ArchitectureDiagram />
          <div className="arch-caption">JWT (RS256) — verified locally with the public key.</div>
        </div>
      </div>
    </article>
  );
}

function ProjectLink({
  href,
  glyph,
  label,
  variant,
}: {
  href: string;
  glyph: string;
  label: string;
  variant?: 'primary';
}) {
  const cls = variant === 'primary' ? 'btn primary' : 'btn';
  const isReal = href && href !== '#';
  if (!isReal) {
    return (
      <button className={cls} disabled style={{ opacity: 0.5, cursor: 'not-allowed' }}>
        <span className="glyph">{glyph}</span> {label}
      </button>
    );
  }
  return (
    <a className={cls} href={href} target="_blank" rel="noreferrer">
      <span className="glyph">{glyph}</span> {label}
    </a>
  );
}

function ArchitectureDiagram() {
  return (
    <svg
      className="arch-svg"
      viewBox="0 0 380 220"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Multi-tenant auth service architecture"
    >
      <defs>
        <marker
          id="arrowhead"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" className="arch-head" />
        </marker>
        <marker
          id="arrowhead-alt"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M 0 0 L 10 5 L 0 10 z" className="arch-head alt" />
        </marker>
      </defs>

      <text x="190" y="14" textAnchor="middle" className="arch-label">
        request → token → verify locally
      </text>

      <g className="arch-node">
        <rect x="12" y="40" width="78" height="38" rx="4" />
        <text x="51" y="63" textAnchor="middle">
          app A
        </text>
      </g>
      <g className="arch-node">
        <rect x="12" y="100" width="78" height="38" rx="4" />
        <text x="51" y="123" textAnchor="middle">
          app B
        </text>
      </g>
      <g className="arch-node">
        <rect x="12" y="160" width="78" height="38" rx="4" />
        <text x="51" y="183" textAnchor="middle">
          app C
        </text>
      </g>

      <g className="arch-node arch-node-accent">
        <rect x="148" y="90" width="104" height="58" rx="5" />
        <text x="200" y="114" textAnchor="middle">
          auth
        </text>
        <text x="200" y="130" textAnchor="middle" className="sub">
          service
        </text>
      </g>

      <g className="arch-node arch-node-db">
        <rect x="304" y="96" width="66" height="46" rx="4" />
        <text x="337" y="117" textAnchor="middle">
          postgres
        </text>
        <text x="337" y="131" textAnchor="middle" className="sub">
          users·keys
        </text>
      </g>

      <path
        className="arch-arrow"
        d="M92,59 C118,72 124,82 148,100"
        markerEnd="url(#arrowhead)"
      />
      <path className="arch-arrow" d="M92,119 L148,119" markerEnd="url(#arrowhead)" />
      <path
        className="arch-arrow"
        d="M92,179 C118,168 124,158 148,140"
        markerEnd="url(#arrowhead)"
      />
      <path className="arch-arrow alt" d="M252,119 L304,119" markerEnd="url(#arrowhead-alt)" />

      <text x="120" y="212" textAnchor="middle" className="arch-label">
        /auth/login · /refresh
      </text>
      <text x="328" y="212" textAnchor="middle" className="arch-label">
        sqlc · goose
      </text>
    </svg>
  );
}

function ComingSoonProject({
  title,
  stack,
  summary,
}: {
  title: string;
  stack: string[];
  summary: string;
}) {
  return (
    <article className="project compact">
      <div className="project-head">
        <span className="fi fi-md">M</span>
        <span className="filename">projects/coming-soon.md</span>
        <span className="badge">WIP</span>
      </div>
      <div className="project-body">
        <div>
          <div className="project-title" style={{ fontSize: 16 }}>
            {title}
          </div>
          <div className="project-stack">
            <span className="br">[</span> {stack.join(' · ')} <span className="br">]</span>
          </div>
          <ul className="project-bullets">
            <li>{summary}</li>
            <li style={{ color: 'var(--muted)' }}>publishing demo &amp; code soon.</li>
          </ul>
          <div className="project-links">
            <button className="btn" disabled style={{ opacity: 0.5, cursor: 'not-allowed' }}>
              <span className="glyph">$</span> code
            </button>
            <button className="btn" disabled style={{ opacity: 0.5, cursor: 'not-allowed' }}>
              <span className="glyph">▶</span> demo
            </button>
            <button className="btn" disabled style={{ opacity: 0.5, cursor: 'not-allowed' }}>
              <span className="glyph">↗</span> live
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
