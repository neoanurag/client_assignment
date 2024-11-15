import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { BorderRadius, Colors, FontSizes, Spacing } from '../../css';

type Option = {
  id: number;
  label: string;
};

interface AnswerChoiceProps {
  options: Option[];
  onSelect: (optionId: number) => void;
  selectedOptionId?: number;
}

const AnswerChoice: React.FC<AnswerChoiceProps> = ({ options, onSelect, selectedOptionId }) => {
  return (
    <View style={styles.optionsContainer}>
      {options.map((option) => {
        return (
          <TouchableOpacity
            key={option.id}
            onPress={() => onSelect(option.id)}
            style={[
              styles.optionButton,
              {
                backgroundColor: selectedOptionId === option.id ? '#1e7f40' : 'transparent', 
              }
            ]}
          >
            <Text style={styles.optionText}>{option.label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  optionsContainer: {
    marginTop: Spacing.medium,
  },
  optionButton: {
    padding: Spacing.small,
    borderRadius: BorderRadius.medium,
    borderWidth: 1,
    marginVertical: 5,
    borderColor: Colors.border,
    backgroundColor: 'transparent',
  },
  optionText: {
    fontSize: FontSizes.medium,
    textAlign: 'center',
  },
});

export default AnswerChoice;
