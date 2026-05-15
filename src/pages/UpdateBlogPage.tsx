import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useUpdatePost } from "../hooks/useUpdatePost";

const UpdateBlogPage = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();
  const { mutateAsync: updatePost, isPending } = useUpdatePost(
    blogId as string,
  );

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const updateBlog = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      console.log("title, content", title, content);
      await updatePost({
        title,
        content,
      });
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-[1100px] mx-auto px-[20px] md:px-[40px] xl:px-0">
      <div className="bg-[#1e293b] p-[24px] md:p-[40px] rounded-[24px]">
        <h1 className="text-[32px] md:text-[46px] font-bold mb-[30px]">
          Update Blog
        </h1>

        <form onSubmit={updateBlog} className="space-y-[20px]">
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full bg-[#0f172a] p-[16px] rounded-[14px] outline-none"
          />

          <textarea
            rows={10}
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full bg-[#0f172a] p-[16px] rounded-[14px] outline-none resize-none"
          />

          <button
            disabled={isPending}
            className="bg-yellow-500 px-[20px] py-[12px] rounded-[14px]"
          >
            {isPending ? "Updating..." : "Update Blog"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateBlogPage;
