import { Link } from "react-router-dom";
import { parsePost } from "../utils/parsePost";
import profile from "../data/profile";

/* ── latest posts ── */
const postModules = import.meta.glob("../posts/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

const latestPosts = Object.entries(postModules)
  .map(([p, raw]) => parsePost(raw, p))
  .sort((a, b) => b.date.localeCompare(a.date))
  .slice(0, 3);

export default function Home() {
  return (
    <main className="flex-1">
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"></div>
        <div className="relative max-w-4xl mx-auto px-4 py-24 md:py-32 text-center">
          <div className="mx-auto w-24 h-24 rounded-full bg-white/20 backdrop-blur flex items-center justify-center text-white text-3xl font-bold mb-6 ring-4 ring-white/30">
            {profile.initials}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 tracking-tight animate-[fadeIn_0.8s_ease-out]">
            你好，我是 {profile.name}
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-xl mx-auto mb-8">
            {profile.tagline}
            <br />
            {profile.subtitle}
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/blog"
              className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
            >
              阅读博客
            </Link>
            <Link
              to="/projects"
              className="px-6 py-3 border-2 border-white/50 text-white font-semibold rounded-full hover:bg-white/10 transition-all hover:scale-105"
            >
              查看项目
            </Link>
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section className="max-w-4xl mx-auto px-4 py-16 md:py-20">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          关于我
        </h2>
        <div className="prose-custom max-w-2xl">
          {profile.bio.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mt-8">
          {profile.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1.5 bg-indigo-50 text-indigo-700 text-sm font-medium rounded-full border border-indigo-100 hover:bg-indigo-100 transition-colors cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* ── Latest Posts ── */}
      {latestPosts.length > 0 && (
        <section className="bg-white border-y border-gray-100 py-16 md:py-20">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex items-end justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                最新文章
              </h2>
              <Link
                to="/blog"
                className="text-indigo-600 hover:text-indigo-800 text-sm font-medium transition-colors"
              >
                查看全部 &rarr;
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {latestPosts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/blog/${post.slug}`}
                  className="group bg-gray-50 rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-indigo-200 transition-all"
                >
                  <time className="text-xs text-gray-400 block mb-2">
                    {post.date}
                  </time>
                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-500 line-clamp-2">
                    {post.description}
                  </p>
                  <span className="inline-block mt-3 text-xs font-medium text-indigo-600 group-hover:translate-x-1 transition-transform">
                    阅读文章 &rarr;
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Featured Projects ── */}
      <section className="max-w-4xl mx-auto px-4 py-16 md:py-20">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            精选项目
          </h2>
          <Link
            to="/projects"
            className="text-indigo-600 hover:text-indigo-800 text-sm font-medium transition-colors"
          >
            查看全部 &rarr;
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {profile.featuredProjects.map((proj) => (
            <div
              key={proj.name}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {proj.name}
              </h3>
              <p className="text-sm text-gray-500 mb-4 line-clamp-3">
                {proj.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {proj.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-indigo-600 hover:underline"
              >
                GitHub &rarr;
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}