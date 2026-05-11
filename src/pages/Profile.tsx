import { useEffect, useState } from "react";
import API from "../api/axios";
import { Link } from "react-router-dom";

const Profile = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchMyBlogs();
  }, []);

  const fetchMyBlogs = async () => {
    const { data } = await API.get("/blogs/my-blogs");
    setBlogs(data);
  };

  const deleteBlog = async (id: string) => {
    await API.delete(`/blogs/${id}`);
    fetchMyBlogs();
  };

  const publishBlog = async (id: string) => {
    await API.patch(`/blogs/publish/${id}`);
    fetchMyBlogs();
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <h1 className="text-5xl font-bold">My Blogs</h1>

        <Link to="/create-blog" className="bg-blue-600 px-6 py-3 rounded-xl">
          Create Blog
        </Link>
      </div>

      <div className="space-y-6">
        {blogs.map((blog: any) => (
          <div key={blog.id} className="bg-[#1e293b] p-5 rounded-2xl">
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-72 object-cover rounded-xl mb-5"
            />

            <h2 className="text-3xl font-bold mb-3">{blog.title}</h2>

            <p className="text-gray-400 mb-5">{blog.content}</p>

            <div className="flex flex-wrap gap-4">
              <Link
                to={`/update-blog/${blog.id}`}
                className="bg-yellow-500 px-5 py-3 rounded-xl"
              >
                Update
              </Link>

              <button
                onClick={() => publishBlog(blog.id)}
                className="bg-green-600 px-5 py-3 rounded-xl"
              >
                Publish
              </button>

              <button
                onClick={() => deleteBlog(blog.id)}
                className="bg-red-600 px-5 py-3 rounded-xl"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
