import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AnswerChoice from './AnswerChoice';
import { FontSizes, Spacing } from '../../css';

type Option = {
  id: number;
  label: string;
};

interface PollQuestionProps {
  questionId: number;
  questionTitle: string;
  questionType: string;
  options: Option[];
  onVote: (questionId: number, answerId: number) => void;
}

const PollQuestion: React.FC<PollQuestionProps> = ({
  questionId,
  questionTitle,
  questionType,
  options,
  onVote,
}) => {
  const [selectedOptionId, setSelectedOptionId] = useState<number | null>(null);

  const handleSelectOption = (optionId: number) => {
    setSelectedOptionId(optionId);
    if (questionType === 'yes-no' && optionId === 2) {
      onVote(questionId, optionId);
    } else {
      onVote(questionId, optionId);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.questionText}>{questionTitle}</Text>
      <AnswerChoice
        options={options}
        onSelect={handleSelectOption}
        questionType={questionType}
        selectedOptionId={selectedOptionId || undefined}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: Spacing.medium,
    paddingHorizontal: Spacing.small,
  },
  questionText: {
    fontSize: FontSizes.large,
    fontWeight: 'bold',
  },
});

export default PollQuestion;
