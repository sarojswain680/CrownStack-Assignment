export const GET_SONGS_LIST_REQUEST = 'GET_SONGS_LIST_REQUEST';
export const GET_SONGS_LIST_SUCCESS = 'GET_SONGS_LIST_SUCCESS';
export const GET_SONGS_LIST_FAILURE = 'GET_SONGS_LIST_FAILURE';

export function audioListRequest() {
  return {
    type: GET_SONGS_LIST_REQUEST,
  };
}

export function audioListSuccess(audioList) {
  return {
    type: GET_SONGS_LIST_SUCCESS,
    audioList,
  };
}

export function audioListFailure(error) {
  return {
    type: GET_SONGS_LIST_FAILURE,
    error,
  };
}

export const getAudioList = () => {
  return async (dispatch) => {
    dispatch(audioListRequest());
    fetch(`https://itunes.apple.com/search?term=Michael+jackson`, {
      method: 'GET',
    })
      .then((res) =>
        res.json().then((data) => {
          dispatch(audioListSuccess(data.results));
        }),
      )
      .catch((err) => dispatch(audioListFailure(err)));
  };
};
export default getAudioList;
