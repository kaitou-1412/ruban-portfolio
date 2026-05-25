import { useCallback, useEffect, useRef, useState } from 'react';
import { PORTFOLIO } from './data/portfolio';
import { useTweaks } from './hooks/useTweaks';
import { TitleBar } from './components/ide/TitleBar';
import { Sidebar } from './components/ide/Sidebar';
import { TabBar } from './components/ide/TabBar';
import { StatusBar } from './components/ide/StatusBar';
import { HeroSection } from './components/sections/HeroSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { CredentialsSection } from './components/sections/CredentialsSection';
import { WritingSection } from './components/sections/WritingSection';
import { ContactSection } from './components/sections/ContactSection';
import { TweaksPanel } from './components/tweaks/TweaksPanel';

export default function App() {
  const [tweaks, setTweak] = useTweaks();
  const [active, setActive] = useState<string>('readme');
  const [openTabs, setOpenTabs] = useState<string[]>(['readme']);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const programmaticScrollRef = useRef(false);
  const programmaticTimerRef = useRef<number | null>(null);

  // Apply theme/accent/density to <html>
  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute('data-theme', tweaks.theme);
    html.setAttribute('data-accent', tweaks.accent);
    html.setAttribute('data-density', tweaks.density);
  }, [tweaks.theme, tweaks.accent, tweaks.density]);

  const openTab = useCallback((id: string) => {
    setOpenTabs((tabs) => (tabs.includes(id) ? tabs : [...tabs, id]));
  }, []);

  const scrollToSection = useCallback(
    (id: string, fast = false) => {
      const el = document.getElementById(id);
      if (!el) return;
      programmaticScrollRef.current = true;
      setActive(id);
      openTab(id);
      el.scrollIntoView({ behavior: fast ? 'auto' : 'smooth', block: 'start' });
      if (programmaticTimerRef.current) window.clearTimeout(programmaticTimerRef.current);
      programmaticTimerRef.current = window.setTimeout(() => {
        programmaticScrollRef.current = false;
      }, 700);
    },
    [openTab],
  );

  const closeTab = useCallback(
    (id: string) => {
      setOpenTabs((tabs) => {
        const next = tabs.filter((x) => x !== id);
        if (next.length === 0) return [id];
        if (active === id) {
          const idx = tabs.indexOf(id);
          const newActive = next[Math.min(idx, next.length - 1)];
          scrollToSection(newActive, true);
        }
        return next;
      });
    },
    [active, scrollToSection],
  );

  const selectFile = useCallback(
    (id: string) => {
      scrollToSection(id);
      setSidebarOpen(false);
    },
    [scrollToSection],
  );

  // Scroll-spy
  useEffect(() => {
    const sectionIds = PORTFOLIO.sections.map((s) => s.id);
    const viewport = document.querySelector('.viewport');
    if (!viewport) return;

    const onScroll = () => {
      if (programmaticScrollRef.current) return;
      const top = 80;
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top - top <= 0) current = id;
      }
      if (current !== active) {
        setActive(current);
        openTab(current);
      }
    };

    viewport.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => viewport.removeEventListener('scroll', onScroll);
  }, [active, openTab]);

  // Keyboard: Cmd+J/K or Cmd+Up/Down cycles sections.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const t = e.target as HTMLElement | null;
      if (t && t.matches && t.matches('input, textarea')) return;
      if (!e.metaKey) return;
      const ids = PORTFOLIO.sections.map((s) => s.id);
      const idx = ids.indexOf(active);
      if (e.key === 'j' || e.key === 'ArrowDown') {
        e.preventDefault();
        scrollToSection(ids[Math.min(idx + 1, ids.length - 1)]);
      } else if (e.key === 'k' || e.key === 'ArrowUp') {
        e.preventDefault();
        scrollToSection(ids[Math.max(idx - 1, 0)]);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [active, scrollToSection]);

  return (
    <div className="ide">
      <TitleBar
        theme={tweaks.theme}
        onToggleTheme={() => setTweak('theme', tweaks.theme === 'dark' ? 'light' : 'dark')}
        onToggleSidebar={() => setSidebarOpen((s) => !s)}
        branch="main"
      />

      <div className="ide-body">
        <Sidebar
          files={PORTFOLIO.files}
          active={active}
          onSelect={selectFile}
          isOpen={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
        />

        <div className="editor">
          <TabBar
            open={openTabs}
            active={active}
            sections={PORTFOLIO.sections}
            onSelect={(id) => scrollToSection(id)}
            onClose={closeTab}
          />

          <div className="viewport">
            <HeroSection data={PORTFOLIO} onJumpTo={scrollToSection} typing={tweaks.typing} />
            <ExperienceSection data={PORTFOLIO} />
            <ProjectsSection data={PORTFOLIO} />
            <SkillsSection data={PORTFOLIO} />
            <CredentialsSection data={PORTFOLIO} />
            <WritingSection data={PORTFOLIO} />
            <ContactSection data={PORTFOLIO} />
          </div>
        </div>
      </div>

      <StatusBar active={active} sections={PORTFOLIO.sections} accent={tweaks.accent} />

      <TweaksPanel tweaks={tweaks} setTweak={setTweak} />
    </div>
  );
}
