export const FETCH_ACTIONS = {
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
};

export const fetchInitialState = {
  data: [],
  isError: false,
  isLoading: true,
};

const fetchReducer = (state, action) => {
  switch (action.type) {
    case FETCH_ACTIONS.SUCCESS:
      return {
        data: action.data,
        isError: false,
        isLoading: false,
      };
    case FETCH_ACTIONS.ERROR:
      return {
        data: action.data,
        isError: true,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default fetchReducer;
