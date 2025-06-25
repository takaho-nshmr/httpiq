import React from 'react';
import { Box, Text } from 'ink';
import SelectInput from 'ink-select-input';
import { QuizMode } from '../types/index.js';

interface Props {
  onSelect: (mode: QuizMode) => void;
}

const ModeSelection: React.FC<Props> = ({ onSelect }) => {
  const items = [
    { 
      label: 'Code → Meaning (e.g., 404 → Not Found)', 
      value: 'codeToMeaning' as QuizMode 
    },
    { 
      label: 'Meaning → Code (e.g., Not Found → 404)', 
      value: 'meaningToCode' as QuizMode 
    }
  ];

  const handleSelect = (item: { value: QuizMode }) => {
    onSelect(item.value);
  };

  return (
    <Box flexDirection="column" alignItems="center">
      <Box borderStyle="round" borderColor="magenta" padding={1} marginBottom={1}>
        <Text color="magenta" bold>
          Select Quiz Mode
        </Text>
      </Box>

      <Box marginBottom={1}>
        <Text>Choose how you want to be tested:</Text>
      </Box>

      <SelectInput items={items} onSelect={handleSelect} />
    </Box>
  );
};

export default ModeSelection;