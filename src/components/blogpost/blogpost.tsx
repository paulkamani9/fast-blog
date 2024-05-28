import { PostProps } from "../../types/types";
import "./blogpost.css";

function Blogpost({ title, body }: PostProps) {
  return (
    <div className="blog-post">
      <div className="post-body">{body}</div>
      <div className="post-title">{title}</div>
    </div>
  );
}
export default Blogpost;
