import React from 'react';
import { Box, Text } from 'ink';
import { useLanguage } from '../contexts/LanguageContext.js';

export function LanguageIndicator() {
  const { language, t } = useLanguage();
  const isEnglish = language === 'en';

  return (
    <Box flexDirection="row" marginTop={1}>
      <Text dimColor>{t.languageIndicator.switchLanguage} </Text>
      <Text color={isEnglish ? 'green' : 'gray'} bold={isEnglish}>
        {t.languageIndicator.currentEnglish}
      </Text>
      <Text dimColor> {t.languageIndicator.arrow} </Text>
      <Text color={!isEnglish ? 'green' : 'gray'} bold={!isEnglish}>
        {t.languageIndicator.currentJapanese}
      </Text>
    </Box>
  );
}
