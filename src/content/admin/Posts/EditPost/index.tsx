import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useToasts } from "react-toast-notifications";
import { getPostByIdEffect } from "src/store/effects/post/post.effect"; // Changed from getTireByIdEffect to getPostByIdEffect
import EditPost from "./EditPost"; // Changed from EditTire to EditPost

const EditPostContainer = () => { // Changed from EditTireConteiner to EditPostContainer
  const [post, setPost] = useState(null); // Changed from tire to post
  const { id } = useParams();
  const { addToast } = useToasts();
  const navigate = useNavigate();

  const getPost = async (id: string) => { // Changed from getTire to getPost
    try {
      const post = await getPostByIdEffect(id); // Changed from getTireByIdEffect to getPostByIdEffect
      setPost(post);
    } catch (error) {
      addToast("Post not found", { appearance: "error" }); // Changed from "Tire not found" to "Post not found"
      navigate("/admin/posts"); // Changed from /admin/Tires to /admin/posts
    }
  };

  useEffect(() => {
    if (id) getPost(id); // Changed from getTire to getPost
  }, [id]);

  if (!post) return <div>Post does not exist</div>; // Changed from Tire to Post

  return <EditPost post={post} />; // Changed from EditTire to EditPost
};

export default EditPostContainer; // Changed from EditTireConteiner to EditPostContainer
