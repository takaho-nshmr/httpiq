import React from 'react';
import { Box, Text } from 'ink';
import SelectInput from 'ink-select-input';
import { Difficulty } from '../types/index.js';
import { useLanguage } from '../contexts/LanguageContext.js';
import { useLanguageToggle } from '../hooks/useLanguageToggle.js';
import { LanguageIndicator } from './LanguageIndicator.js';

interface Props {
  onSelect: (difficulty: Difficulty) => void;
}

const DifficultySelection: React.FC<Props> = ({ onSelect }) => {
  const { t } = useLanguage();
  useLanguageToggle();

  const items = [
    {
      label: t.difficulty.beginner,
      value: 'beginner' as Difficulty,
    },
    {
      label: t.difficulty.intermediate,
      value: 'intermediate' as Difficulty,
    },
    {
      label: t.difficulty.advanced,
      value: 'advanced' as Difficulty,
    },
  ];

  const handleSelect = (item: { value: Difficulty }) => {
    onSelect(item.value);
  };

  return (
    <Box flexDirection="column" alignItems="center">
      <Box borderStyle="round" borderColor="cyan" padding={1} marginBottom={1}>
        <Text color="cyan" bold>
          {t.difficulty.title}
        </Text>
      </Box>

      <Box marginBottom={1}>
        <Text>{t.difficulty.subtitle}</Text>
      </Box>

      <SelectInput items={items} onSelect={handleSelect} />

      <LanguageIndicator />
    </Box>
  );
};

export default DifficultySelection;
