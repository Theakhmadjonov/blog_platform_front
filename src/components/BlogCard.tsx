import { Link } from "react-router-dom";
import type { Blog } from "../types";
import img from "../images/Screenshot From 2025-09-24 21-57-02.png";
import { FaHeart, FaComment } from "react-icons/fa";

const BlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <Link
      to={`/post/${blog.id}`}
      className="bg-[#1e293b] rounded-2xl overflow-hidden hover:scale-[1.02] duration-300 transition block shadow-lg border border-gray-800"
    >
      <img src={img} alt={blog.title} className="w-full h-60 object-cover" />

      <div className="p-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-white line-clamp-1">
              {blog.title}
            </h2>

            <p className="text-sm text-gray-400 mt-1">by {blog.author.name}</p>
          </div>

          <span
            className={`text-xs px-3 py-1 rounded-full ${
              blog.published
                ? "bg-green-500/20 text-green-400"
                : "bg-yellow-500/20 text-yellow-400"
            }`}
          >
            {blog.published ? "Published" : "Draft"}
          </span>
        </div>

        <p className="text-gray-400 line-clamp-3 leading-7 mb-5">
          {blog.content}
        </p>

        <div className="flex items-center justify-between border-t border-gray-700 pt-4">
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2 text-red-400">
              <FaHeart />
              <span>{blog._count.likes}</span>
            </div>

            <div className="flex items-center gap-2 text-blue-400">
              <FaComment />
              <span>{blog._count.comments}</span>
            </div>
          </div>

          <p className="text-sm text-gray-500">
            {new Date(blog.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
