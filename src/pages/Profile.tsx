import { blogs } from "../data/mockData";
import { FaEdit, FaTrash, FaPlus, FaGlobe } from "react-icons/fa";

const Profile = () => {
  return (
    <div>
      <div className="bg-[#1e293b] rounded-3xl p-8 mb-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">
          <div>
            <h1 className="text-4xl font-bold mb-2">Sobirjon Ahmadjonov</h1>

            <p className="text-gray-400">Fullstack Developer</p>
          </div>

          <button className="bg-blue-600 px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-blue-700 transition">
            <FaPlus />
            Create Blog
          </button>
        </div>
      </div>

      <div className="grid gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-[#1e293b] rounded-2xl p-5 flex flex-col lg:flex-row gap-5"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full lg:w-[250px] h-[180px] object-cover rounded-xl"
            />

            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>

                  <p className="text-gray-400 line-clamp-2">{blog.content}</p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button className="bg-yellow-500 px-4 py-2 rounded-lg flex items-center gap-2">
                    <FaEdit />
                    Update
                  </button>

                  <button className="bg-green-600 px-4 py-2 rounded-lg flex items-center gap-2">
                    <FaGlobe />
                    Publish
                  </button>

                  <button className="bg-red-600 px-4 py-2 rounded-lg flex items-center gap-2">
                    <FaTrash />
                    Delete
                  </button>
                </div>
              </div>

              <div className="mt-5">
                <span
                  className={`px-4 py-2 rounded-full text-sm ${
                    blog.published
                      ? "bg-green-500/20 text-green-400"
                      : "bg-yellow-500/20 text-yellow-400"
                  }`}
                >
                  {blog.published ? "Published" : "Draft"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
