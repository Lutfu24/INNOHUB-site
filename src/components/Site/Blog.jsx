import { useEffect, useState } from "react";
import { getBlogs } from "../../services/blogservices";

function Blog() {
  const [blogs, setBlogs] = useState();
  useEffect(() => {
    async function showBlogs() {
      const res = await getBlogs();
      setBlogs(res);
    }
    showBlogs();
  }, []);

  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <div className="@container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <a
          rel="noopener noreferrer"
          href="#"
          className="block max-w-sm gap-3 mx-21 sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50"
        >
          <img
            src={blogs && blogs[0]?.image}
            alt="img"
            className="w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
          />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
              {blogs && blogs[0]?.title}
            </h3>
            <span className="text-sm dark:text-gray-600">
              {blogs && blogs[0]?.createdAt.slice(0, 10)}{" "}
              {blogs && blogs[0]?.createdAt.slice(11, 19)}
            </span>
            <p className="text-xl">{blogs && blogs[0]?.content}</p>
          </div>
        </a>
        <div className="@container grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs &&
            blogs
              .filter((b, i) => i !== 0)
              .map((blog, i) => {
                return (
                  <a
                    key={i}
                    rel="noopener noreferrer"
                    href="#"
                    className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-50"
                  >
                    <img
                      role="presentation"
                      className="object-cover w-full rounded h-44 dark:bg-gray-500"
                      src={blog?.image}
                    />
                    <div className="p-6 space-y-2">
                      <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                        {blog?.title}
                      </h3>
                      <span className="text-sm dark:text-gray-600">
                        {blog?.createdAt.slice(0, 10)}{" "}
                        {blog?.createdAt.slice(11, 19)}
                      </span>
                      <p className="text-xl">{blog?.content}</p>
                    </div>
                  </a>
                );
              })}
        </div>
        <div className="flex justify-center">
          <button
            type="button"
            className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-50 dark:text-gray-600"
          >
            Load more posts...
          </button>
        </div>
      </div>
    </section>
  );
}

export default Blog;
