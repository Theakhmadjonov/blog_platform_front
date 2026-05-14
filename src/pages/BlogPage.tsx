import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CommentCard from "../components/CommentCard";
import img from "../images/Screenshot From 2025-09-24 21-57-02.png";
import { useGetPost } from "../hooks/useGetPost";
import { useComment } from "../hooks/useComment";
import { useLike, useRemoveLike } from "../hooks/useLike";
import { useUserStore } from "../zustand/userStore";

const BlogPage = () => {
  const { postId } = useParams();
  const navigate = useNavigate();

  const [comment, setComment] = useState("");

  const user = useUserStore((state) => state.user);

  const { data, isLoading, refetch } = useGetPost(postId as string);

  const { mutateAsync: addCommentMutation, isPending: commentPending } =
    useComment();

  const { mutateAsync: likeMutation, isPending: likePending } = useLike();

  const { mutateAsync: removeLikeMutation, isPending: removeLikePending } =
    useRemoveLike();

  if (isLoading) {
    return (
      <h1 className="text-[28px] md:text-[40px] font-bold text-center mt-[80px]">
        Loading...
      </h1>
    );
  }

  const isLiked = data.data.likes?.some(
    (like: any) => like.userId === user?.id,
  );

  const likeBlog = async () => {
    if (!user) {
      navigate("/login");
      return;
    }

    try {
      if (isLiked) {
        await removeLikeMutation(postId as string);
      } else {
        await likeMutation(postId as string);
      }

      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  const addComment = async () => {
    if (!user) {
      navigate("/login");
      return;
    }

    if (!comment.trim()) return;

    try {
      await addCommentMutation({
        content: comment,
        postId: postId as string,
      });

      setComment("");
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-[1100px] mx-auto">
      <img
        src={img}
        alt={data.data.title}
        className="w-full h-[240px] md:h-[400px] xl:h-[520px] object-cover rounded-[24px] mb-[28px] md:mb-[36px]"
      />

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-[20px] mb-[28px]">
        <div className="flex-1">
          <h1 className="text-[30px] md:text-[42px] xl:text-[52px] font-bold leading-tight mb-[10px]">
            {data.data.title}
          </h1>

          <p className="text-gray-400 text-[14px] md:text-[16px]">
            By {data.data.author?.name}
          </p>
        </div>

        <button
          disabled={likePending || removeLikePending}
          onClick={likeBlog}
          className={`
            flex items-center overflow-hidden rounded-full border
            transition-all duration-200
            ${
              isLiked
                ? "bg-red-500 border-red-500 text-white"
                : "bg-transparent border-gray-600 text-white hover:bg-[#1e293b]"
            }
          `}
        >
          <span className="px-[18px] py-[14px] border-r border-white/20 font-semibold">
            {data.data.likes?.length || 0}
          </span>

          <span className="px-[24px] py-[14px] font-medium">
            ❤️ {isLiked ? "Liked" : "Like"}
          </span>
        </button>
      </div>

      <p className="text-[15px] md:text-[18px] text-gray-300 leading-[32px] md:leading-[38px] mb-[50px]">
        {data.data.content}
      </p>

      <div className="mb-[40px]">
        <h2 className="text-[26px] md:text-[36px] font-bold mb-[24px]">
          Comments ({data.comments.length})
        </h2>

        <div className="flex flex-col md:flex-row gap-[14px] mb-[30px]">
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder={
              user ? "Write comment..." : "Login to write comment..."
            }
            className="flex-1 bg-[#1e293b] p-[14px] md:p-[16px] rounded-[16px] outline-none text-[14px] md:text-[16px]"
          />

          <button
            disabled={commentPending}
            onClick={addComment}
            className="bg-blue-600 px-[24px] py-[14px] md:py-[16px] rounded-[16px] text-[15px] md:text-[16px] disabled:opacity-50 hover:bg-blue-500"
          >
            {commentPending ? "Sending..." : "Send"}
          </button>
        </div>

        <div className="space-y-[16px]">
          {data.comments?.length > 0 ? (
            data.comments.map((comment: any) => (
              <CommentCard
                key={comment.id}
                comment={comment}
                author={data.data.author}
              />
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
