import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Vote {
  pollId: number;
  questionId: number;
  answerId: number;
}

interface PollState {
  votes: Record<number, Record<number, Record<number, number>>>; 
}

const initialState: PollState = {
  votes: {},
};

const pollSlice = createSlice({
  name: 'poll',
  initialState,
  reducers: {
    submitVote: (state, action: PayloadAction<Vote>) => {
      const { pollId, questionId, answerId } = action.payload;
      if (!state.votes[pollId]) state.votes[pollId] = {};
      if (!state.votes[pollId][questionId]) state.votes[pollId][questionId] = {};
      if (!state.votes[pollId][questionId][answerId]) state.votes[pollId][questionId][answerId] = 0;
      state.votes[pollId][questionId][answerId] += 1;
    },
    resetVotes: (state, action: PayloadAction<number>) => {
      const pollId = action.payload;
      if (state.votes[pollId]) {
        delete state.votes[pollId];
      }
    },
  },
});


export const { submitVote, resetVotes } = pollSlice.actions;

export default pollSlice.reducer;
