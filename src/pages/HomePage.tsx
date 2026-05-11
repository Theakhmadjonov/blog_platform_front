import { useEffect, useState } from "react";
import API from "../api/axios";
import BlogCard from "../components/BlogCard";

const HomePage = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const { data } = await API.get("/post/all");
      setBlogs(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="mb-10">
        <h1 className="text-5xl font-bold mb-4">Latest Blogs</h1>

        <p className="text-gray-400">
          Discover modern web development articles
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {blogs.map((blog: any) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
