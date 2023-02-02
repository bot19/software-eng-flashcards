import { QuestionsDataArr, ReducerAction, ReducerState } from "./Types";
import { updateQuizInit } from "./actionUpdateQuizInit";

export const reducer = (state: ReducerState, action: ReducerAction) => {
  switch (action.type) {
    case "UPDATE_QUIZ_INIT":
      return { ...updateQuizInit(state, action.value as QuestionsDataArr) };

    case "UPDATE_QUIZ_START":
      return { ...state };

    default:
      return { ...state };
  }
};
