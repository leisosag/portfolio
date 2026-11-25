'use client';

import { useSyncExternalStore } from 'react';

const themeChange = 'portfolio-theme-change';
const themeKey = 'portfolio-theme';

function subscribe(onChange: () => void) {
  window.addEventListener(themeChange, onChange);
  return () => window.removeEventListener(themeChange, onChange);
}

function getTheme() {
  return document.documentElement.dataset.theme === 'dark';
}

function getServerTheme() {
  return false;
}

export default function ThemeToggle() {
  const isDark = useSyncExternalStore(subscribe, getTheme, getServerTheme);

  function toggleTheme() {
    const theme = isDark ? 'light' : 'dark';
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem(themeKey, theme);
    } catch {
      // The current page can still change theme when storage is unavailable.
    }
    window.dispatchEvent(new Event(themeChange));
  }

  return (
    <button className="theme-toggle" type="button" aria-pressed={isDark} onClick={toggleTheme}>
      <span className="theme-icon" aria-hidden="true" />
      Dark mode
    </button>
  );
}
