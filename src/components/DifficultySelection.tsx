import React from 'react';
import { Box, Text } from 'ink';
import SelectInput from 'ink-select-input';
import { Difficulty } from '../types/index.js';

interface Props {
  onSelect: (difficulty: Difficulty) => void;
}

const DifficultySelection: React.FC<Props> = ({ onSelect }) => {
  const items = [
    { 
      label: 'Beginner (5 questions) - Daily status codes', 
      value: 'beginner' as Difficulty 
    },
    { 
      label: 'Intermediate (10 questions) - Developer codes', 
      value: 'intermediate' as Difficulty 
    },
    { 
      label: 'Advanced (20 questions) - Rare codes', 
      value: 'advanced' as Difficulty 
    }
  ];

  const handleSelect = (item: { value: Difficulty }) => {
    onSelect(item.value);
  };

  return (
    <Box flexDirection="column" alignItems="center">
      <Box borderStyle="round" borderColor="cyan" padding={1} marginBottom={1}>
        <Text color="cyan" bold>
          Select Difficulty
        </Text>
      </Box>

      <Box marginBottom={1}>
        <Text>Choose your challenge level:</Text>
      </Box>

      <SelectInput items={items} onSelect={handleSelect} />
    </Box>
  );
};

export default DifficultySelection;