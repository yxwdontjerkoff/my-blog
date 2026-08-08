import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { parsePost } from "../utils/parsePost";

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const modules = import.meta.glob("../posts/*.md", {
      query: "?raw",
      import: "default",
    });

    (async () => {
      for (const [path, loader] of Object.entries(modules)) {
        const fileSlug = path.replace(/^.*[\\/]/, "").replace(/\.md$/, "");
        if (fileSlug === slug) {
          const raw = await loader();
          setPost(parsePost(raw, path));
          break;
        }
      }
      setLoading(false);
    })();
  }, [slug]);

  if (loading) {
    return (
      <main className="flex-1 max-w-4xl mx-auto px-4 py-16">
        <p className="text-gray-400">加载中...</p>
      </main>
    );
  }

  if (!post) {
    return (
      <main className="flex-1 max-w-4xl mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">文章未找到</h1>
        <Link to="/blog" className="text-indigo-600 hover:underline">
          &larr; 返回博客列表
        </Link>
      </main>
    );
  }

  return (
    <main className="flex-1 max-w-4xl mx-auto px-4 py-16">
      <article>
        <header className="mb-10">
          <Link
            to="/blog"
            className="text-sm text-indigo-600 hover:underline mb-4 inline-block"
          >
            &larr; 返回博客列表
          </Link>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-3">
            {post.title}
          </h1>
          {post.date && (
            <time className="text-sm text-gray-400">{post.date}</time>
          )}
        </header>

        <div className="prose-custom">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </main>
  );
}
