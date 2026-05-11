import BlogCard from "../components/BlogCard";
import { blogs } from "../data/mockData";

const HomePage = () => {
  return (
    <div>
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-3">Explore Latest Blogs</h1>

        <p className="text-gray-400">
          Discover modern web development articles
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
