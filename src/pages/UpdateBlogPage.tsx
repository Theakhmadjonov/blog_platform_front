import { useEffect, useState } from "react";
import API from "../config/axios";
import { useNavigate, useParams } from "react-router-dom";

const UpdateBlogPage = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    fetchBlog();
  }, []);

  const fetchBlog = async () => {
    const { data } = await API.get(`/blogs/${blogId}`);

    setTitle(data.title);
    setContent(data.content);
    setImage(data.image);
  };

  const updateBlog = async (e: any) => {
    e.preventDefault();

    await API.patch(`/blogs/${blogId}`, {
      title,
      content,
      image,
    });

    navigate("/profile");
  };

  return (
    <div className="max-w-3xl mx-auto bg-[#1e293b] p-8 rounded-3xl">
      <h1 className="text-4xl font-bold mb-8">Update Blog</h1>

      <form onSubmit={updateBlog} className="space-y-5">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full bg-[#0f172a] p-4 rounded-xl outline-none"
        />

        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full bg-[#0f172a] p-4 rounded-xl outline-none"
        />

        <textarea
          rows={10}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full bg-[#0f172a] p-4 rounded-xl outline-none"
        />

        <button className="bg-yellow-500 px-8 py-4 rounded-xl">
          Update Blog
        </button>
      </form>
    </div>
  );
};

export default UpdateBlogPage;
