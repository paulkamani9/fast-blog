import { useEffect, useState } from "react";
import { PostProps } from "../../types/types";
import Blogpost from "../blogpost/blogpost";
import "./bloglist.css";

const fetchData = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
  } catch (error) {
    return [];
  }
};

const Bloglist = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    const getPosts = async () => {
      const data: PostProps[] = await fetchData();
      setPosts(data);
    };

    getPosts();
  }, []);

  return (
    <div className="blog-list">
      {posts.map((post) => (
        <Blogpost key={post.id} {...post} />
      ))}
    </div>
  );
};
export default Bloglist;
