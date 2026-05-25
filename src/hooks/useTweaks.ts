import { useCallback, useEffect, useState } from 'react';
import type { Tweaks } from '../types/portfolio';

const STORAGE_KEY = '__ruban_portfolio';

const DEFAULTS: Tweaks = {
  theme: 'dark',
  accent: 'green',
  density: 'cozy',
  typing: true,
};

function readStored(): Partial<Tweaks> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function useTweaks(): [Tweaks, <K extends keyof Tweaks>(key: K, value: Tweaks[K]) => void] {
  const [values, setValues] = useState<Tweaks>(() => ({ ...DEFAULTS, ...readStored() }));

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(values));
    } catch {
      // ignore quota / private-mode errors
    }
  }, [values]);

  const setTweak = useCallback(<K extends keyof Tweaks>(key: K, value: Tweaks[K]) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  }, []);

  return [values, setTweak];
}
