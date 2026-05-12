import { useState } from "react";
import { useParams } from "react-router-dom";
import CommentCard from "../components/CommentCard";
import img from "../images/Screenshot From 2025-09-24 21-57-02.png";

import { useGetPost } from "../hooks/useGetPost";
import { useComment } from "../hooks/useComment";
import { useLike } from "../hooks/useLike";

const BlogPage = () => {
  const { postId } = useParams();
  const [comment, setComment] = useState("");
  const { data: blog, isLoading, refetch } = useGetPost(postId as string);
  const { mutateAsync: addCommentMutation, isPending: commentPending } =
    useComment();
  const { mutateAsync: likeMutation, isPending: likePending } = useLike();
  const likeBlog = async () => {
    try {
      await likeMutation(postId as string);
      refetch();
    } catch (error) {
      console.log(error);
    }
  };
  const addComment = async () => {
    if (!comment.trim()) return;
    try {
      await addCommentMutation({
        content: comment,
      });
      setComment("");
      refetch();
    } catch (error) {
      console.log(error);
    }
  };
  if (isLoading) {
    return (
      <h1 className="text-[28px] md:text-[40px] font-bold text-center mt-[80px]">
        Loading...
      </h1>
    );
  }
  return (
    <div className="max-w-[1100px] mx-auto">
      <img
        src={img}
        alt={blog.title}
        className="w-full h-[240px] md:h-[400px] xl:h-[520px] object-cover rounded-[24px] mb-[28px] md:mb-[36px]"
      />
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-[20px] mb-[28px]">
        <div className="flex-1">
          <h1 className="text-[30px] md:text-[42px] xl:text-[52px] font-bold leading-tight mb-[10px]">
            {blog.title}
          </h1>
          <p className="text-gray-400 text-[14px] md:text-[16px]">
            By {blog.author?.name}
          </p>
        </div>
        <button
          disabled={likePending}
          onClick={likeBlog}
          className="bg-red-500 px-[22px] md:px-[28px] py-[14px] md:py-[16px] rounded-[18px] text-[16px] md:text-[18px] w-fit disabled:opacity-50"
        >
          ❤️ {blog._count?.likes}
        </button>
      </div>
      <p className="text-[15px] md:text-[18px] text-gray-300 leading-[32px] md:leading-[38px] mb-[50px]">
        {blog.content}
      </p>
      <div className="mb-[40px]">
        <h2 className="text-[26px] md:text-[36px] font-bold mb-[24px]">
          Comments ({blog._count?.comments})
        </h2>
        <div className="flex flex-col md:flex-row gap-[14px] mb-[30px]">
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Write comment..."
            className="flex-1 bg-[#1e293b] p-[14px] md:p-[16px] rounded-[16px] outline-none text-[14px] md:text-[16px]"
          />
          <button
            disabled={commentPending}
            onClick={addComment}
            className="bg-blue-600 px-[24px] py-[14px] md:py-[16px] rounded-[16px] text-[15px] md:text-[16px] disabled:opacity-50"
          >
            {commentPending ? "Sending..." : "Send"}
          </button>
        </div>
        <div className="space-y-[16px]">
          {blog.comments?.length > 0 ? (
            blog.comments.map((comment: any) => (
              <CommentCard key={comment.id} comment={comment} />
            ))
          ) : (
            <p className="text-gray-400 text-[15px]">No comments yet...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
