export type FileKind = 'md' | 'json' | 'yaml' | 'sh' | 'folder';

export interface Me {
  name: string;
  handle: string;
  role: string;
  location: string;
  phone: string;
  email: string;
  github: string;
  linkedin: string;
  blog: string;
  resumeUrl: string;
  tagline: string;
  bio: string;
}

export interface Stat {
  stat: string;
  lbl: string;
}

export interface Metric {
  v: string;
  l: string;
}

export interface ExperienceCommit {
  hash: string;
  isHead?: boolean;
  role: string;
  company: string;
  location: string;
  date: string;
  metrics: Metric[];
  headline: string;
  bullets: string[];
  tags: string[];
}

export interface Project {
  id: string;
  filename: string;
  title: string;
  stack: string[];
  featured?: boolean;
  bullets: string[];
  links: { code: string; demo: string; live: string };
}

export type SkillIcon = 'lang' | 'api' | 'data' | 'cloud' | 'ops';

export interface SkillCategory {
  key: string;
  label: string;
  icon: SkillIcon;
  primary: string[];
  secondary: string[];
  note: string;
}

export interface Credentials {
  education: {
    degree: string;
    school: string;
    date: string;
    cgpa: string;
    coursework: string[];
  };
  achievements: { v: string; l: string; sub: string }[];
}

export interface Post {
  title: string;
  subtitle: string;
  date: string;
  read: string;
  likes: number;
  tag: string;
  thumb: { hue: number; motif: 'grid' | 'hex' | 'diag' | 'stack' };
  /** Optional cover image path (e.g. "/blog/storage-engines.png"). If set,
   *  renders as <img> instead of the generated SVG motif. */
  cover?: string;
  url: string;
}

export interface WritingMeta {
  totalPosts: number;
  categories: string[];
  handle: string;
}

export interface FileNode {
  id: string;
  name: string;
  kind: Exclude<FileKind, 'folder'>;
}

export interface FolderNode {
  folder: string;
  open?: boolean;
  children: FileNode[];
}

export type TreeEntry = FileNode | FolderNode;

export interface SectionRef {
  id: string;
  label: string;
  kind: Exclude<FileKind, 'folder'>;
  path?: string;
}

export interface Portfolio {
  me: Me;
  stats: Stat[];
  experience: ExperienceCommit[];
  projects: Project[];
  skills: SkillCategory[];
  credentials: Credentials;
  writingMeta: WritingMeta;
  writing: Post[];
  files: TreeEntry[];
  sections: SectionRef[];
}

export type Accent = 'green' | 'amber' | 'blue' | 'magenta';
export type Theme = 'dark' | 'light';
export type Density = 'cozy' | 'compact';

export interface Tweaks {
  theme: Theme;
  accent: Accent;
  density: Density;
  typing: boolean;
}
