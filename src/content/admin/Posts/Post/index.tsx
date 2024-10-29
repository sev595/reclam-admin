import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useToasts } from "react-toast-notifications";
import { getPostByIdEffect } from "src/store/effects/post/post.effect";
import PostContainer from "./PostContainer";

const Post = () => {
  const [post, setPost] = useState(null);
  const { addToast } = useToasts();
  const navigate = useNavigate();

  const { id } = useParams();

  const getPost = async (id: string) => {
    try {
      const post = await getPostByIdEffect(id);
      setPost(post);
    } catch (error) {
      addToast("Post not found", { appearance: "error" });
      navigate("/admin/posts");
    }
  };

  useEffect(() => {
    if (id) getPost(id);
  }, [id]);

  if (!post) return <div>Post not exist</div>;
  return <PostContainer post={post} />;
};

export default Post;
