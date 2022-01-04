import { hideLoader, showAlert, showLoader } from "./appReducer";

const ADD_POST = "POSTS/ADD_POST";
const FETCH_POSTS = "POSTS/FETCH_POSTS";

const initState = {
  syncPosts: [],
  asyncPosts: [],
};

export const postsReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_POST:
      return { ...state, syncPosts: [...state.syncPosts, action.payload] };
    case FETCH_POSTS:
      return { ...state, asyncPosts: action.payload };
    default:
      return state;
  }
};

const forbidenWords = ["fuck", "porn", "ass"];

export const addPost = (newPost) => {
  return function (dispatch) {
    if (forbidenWords.some((item) => newPost.title.includes(item))) {
      dispatch(showAlert("You are spamer !!!!!"));
    } else {
      dispatch({
        type: ADD_POST,
        payload: newPost,
      });
    }
  };
};

export function fetchPosts() {
  return (dispatch) => {
    dispatch(showLoader());
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
        .then((response) => response.json())
        .then((json) => {
          dispatch({
            type: FETCH_POSTS,
            payload: json,
          });
          dispatch(hideLoader());
        })
        .catch(() => {
          dispatch(showAlert("Unable to fetch posts"));
          dispatch(hideLoader());
        });
    }, 1000);
  };
}
