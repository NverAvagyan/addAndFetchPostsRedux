const SHOW_LOADER = "APP/SHOW_LOADER";
const HIDE_LOADER = "APP/HIDE_LOADER";
const SHOW_ALERT = "APP/SHOW_ALERT";
const HIDE_ALERT = "APP/HIDE_ALERT";
const TOGGLE_THEME = "APP/TOGGLE_THEME";

const initState = {
  loading: false,
  alert: null,
  theme: "light",
};

export const appReducer = (state = initState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loading: true };
    case HIDE_LOADER:
      return { ...state, loading: false };
    case SHOW_ALERT:
      return { ...state, alert: action.payload };
    case HIDE_ALERT:
      return { ...state, alert: null };
    case TOGGLE_THEME:
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

export const showLoader = () => ({
  type: SHOW_LOADER,
});

export const hideLoader = () => ({
  type: HIDE_LOADER,
});

export const showAlert = (alertText) => {
  return function (dispatch) {
    dispatch({
      type: SHOW_ALERT,
      payload: alertText,
    });
    setTimeout(() => {
      dispatch({
        type: HIDE_ALERT,
      });
    }, 3000);
  };
};

export const toggleTheme = (newTheme) => ({
  type: TOGGLE_THEME,
  payload: newTheme,
});
