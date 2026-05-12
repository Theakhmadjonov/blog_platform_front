import { Link } from "react-router-dom";
import {
  useGetUserPosts,
  usePublishPost,
  useRemoveUserPosts,
} from "../hooks/useGetUserPosts";

const Profile = () => {
  const { data: blogs, isLoading, refetch } = useGetUserPosts();

  const { mutateAsync: deletePost } = useRemoveUserPosts();
  const { mutateAsync: publishPost } = usePublishPost();

  const handleDelete = async (id: string) => {
    await deletePost(id);
    refetch();
  };

  const handlePublish = async (id: string) => {
    await publishPost(id);
    refetch();
  };

  if (isLoading) {
    return (
      <h1 className="text-[28px] md:text-[40px] font-bold text-center mt-[80px]">
        Loading...
      </h1>
    );
  }

  return (
    <div className="max-w-[1100px] mx-auto px-[20px] md:px-[40px] xl:px-0">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-[16px] mb-[40px]">
        <h1 className="text-[32px] md:text-[46px] font-bold">My Blogs</h1>

        <Link
          to="/create-blog"
          className="bg-blue-600 px-[20px] py-[12px] rounded-[14px] w-fit"
        >
          Create Blog
        </Link>
      </div>

      <div className="space-y-[24px]">
        {blogs?.map((blog: any) => (
          <div
            key={blog.id}
            className="bg-[#1e293b] p-[18px] md:p-[24px] rounded-[24px]"
          >
            <img
              src={blog.image}
              className="w-full h-[180px] md:h-[280px] object-cover rounded-[16px] mb-[16px]"
            />

            <h2 className="text-[22px] md:text-[32px] font-bold mb-[10px]">
              {blog.title}
            </h2>

            <p className="text-gray-400 text-[14px] md:text-[16px] mb-[18px]">
              {blog.content}
            </p>

            <div className="flex flex-wrap gap-[10px]">
              <Link
                to={`/update-blog/${blog.id}`}
                className="bg-yellow-500 px-[16px] py-[10px] rounded-[12px]"
              >
                Update
              </Link>

              <button
                onClick={() => handlePublish(blog.id)}
                className="bg-green-600 px-[16px] py-[10px] rounded-[12px]"
              >
                Publish
              </button>

              <button
                onClick={() => handleDelete(blog.id)}
                className="bg-red-600 px-[16px] py-[10px] rounded-[12px]"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
