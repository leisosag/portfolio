'use client';

import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
    <button
      className="theme-toggle"
      type="button"
      aria-label="Dark mode"
      aria-pressed={isDark}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={toggleTheme}
    >
      <span className="theme-sun" aria-hidden="true" />
      <FontAwesomeIcon className="theme-moon" icon={faMoon} aria-hidden="true" />
    </button>
  );
}
