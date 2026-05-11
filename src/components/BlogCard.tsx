import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import type { Blog } from "../types";

interface Props {
  blog: Blog;
}

const BlogCard = ({ blog }: Props) => {
  return (
    <Link
      to={`/blog/${blog.id}`}
      className="bg-[#1e293b] rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition block"
    >
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-56 object-cover"
      />

      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-bold">{blog.title}</h2>

          <div className="flex items-center gap-2 text-red-500">
            <FaHeart />
            <span>{blog.likes}</span>
          </div>
        </div>

        <p className="text-gray-400 line-clamp-3">{blog.content}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
