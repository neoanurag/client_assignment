import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { useNavigation, RouteProp, useRoute, CommonActions } from '@react-navigation/native';
import { submitVote } from '../../store/pollSlice';
import PollQuestion from '../../components/polls/PollQuestion';
import { PollDataMock } from '../../constants/PollDataMock';
import globalStyles from '../../css';
import { Strings } from '../../constants/Strings';

type PollDetailRouteProp = RouteProp<{ params: { pollId: number } }, 'params'>;

const PollDetails: React.FC = () => {
  const route = useRoute<PollDetailRouteProp>();
  const pollId = route.params.pollId;
  const pollData = PollDataMock.find((p) => p.id === pollId);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [showAllQuestions, setShowAllQuestions] = useState(false);
  const [responses, setResponses] = useState<{ [key: number]: number | null }>({});
  const [error, setError] = useState<string | null>(null);

  const handleVote = (questionId: number, answerId: number, questionType: string) => {
    setResponses((prev) => ({ ...prev, [questionId]: answerId }));
    dispatch(submitVote({ pollId, questionId, answerId }));
    setError(null);

    if (questionType === 'yes-no' && answerId === 2) {
      setShowAllQuestions(false);
    }
    else {
      setShowAllQuestions(true);
    }
  };

  const handleSubmitPoll = () => {
    const unansweredQuestions = pollData.questions.filter((q) => !(q.id in responses));
    if (unansweredQuestions.length > 0 && showAllQuestions) {
      setError('Please answer all questions.');
    } else {
      if (unansweredQuestions.length == pollData.questions.length) {
        setError('Please answer all questions.');
      }
      else {
        setError(null);
        navigateToPollSummary(pollId);
      }
    }
  };

  const navigateToPollSummary = (pollId: number) => {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [
          { name: 'DynamicPolls' },
          { name: 'PollSummary', params: { pollId: pollId } },
        ],
      })
    );
  };

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.screenTitle}>{pollData.title}</Text>
      {error && <Text style={globalStyles.errorText}>{error}</Text>}
      <FlatList
        data={showAllQuestions ? pollData.questions : [pollData.questions[0]]}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <PollQuestion
            questionId={item.id}
            questionTitle={item.title}
            questionType={item.type}
            options={item.options}
            onVote={(qId, answerId) => handleVote(item.id, answerId, item.type)}
          />
        )}
      />
      <TouchableOpacity style={globalStyles.btnContainer} onPress={handleSubmitPoll}>
        <Text style={globalStyles.btnTitle}>{Strings.submit}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default PollDetails;
