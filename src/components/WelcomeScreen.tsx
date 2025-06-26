import React from 'react';
import { Box, Text } from 'ink';
import SelectInput from 'ink-select-input';
import { useLanguage } from '../contexts/LanguageContext.js';
import { useLanguageToggle } from '../hooks/useLanguageToggle.js';
import { LanguageIndicator } from './LanguageIndicator.js';

interface Props {
  onStart: () => void;
}

const WelcomeScreen: React.FC<Props> = ({ onStart }) => {
  const { t } = useLanguage();
  useLanguageToggle();

  const items = [
    { label: t.welcome.startQuiz, value: 'start' },
    { label: t.welcome.exit, value: 'exit' },
  ];

  const handleSelect = (item: { value: string }) => {
    if (item.value === 'start') {
      onStart();
    } else {
      process.exit(0);
    }
  };

  return (
    <Box flexDirection="column" alignItems="center">
      <Box borderStyle="round" borderColor="green" padding={1} marginBottom={1}>
        <Text color="green" bold>
          {t.welcome.title}
        </Text>
      </Box>

      <Box marginBottom={1}>
        <Text>{t.welcome.subtitle}</Text>
      </Box>

      <SelectInput items={items} onSelect={handleSelect} />

      <LanguageIndicator />
    </Box>
  );
};

export default WelcomeScreen;
