import React from 'react';
import { Box, Text } from 'ink';
import SelectInput from 'ink-select-input';

interface Props {
  onStart: () => void;
}

const WelcomeScreen: React.FC<Props> = ({ onStart }) => {
  const items = [
    { label: 'Start Quiz', value: 'start' },
    { label: 'Exit', value: 'exit' }
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
          HTTP Status Code Quiz 📡
        </Text>
      </Box>
      
      <Box marginBottom={1}>
        <Text>Test your knowledge of HTTP status codes!</Text>
      </Box>

      <SelectInput items={items} onSelect={handleSelect} />
    </Box>
  );
};

export default WelcomeScreen;