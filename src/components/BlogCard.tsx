import { Link } from "react-router-dom";
import type { Blog } from "../types";
import img from "../images/Screenshot From 2025-09-24 21-57-02.png";
import { FaHeart, FaComment } from "react-icons/fa";

const BlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <Link
      to={`/post/${blog.id}`}
      className="bg-[#1e293b] rounded-[24px] overflow-hidden hover:scale-[1.02] duration-300 transition block shadow-lg border border-gray-800"
    >
      <img
        src={img}
        alt={blog.title}
        className="w-full h-[220px] md:h-[240px] xl:h-[260px] object-cover"
      />

      <div className="p-[18px] md:p-[24px]">
        <div className="flex items-start justify-between gap-[14px] mb-[18px]">
          <div className="flex-1 min-w-0">
            <h2 className="text-[22px] md:text-[26px] font-bold text-white line-clamp-1 leading-tight">
              {blog.title}
            </h2>

            <p className="text-[13px] md:text-[14px] text-gray-400 mt-[6px]">
              by {blog.author.name}
            </p>
          </div>

          <span
            className={`text-[11px] md:text-[12px] px-[12px] py-[6px] rounded-full whitespace-nowrap ${
              blog.published
                ? "bg-green-500/20 text-green-400"
                : "bg-yellow-500/20 text-yellow-400"
            }`}
          >
            {blog.published ? "Published" : "Draft"}
          </span>
        </div>

        <p className="text-gray-400 text-[14px] md:text-[15px] line-clamp-3 leading-[28px] mb-[22px]">
          {blog.content}
        </p>

        <div className="flex items-center justify-between gap-[16px] border-t border-gray-700 pt-[18px]">
          <div className="flex items-center gap-[18px] md:gap-[24px]">
            <div className="flex items-center gap-[8px] text-red-400 text-[14px] md:text-[15px]">
              <FaHeart />
              <span>{blog._count.likes}</span>
            </div>

            <div className="flex items-center gap-[8px] text-blue-400 text-[14px] md:text-[15px]">
              <FaComment />
              <span>{blog._count.comments}</span>
            </div>
          </div>

          <p className="text-[12px] md:text-[14px] text-gray-500 whitespace-nowrap">
            {new Date(blog.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
