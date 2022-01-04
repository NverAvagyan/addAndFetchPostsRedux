import { connect } from "react-redux";
import { fetchPosts } from "../redux/postsReducer";
import Loader from "./Loader";
import Post from "./Post";

const AsyncPosts = ({ posts, loader, fetchPosts }) => {
  if (loader) {
    return <Loader />;
  }

  if (!posts.length) {
    return (
      <button className="btn btn-primary" onClick={fetchPosts}>
        Fetch posts
      </button>
    );
  }

  return posts.map((item) => <Post post={item} key={item.id} />);
};

export default connect(
  (state) => ({
    posts: state.posts.asyncPosts,
    loader: state.app.loading,
  }),
  {
    fetchPosts,
  }
)(AsyncPosts);
