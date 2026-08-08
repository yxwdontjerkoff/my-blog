import { Link } from "react-router-dom";
import { parsePost } from "../utils/parsePost";

const postModules = import.meta.glob("../posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

const posts = Object.entries(postModules)
  .map(([path, raw]) => parsePost(raw, path))
  .sort((a, b) => b.date.localeCompare(a.date));

export default function Blog() {
  return (
    <main className="flex-1 max-w-4xl mx-auto px-4 py-16 md:py-20">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          博客
        </h1>
        <p className="text-gray-500">
          记录学习、思考与实践。共 {posts.length} 篇文章。
        </p>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-gray-400 text-lg">暂无文章，敬请期待。</p>
        </div>
      ) : (
        <div className="grid gap-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group bg-white rounded-xl border border-gray-200 p-6 md:p-8 hover:shadow-lg hover:border-indigo-200 transition-all"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <time className="text-sm text-gray-400 block mb-2">
                    {post.date}
                  </time>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors mb-2">
                    {post.title}
                  </h2>
                  {post.description && (
                    <p className="text-gray-500 leading-relaxed line-clamp-2">
                      {post.description}
                    </p>
                  )}
                </div>
                <Link
                  to={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition-all hover:shadow-md shrink-0 self-start"
                >
                  阅读文章
                  <span className="group-hover:translate-x-0.5 transition-transform">&rarr;</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
