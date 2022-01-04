import { connect } from "react-redux";
import { toggleTheme } from "../redux/appReducer";

function ThemeButton({ theme, toggleTheme }) {
  const handleClick = () => {
    theme === "light" ? toggleTheme("dark") : toggleTheme("light");
  };

  return (
    <div>
      <button className="btn btn-warning" onClick={handleClick}>
        Change theme
      </button>
    </div>
  );
}

export default connect(
  (state) => ({
    theme: state.app.theme,
  }),
  {
    toggleTheme,
  }
)(ThemeButton);
