import { useReducer } from "react";

export const clamp = (lower: number, upper: number, number: number) =>
  Math.min(Math.max(lower, number), upper);

export const circular = (lower: number, upper: number, number: number) =>
  number > upper ? lower : number < lower ? upper : number;

const initialState = {
  index: 0,
};

const setIndex = (index: number) => ({
  type: "SET_INDEX",
  payload: index,
});

const reducer = (maxLength: number) => (
  state: typeof initialState,
  action: ReturnType<typeof setIndex>
) => {
  switch (action.type) {
    case "SET_INDEX":
      return {
        ...state,
        index: circular(0, maxLength, action.payload),
      };

    default:
      return {
        ...state,
      };
  }
};

export const useCarousel = <T,>(items: T[]) => {
  const [state, dispatch] = useReducer(reducer(items.length - 1), initialState);

  const setIndex = (index: number) => {
    dispatch({
      type: "SET_INDEX",
      payload: index,
    });
  };

  const next = () => {
    setIndex(state.index + 1);
  };

  const previous = () => {
    setIndex(state.index + 1);
  };

  const currentItem = items[state.index];

  return {
    next,
    previous,
    setIndex,
    currentItem,
    items,
  };
};
