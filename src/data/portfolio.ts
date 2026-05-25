import type { Portfolio } from '../types/portfolio';

export const PORTFOLIO: Portfolio = {
  me: {
    name: 'Ruban Sahoo',
    handle: 'kaitou-1412',
    role: 'Software Engineer',
    location: 'Bangalore, IN',
    phone: '+91 81081 46985',
    email: 'ruban1work@gmail.com',
    github: 'https://github.com/kaitou-1412',
    linkedin: 'https://www.linkedin.com/in/ruban-sahoo-4a3b3817b/',
    blog: 'https://ruban.hashnode.dev/',
    resumeUrl: '#',
    tagline:
      'I build backend platforms and developer tools — most days that means patch automation at scale, gRPC service plumbing, or the occasional multi-tenant auth service.',
    bio: 'Software engineer, 3+ years at HashedIn by Deloitte. Comfortable from protobuf to Kubernetes; happiest when I can delete 4,000 engineer-hours from a release cycle.',
  },

  stats: [
    { stat: '10k+', lbl: 'servers orchestrated' },
    { stat: '75%', lbl: 'faster patch runs' },
    { stat: '4×', lbl: 'throughput gain' },
    { stat: '3+', lbl: 'years shipping platforms' },
  ],

  experience: [
    {
      hash: 'a4f9c1d',
      isHead: true,
      role: 'Software Engineer 2',
      company: 'HashedIn by Deloitte',
      location: 'Bangalore, IN',
      date: 'Dec 2024 — present',
      metrics: [
        { v: '10k+', l: 'servers orchestrated' },
        { v: '75%', l: 'faster patch runs' },
        { v: '4k+', l: 'engineer-hours saved' },
      ],
      headline:
        'Zero-touch patch automation at scale — Linux, Windows, Oracle, MSSQL across AWS + GCP.',
      bullets: [
        'Architected and owned end-to-end development of a zero-touch patch automation platform serving {{10,000+}} Linux, Windows, Oracle DB, and MSSQL servers across {{AWS and GCP}}, orchestrating infrastructure provisioning with Ansible and Terraform.',
        'Built RESTful services in Python/FastAPI for test orchestration, result tracking, and automated regression detection — {{75% reduction}} in execution time and {{4,000+ engineer-hours per cycle}} eliminated.',
        'Designed scalable backend APIs integrated with Kafka and Airflow for event-driven orchestration, managing lifecycle of cloud instances, DB clusters, and benchmark workloads with {{4× throughput improvement}}.',
      ],
      tags: ['Python', 'FastAPI', 'Ansible', 'Terraform', 'Kafka', 'Airflow', 'AWS', 'GCP'],
    },
    {
      hash: '8b2e07a',
      role: 'Software Engineer 1',
      company: 'HashedIn by Deloitte',
      location: 'Bangalore, IN',
      date: 'Aug 2022 — Dec 2024',
      metrics: [
        { v: '150+', l: 'data parameters managed' },
        { v: '45%', l: 'faster data processing' },
      ],
      headline: 'VMware Tanzu — Go/gRPC platform extension + a time-series viz app.',
      bullets: [
        "Extended VMware's Go/gRPC APIs to support Tanzu Application Engine across multiple services — modified protobuf schemas, service layers, and API contracts to enable feature rollout across the platform.",
        'Owned full-stack development of a high-performance time-series visualization platform using React, TypeScript, and Mapbox, turning large volumes of performance data into clear visual dashboards for engineering teams.',
        'Built scalable Django REST APIs and admin workflows managing {{150+ data parameters}} — improving data processing speed by {{45%}} and enabling actionable insights for performance and release engineers.',
      ],
      tags: ['Go', 'gRPC', 'Protobuf', 'React', 'TypeScript', 'Django', 'Mapbox'],
    },
    {
      hash: '11ac0fe',
      role: 'Software Engineer Intern',
      company: 'HashedIn by Deloitte',
      location: 'Remote',
      date: 'Jan 2022 — Aug 2022',
      metrics: [{ v: '+25%', l: 'operational efficiency' }],
      headline: 'Full-stack Order Management System — Spring Boot + React + Postgres.',
      bullets: [
        'Developed a full-stack Order Management System with Spring Boot, React, and PostgreSQL — RESTful services with JWT auth and custom algorithms that increased operational efficiency by {{25%}}.',
      ],
      tags: ['Spring Boot', 'React', 'PostgreSQL', 'JWT'],
    },
  ],

  projects: [
    {
      id: 'auth',
      filename: 'projects/auth-service.md',
      title: 'Multi-Tenant Auth Service',
      stack: ['Go', 'PostgreSQL', 'Kubernetes', 'Docker', 'GitHub Actions'],
      featured: true,
      bullets: [
        'Reusable authentication microservice supporting {{multiple apps from a single deployment}} with session management, role-based claims, and RS256 JWT with refresh-token rotation.',
        'bcrypt password hashing and per-IP rate limiting (token bucket) with tiered policies to prevent brute-force attacks on auth endpoints.',
        'Decentralized authorization: consuming services verify JWTs using the public key and manage their own permissions tables — {{zero API calls back to auth service}}.',
        'Containerized with Kubernetes, graceful shutdown, and a CI pipeline with lint, race-condition tests, and an {{80% coverage threshold}} enforced on every PR.',
      ],
      links: {
        code: 'https://github.com/kaitou-1412/auth-service',
        demo: '#',
        live: '#',
      },
    },
  ],

  skills: [
    {
      key: 'lang',
      label: 'Language',
      icon: 'lang',
      primary: ['Go', 'Python'],
      secondary: ['TypeScript', 'Java', 'C/C++'],
      note: 'Go for services that need to hum. Python for everything that needs to bend.',
    },
    {
      key: 'api',
      label: 'Backend & APIs',
      icon: 'api',
      primary: ['FastAPI', 'gRPC', 'REST'],
      secondary: ['Protobuf', 'Django', 'Gin', 'Chi', 'Spring Boot'],
      note: 'Service contracts first; everything else is implementation detail.',
    },
    {
      key: 'data',
      label: 'Data storage',
      icon: 'data',
      primary: ['PostgreSQL', 'Redis'],
      secondary: ['MySQL', 'MongoDB', 'sqlc', 'goose'],
      note: 'Postgres until proven otherwise. Cache the hot path, not the cold one.',
    },
    {
      key: 'cloud',
      label: 'Cloud & Infra',
      icon: 'cloud',
      primary: ['AWS', 'Kubernetes', 'Docker'],
      secondary: ['GCP', 'Ansible', 'Terraform'],
      note: 'Infra-as-code, not infra-as-bash-script.',
    },
    {
      key: 'ops',
      label: 'DevOps & Orchestration',
      icon: 'ops',
      primary: ['Kafka', 'Airflow', 'GitHub Actions'],
      secondary: ['CI/CD', 'KEDA'],
      note: 'Event-driven over polling. Pipelines over cron.',
    },
  ],

  credentials: {
    education: {
      degree: 'B.Tech, Computer Science Engineering',
      school: 'Manipal University, Jaipur',
      date: 'July 2018 — July 2022',
      cgpa: '9.4 / 10.0',
      coursework: [
        'Distributed Systems & Computer Networks',
        'Operating Systems & Compilers',
        'Database Management & DBMS Lab',
        'Algorithms & Complexity',
      ],
    },
    achievements: [
      {
        v: '6×',
        l: 'Excellence Awards',
        sub: 'HashedIn by Deloitte — for owning critical platform deliveries and cross-team technical leadership.',
      },
      {
        v: '500+',
        l: 'LeetCode problems',
        sub: 'Across data structures, algorithms, and system design.',
      },
    ],
  },

  writingMeta: {
    totalPosts: 24,
    categories: ['React', 'System Design'],
    handle: '@ruban',
  },
  writing: [
    {
      title: 'Building Algorithmic Systems',
      subtitle:
        'From predicting driver locations in real-time to syncing files across devices — modern apps demand solutions to hard distributed problems.',
      date: '2026-01-13',
      read: '14 min',
      likes: 4,
      tag: 'System Design',
      thumb: { hue: 215, motif: 'grid' },
      cover: '/blog/algorithmic-systems.png',
      url: 'https://ruban.hashnode.dev/building-algorithmic-systems',
    },
    {
      title: 'System Design Deep Dives',
      subtitle: 'Building Scalable Infrastructure from First Principles.',
      date: '2026-01-07',
      read: '69 min',
      likes: 10,
      tag: 'System Design',
      thumb: { hue: 285, motif: 'hex' },
      cover: '/blog/system-design-deep-dives.png',
      url: 'https://ruban.hashnode.dev/system-design-deep-dives',
    },
    {
      title: 'Building High Throughput Systems',
      subtitle: 'Architectural Decisions & Trade-offs.',
      date: '2025-12-29',
      read: '31 min',
      likes: 9,
      tag: 'System Design',
      thumb: { hue: 22, motif: 'diag' },
      cover: '/blog/high-throughput-systems.png',
      url: 'https://ruban.hashnode.dev/building-high-throughput-systems',
    },
    {
      title: 'Building Storage Engines',
      subtitle: 'Modern Speed & Scalability. Battle-Tested Patterns.',
      date: '2025-12-23',
      read: '17 min',
      likes: 10,
      tag: 'System Design',
      thumb: { hue: 175, motif: 'stack' },
      cover: '/blog/storage-engines.png',
      url: 'https://ruban.hashnode.dev/building-storage-engines',
    },
  ],

  files: [
    { id: 'readme', name: 'README.md', kind: 'md' },
    { id: 'experience', name: 'experience.json', kind: 'json' },
    {
      folder: 'projects',
      open: true,
      children: [{ id: 'auth', name: 'auth-service.md', kind: 'md' }],
    },
    { id: 'skills', name: 'skills.yaml', kind: 'yaml' },
    { id: 'credentials', name: 'credentials.md', kind: 'md' },
    {
      folder: 'writing',
      open: true,
      children: [{ id: 'writing', name: 'latest-posts.md', kind: 'md' }],
    },
    { id: 'contact', name: 'contact.sh', kind: 'sh' },
  ],

  sections: [
    { id: 'readme', label: 'README.md', kind: 'md' },
    { id: 'experience', label: 'experience.json', kind: 'json' },
    { id: 'auth', label: 'auth-service.md', kind: 'md', path: 'projects/' },
    { id: 'skills', label: 'skills.yaml', kind: 'yaml' },
    { id: 'credentials', label: 'credentials.md', kind: 'md' },
    { id: 'writing', label: 'latest-posts.md', kind: 'md', path: 'writing/' },
    { id: 'contact', label: 'contact.sh', kind: 'sh' },
  ],
};
