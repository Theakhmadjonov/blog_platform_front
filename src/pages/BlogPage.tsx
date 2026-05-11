import { useParams } from "react-router-dom";
import { blogs } from "../data/mockData";
import { FaHeart } from "react-icons/fa";
import CommentCard from "../components/CommentCard";

const BlogPage = () => {
  const { blogId } = useParams();

  const blog = blogs.find((b) => b.id === Number(blogId));

  if (!blog) {
    return <h1>Blog not found</h1>;
  }

  return (
    <div className="max-w-5xl mx-auto">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-[500px] object-cover rounded-3xl mb-8"
      />

      <div className="flex items-center justify-between mb-6">
        <h1 className="text-5xl font-bold">{blog.title}</h1>

        <div className="flex items-center gap-2 text-red-500 text-2xl">
          <FaHeart />
          <span>{blog.likes}</span>
        </div>
      </div>

      <p className="text-gray-300 text-lg leading-9 mb-10">
        {blog.content.repeat(10)}
      </p>

      <div>
        <h2 className="text-3xl font-bold mb-6">
          Comments ({blog.comments.length})
        </h2>

        <div className="space-y-4">
          {blog.comments.map((comment) => (
            <CommentCard
              key={comment.id}
              username={comment.username}
              text={comment.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;