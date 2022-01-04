import { connect } from "react-redux";
import Post from "./Post";

const Posts = ({ posts }) => {
  if (!posts.length) {
    return <div className="text-center">No posts yet</div>;
  }

  return posts.map((item) => <Post post={item} key={item.id} />);
};

export default connect(
  (state) => ({
    posts: state.posts.syncPosts,
  }),
  null
)(Posts);
