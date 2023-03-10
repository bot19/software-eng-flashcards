import { ReducerState } from "./Types";
import { APP_CONFIG } from "../config";

export const initialState: ReducerState = {
  general: {
    timesQuizCompleted: 0,
    questionsEachSession: APP_CONFIG.questionsEachSession,
    quizStatus: "START",
  },
  currentQuiz: {
    number: 1,
    allQuestions: [],
    correctAnswers: [],
    incorrectAnswers: [],
    questionsRemaining: [],
    sessionsToCompleteQuiz: 0,
    sessionsRemaining: 0,
  },
  currentSession: {
    number: 1,
    sessionQuestions: [],
    correctAnswers: [],
    incorrectAnswers: [],
    questionsRemaining: [],
  },
  currentAnswer: {
    key: null,
    prevQuestionKey: null,
    nextQuestionKey: null,
  },
};
