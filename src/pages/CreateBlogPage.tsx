import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCreatePost } from "../hooks/useCreatePost";

const CreateBlogPage = () => {
  const navigate = useNavigate();

  const { mutateAsync, isPending } = useCreatePost();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const createBlog = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await mutateAsync({
        title,
        content,
      });

      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full max-w-[900px] mx-auto bg-[#1e293b] p-[24px] md:p-[40px] xl:p-[48px] rounded-[24px] md:rounded-[32px]">
      <h1 className="text-[30px] md:text-[42px] xl:text-[48px] font-bold mb-[28px] md:mb-[40px]">
        Create Blog
      </h1>

      <form onSubmit={createBlog} className="space-y-[18px] md:space-y-[24px]">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full bg-[#0f172a] p-[14px] md:p-[18px] rounded-[16px] outline-none text-[14px] md:text-[16px]"
        />

        <textarea
          rows={10}
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full bg-[#0f172a] p-[14px] md:p-[18px] rounded-[16px] outline-none text-[14px] md:text-[16px] resize-none"
        />

        <button
          disabled={isPending}
          className="w-full md:w-fit bg-blue-600 px-[28px] md:px-[36px] py-[14px] md:py-[16px] rounded-[16px] text-[15px] md:text-[16px] font-semibold disabled:opacity-50"
        >
          {isPending ? "Creating..." : "Create Blog"}
        </button>
      </form>
    </div>
  );
};

export default CreateBlogPage;
