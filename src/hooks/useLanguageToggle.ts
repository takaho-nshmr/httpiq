import { useInput } from 'ink';
import { useLanguage } from '../contexts/LanguageContext.js';

export function useLanguageToggle(enabled = true) {
  const { toggleLanguage } = useLanguage();

  useInput((input, key) => {
    // Shift+Tab detection
    if (enabled && key.shift && key.tab) {
      toggleLanguage();
    }
  });
}
