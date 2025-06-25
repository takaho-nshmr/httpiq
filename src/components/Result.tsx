import React from 'react';
import { Box, Text } from 'ink';
import SelectInput from 'ink-select-input';

interface Props {
  score: number;
  total: number;
  onRestart: () => void;
}

const Result: React.FC<Props> = ({ score, total, onRestart }) => {
  const percentage = Math.round((score / total) * 100);
  
  const getRank = (percentage: number): { rank: string; color: string } => {
    if (percentage >= 90) return { rank: 'S', color: 'magenta' };
    if (percentage >= 80) return { rank: 'A', color: 'green' };
    if (percentage >= 70) return { rank: 'B', color: 'yellow' };
    if (percentage >= 60) return { rank: 'C', color: 'blue' };
    return { rank: 'D', color: 'red' };
  };

  const { rank, color } = getRank(percentage);

  const items = [
    { label: 'Play Again', value: 'restart' },
    { label: 'Exit', value: 'exit' }
  ];

  const handleSelect = (item: { value: string }) => {
    if (item.value === 'restart') {
      onRestart();
    } else {
      process.exit(0);
    }
  };

  return (
    <Box flexDirection="column" alignItems="center">
      <Box borderStyle="double" borderColor={color} padding={1} marginBottom={1}>
        <Text bold color={color}>
          Quiz Complete! 🎉
        </Text>
      </Box>

      <Box flexDirection="column" alignItems="center" marginBottom={1}>
        <Box marginBottom={1}>
          <Text>
            Your Score: <Text bold>{score}/{total}</Text> ({percentage}%)
          </Text>
        </Box>

        <Box borderStyle="round" borderColor={color} paddingX={2}>
          <Text bold color={color}>
            Rank: {rank}
          </Text>
        </Box>

        <Box marginTop={1}>
          <Text dimColor>
            {percentage >= 80 
              ? 'Excellent knowledge of HTTP status codes!' 
              : percentage >= 60 
              ? 'Good job! Keep practicing to improve.' 
              : 'Keep studying, you\'ll get better!'}
          </Text>
        </Box>
      </Box>

      <SelectInput items={items} onSelect={handleSelect} />
    </Box>
  );
};

export default Result;