import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView, Dimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store';
import { resetVotes } from '../../store/pollSlice';
import { PieChart } from 'react-native-chart-kit';
import { RouteProp, useRoute } from '@react-navigation/native';
import { PollDataMock } from '../../constants/PollDataMock';
import globalStyles, { BorderRadius, Colors, FontSizes, Spacing } from '../../css';
import { Strings } from '../../constants/Strings';

type PollSummaryRouteProp = RouteProp<{ params: { pollId: number } }, 'params'>;

const PollSummary: React.FC = () => {
    const votes = useSelector((state: RootState) => state.poll.votes);
    const dispatch = useDispatch();
    const route = useRoute<PollSummaryRouteProp>();
    const pollId = route.params.pollId;

    const getQuestionText = (pollId: number, questionId: number) => {
        const poll = PollDataMock.find(p => p.id === pollId);
        if (!poll) {return 'Poll not found';}

        const question = poll.questions.find(q => q.id === questionId);
        if (!question) {return 'Question not found';}

        return question.title;
    };

    const getAnswerText = (pollId: number, questionId: number, answerId: number) => {
        const poll = PollDataMock.find(p => p.id === pollId);
        if (!poll) {return 'Poll not found';}

        const question = poll.questions.find(q => q.id === questionId);
        if (!question) {return 'Question not found';}

        const answer = question.options.find(option => option.id === answerId);
        if (!answer) {return 'Answer not found';}

        return answer.text;
    };

    const calculatePercentage = (questionVotes: Record<number, number>, answerId: number) => {
        const totalVotes = Object.values(questionVotes).reduce((sum, count) => sum + count, 0);
        return totalVotes > 0 ? ((questionVotes[answerId] || 0) / totalVotes) * 100 : 0;
    };

    const preparePieChartData = (questionId: string, questionVotes: Record<number, number>) => {
        const totalVotes = Object.values(questionVotes).reduce((sum, count) => sum + count, 0);
        return Object.entries(questionVotes).map(([answerId, count]) => ({
            name: getAnswerText(pollId, parseInt(questionId), parseInt(answerId)),
            population: ((count / totalVotes) * 100) || 0,
            color: getRandomColor(),
            legendFontColor: '#000',
            legendFontSize: 12,
        }));
    };

    const getRandomColor = () => {
        const colors = ['#004653', '#2a7e8f', '#e9c46a', '#f0a261', '#e71e51'];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    const renderVoteSummary = () => {
        const filteredVotes = pollId === 0 ? votes : { [pollId]: votes[pollId] };

        if (!filteredVotes) {return null;}

        return Object.entries(filteredVotes).map(([pollId, pollQuestions]) => (
            <View key={pollId} style={styles.pollContainer}>
                <Text style={styles.pollTitle}>Poll {pollId}</Text>
                {pollQuestions && Object.entries(pollQuestions).map(([questionId, questionVotes]) => (
                    <View key={questionId} style={styles.questionContainer}>
                        <Text style={styles.questionTitle}>{getQuestionText(parseInt(pollId), parseInt(questionId))}</Text>
                        <PieChart
                            data={preparePieChartData(questionId, questionVotes)}
                            width={Dimensions.get('window').width}
                            height={100}
                            chartConfig={{
                                backgroundColor: Colors.white,
                                backgroundGradientFrom: Colors.white,
                                backgroundGradientTo: Colors.white,
                                decimalPlaces: 2,
                                color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
                                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                                style: {
                                    borderRadius: 16,
                                },
                            }}
                            accessor="population"
                            backgroundColor="transparent"
                            paddingLeft="-50"
                            style={styles.chartStyle}

                        />
                        {Object.entries(questionVotes).map(([answerId, count]) => (
                            <View key={answerId} style={styles.answerContainer}>
                                <Text>{getAnswerText(parseInt(pollId), parseInt(questionId), parseInt(answerId))}: {count} votes</Text>
                                <View style={styles.progressBarContainer}>
                                    <View
                                        style={[styles.progressBar, { width: `${calculatePercentage(questionVotes, Number(answerId))}%` }]}
                                    />
                                </View>
                            </View>
                        ))}
                    </View>
                ))}
            </View>
        ));
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={globalStyles.flex1}>
                <Text style={globalStyles.screenTitle}>{Strings.poll_summary}</Text>
                {renderVoteSummary()}
               {pollId !== 0 && <Button title={Strings.reset_poll_data} onPress={() => dispatch(resetVotes(pollId))} />}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: Spacing.medium,
        paddingBottom: 100,
        backgroundColor: Colors.white,
    },
    title: {
        fontSize: FontSizes.large,
        fontWeight: 'bold',
        marginBottom: Spacing.medium,
        textAlign: 'center',
    },
    pollContainer: {
        marginBottom: Spacing.medium,
    },
    pollTitle: {
        fontSize: FontSizes.large,
        fontWeight: 'bold',
    },
    questionContainer: {
        marginVertical: Spacing.small,
    },
    questionTitle: {
        fontSize: FontSizes.medium,
        fontWeight: 'bold',
    },
    answerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    progressBarContainer: {
        flex: 1,
        height: 16,
        backgroundColor: '#E0E0E0',
        borderRadius: BorderRadius.small,
        marginLeft: 10,
    },
    progressBar: {
        height: 16,
        backgroundColor: '#3b5998',
        borderRadius: BorderRadius.medium,
    },
    chartStyle: {
        marginVertical: Spacing.small,
        borderRadius: BorderRadius.large,
    },
});

export default PollSummary;
