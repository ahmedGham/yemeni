

export const carousalActions = {
  TURN_LEFT: "TURN_LEFT",
  TURN_RIGHT: "TURN_RIGHT",
};

export const carouselReducer = (state, action) => {
  const moveRight = (num) => {
    return num >= 0 ? num : action.max + num;
  };

  const moveLeft = (num) => {
    return num < action.max ? num : num - action.max;
  };

  switch (action.type) {
    case carousalActions.TURN_LEFT:
      return {
        current: moveLeft(state.current + 1),
        left: moveLeft(state.current + 2),
        right: state.current,
      };
    case carousalActions.TURN_RIGHT:
      return {
        current: moveRight(state.current - 1),
        right: moveRight(state.current - 2),
        left: state.current,
      };
    default:
      return state;
  }
};
