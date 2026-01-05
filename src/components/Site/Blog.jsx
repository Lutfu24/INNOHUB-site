import { useEffect, useState } from "react";
import { getBlogs } from "../../services/blogservices";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
AOS.init();

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
        <div className="@container grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogs &&
            blogs.map((blog, i) => {
              return (
                <div
                  key={blog._id}
                  className="hover:scale-105 hover:shadow-xl hover:duration-500 hover:ease-in-out hover:shadow-sky-200"
                >
                  <div
                    data-aos="zoom-in-down"
                    className="max-w-lg p-4 shadow-md dark:bg-gray-50 dark:text-gray-800"
                  >
                    <Link to="#">
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <img
                            src={blog.image}
                            className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
                          />
                          <div className="flex items-center text-xs">
                            <span>
                              {blog.createdAt
                                .slice(0, 10)
                                .split("-")
                                .reverse()
                                .join(".")}
                            </span>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-xl font-semibold dark:text-violet-600">
                            {blog.title}
                          </h3>
                          <p className="leading-snug dark:text-gray-600">
                            {blog.content}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default Blog;
