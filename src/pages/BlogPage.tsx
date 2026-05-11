import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../api/axios";
import CommentCard from "../components/CommentCard";
import img from "../images/Screenshot From 2025-09-24 21-57-02.png";

const BlogPage = () => {
  const { blogId } = useParams();
  console.log("bloId", blogId);

  const [blog, setBlog] = useState<any>(null);
  const [comment, setComment] = useState("");

  useEffect(() => {
    fetchBlog();
  }, []);

  const fetchBlog = async () => {
    const { data } = await API.get(`/post/${blogId}`);
    setBlog(data);
    console.log(data);
  };

  const likeBlog = async () => {
    await API.post(`/like${blogId}`);
    fetchBlog();
  };

  const addComment = async () => {
    if (!comment) return;

    await API.post(`/comment/post/${blogId}`, {
      content: comment,
    });

    setComment("");
    fetchBlog();
  };

  if (!blog) return <h1>Loading...</h1>;

  return (
    <div className="max-w-5xl mx-auto">
      <img
        src={img}
        alt={blog.title}
        className="w-full h-[500px] object-cover rounded-3xl mb-8"
      />

      <div className="flex items-center justify-between mb-5">
        <h1 className="text-5xl font-bold">{blog.title}</h1>

        <button onClick={likeBlog} className="bg-red-500 px-6 py-3 rounded-xl">
          ❤️ {blog.likes}
        </button>
      </div>

      <p className="text-lg text-gray-300 leading-9 mb-10">{blog.content}</p>

      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-5">Comments</h2>

        <div className="flex gap-4 mb-5">
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write comment"
            className="flex-1 bg-[#1e293b] p-4 rounded-xl outline-none"
          />

          <button onClick={addComment} className="bg-blue-600 px-6 rounded-xl">
            Send
          </button>
        </div>

        <div className="space-y-4">
          {blog.comments?.map((comment: any) => (
            <CommentCard key={comment.id} comment={comment} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
