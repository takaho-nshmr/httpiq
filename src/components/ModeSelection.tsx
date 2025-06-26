import React from 'react';
import { Box, Text } from 'ink';
import SelectInput from 'ink-select-input';
import { QuizMode } from '../types/index.js';
import { useLanguage } from '../contexts/LanguageContext.js';
import { useLanguageToggle } from '../hooks/useLanguageToggle.js';
import { LanguageIndicator } from './LanguageIndicator.js';

interface Props {
  onSelect: (mode: QuizMode) => void;
}

const ModeSelection: React.FC<Props> = ({ onSelect }) => {
  const { t } = useLanguage();
  useLanguageToggle();

  const items = [
    {
      label: `${t.mode.codeToMeaning} ${t.mode.codeToMeaningExample}`,
      value: 'codeToMeaning' as QuizMode,
    },
    {
      label: `${t.mode.meaningToCode} ${t.mode.meaningToCodeExample}`,
      value: 'meaningToCode' as QuizMode,
    },
  ];

  const handleSelect = (item: { value: QuizMode }) => {
    onSelect(item.value);
  };

  return (
    <Box flexDirection="column" alignItems="center">
      <Box borderStyle="round" borderColor="magenta" padding={1} marginBottom={1}>
        <Text color="magenta" bold>
          {t.mode.title}
        </Text>
      </Box>

      <Box marginBottom={1}>
        <Text>{t.mode.subtitle}</Text>
      </Box>

      <SelectInput items={items} onSelect={handleSelect} />

      <LanguageIndicator />
    </Box>
  );
};

export default ModeSelection;
