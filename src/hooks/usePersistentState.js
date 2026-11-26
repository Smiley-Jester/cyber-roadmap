import { useEffect, useState } from 'react';

// Lets the UI show whether the last save to LocalStorage really worked.
const listeners = new Set();
export function subscribeSaveStatus(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}
const report = (ok) => listeners.forEach((listener) => listener(ok));

export function usePersistentState(key, initialValue) {
  const [value, setValue] = useState(() => {
    if (typeof window === 'undefined') return initialValue;
    try {
      const saved = window.localStorage.getItem(key);
      return saved ? { ...initialValue, ...JSON.parse(saved) } : initialValue;
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      report(true);
    } catch (error) {
      console.warn(`Could not save ${key} to localStorage`, error);
      report(false);
    }
  }, [key, value]);

  return [value, setValue];
}
