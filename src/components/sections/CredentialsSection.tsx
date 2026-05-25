import type { Portfolio } from '../../types/portfolio';
import { FileFrame } from '../ide/FileFrame';

export function CredentialsSection({ data }: { data: Portfolio }) {
  const { education, achievements } = data.credentials;
  const [cgpaV, cgpaD] = education.cgpa.split(' / ');
  return (
    <FileFrame id="credentials" name="credentials.md" kind="md">
      <p style={{ marginTop: 0, color: 'var(--muted)' }}>
        <span className="tk-com">
          # education &amp; receipts. short list — quality over quantity.
        </span>
      </p>

      <div className="creds-grid">
        <div className="cred-card">
          <div className="cred-tag">{'/* education */'}</div>
          <div className="cred-title">{education.degree}</div>
          <div className="cred-sub">{education.school}</div>
          <div className="cred-sub">{education.date}</div>
          <div className="cred-cgpa">
            <span className="cred-cgpa-v">{cgpaV}</span>
            <span className="cred-cgpa-d">/{cgpaD}</span>
            <span className="cred-cgpa-l">CGPA</span>
          </div>
          <div className="cred-coursework">
            {education.coursework.map((c) => (
              <span className="skill-pill" key={c}>
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className="cred-card">
          <div className="cred-tag">{'/* receipts */'}</div>
          {achievements.map((a, i) => (
            <div className="achievement" key={i}>
              <div className="achievement-v">{a.v}</div>
              <div className="achievement-body">
                <div className="achievement-l">{a.l}</div>
                <div className="achievement-sub">{a.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </FileFrame>
  );
}
