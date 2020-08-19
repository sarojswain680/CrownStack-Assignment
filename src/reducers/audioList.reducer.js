import * as actions from '../actions/audioList.action';

const INITIAL_STATE = {
  loading: false,
  audioList: [],
  error: null,
};

const audioListReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.GET_SONGS_LIST_REQUEST:
      return {...state, loading: true};
    case actions.GET_SONGS_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        audioList: action.audioList,
      };

    case actions.GET_SONGS_LIST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default audioListReducer;
