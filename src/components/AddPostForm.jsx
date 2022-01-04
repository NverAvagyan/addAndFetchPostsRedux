import { useState } from "react";
import { connect } from "react-redux";
import { addPost } from "../redux/postsReducer";
import Alert from "./Alert";

const AddPostForm = ({ alert, addPost }) => {
  const [inputValue, setInputValue] = useState("");

  const addPostHandler = (e) => {
    if (e.key === "Enter") {
      if (!inputValue.trim()) {
        return null;
      }

      const newPost = {
        title: inputValue,
        id: Date.now(),
      };

      addPost(newPost);

      setInputValue("");
    }
  };

  const inputChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      {alert && <Alert text={alert} />}
      <div className="mb-3 mt-2">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Enter title here
        </label>
        <input
          value={inputValue}
          onChange={inputChangeHandler}
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="title here"
          onKeyPress={addPostHandler}
        />
      </div>
    </>
  );
};

export default connect(
  (state) => ({
    alert: state.app.alert,
  }),
  {
    addPost,
  }
)(AddPostForm);
