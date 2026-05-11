import { useState } from "react";
import API from "../api/axios";
import { useNavigate } from "react-router-dom";

const CreateBlogPage = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");

  const createBlog = async (e: any) => {
    e.preventDefault();

    await API.post("/blogs", {
      title,
      content,
      image,
    });

    navigate("/profile");
  };

  return (
    <div className="max-w-3xl mx-auto bg-[#1e293b] p-8 rounded-3xl">
      <h1 className="text-4xl font-bold mb-8">Create Blog</h1>

      <form onSubmit={createBlog} className="space-y-5">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full bg-[#0f172a] p-4 rounded-xl outline-none"
        />

        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full bg-[#0f172a] p-4 rounded-xl outline-none"
        />

        <textarea
          rows={10}
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full bg-[#0f172a] p-4 rounded-xl outline-none"
        />

        <button className="bg-blue-600 px-8 py-4 rounded-xl">
          Create Blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlogPage;
