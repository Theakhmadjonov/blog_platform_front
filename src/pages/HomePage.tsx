import BlogCard from "../components/BlogCard";
import useGetPosts from "../hooks/useGetPosts";

const HomePage = () => {
  const { data: blogs, isLoading, isError } = useGetPosts();
  if (isLoading) {
    return (
      <h1 className="text-[28px] md:text-[40px] font-bold text-center mt-[80px]">
        Loading...
      </h1>
    );
  }
  if (isError) {
    return (
      <h1 className="text-[28px] md:text-[40px] font-bold text-center mt-[80px] text-red-500">
        Something went wrong
      </h1>
    );
  }

  return (
    <div>
      <div className="mb-[40px] md:mb-[60px]">
        <h1 className="text-[32px] md:text-[48px] xl:text-[60px] font-bold mb-[16px] leading-tight">
          Latest Blogs
        </h1>

        <p className="text-gray-400 text-[16px] md:text-[18px]">
          Discover modern web development articles
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[24px] xl:gap-[32px]">
        {blogs?.map((blog: any) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
