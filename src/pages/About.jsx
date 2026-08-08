import profile from "../data/profile";

export default function About() {
  return (
    <main className="flex-1 max-w-4xl mx-auto px-4 py-16 md:py-20">
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
        关于我
      </h1>
      <p className="text-gray-500 mb-10">
        一个热爱技术的全栈开发者。
      </p>

      <div className="grid gap-10 md:grid-cols-3">
        {/* Bio */}
        <div className="md:col-span-2 space-y-5 prose-custom">
          {profile.bio.map((para, i) => (
            <p key={i}>{para}</p>
          ))}

          <h2>技能栈</h2>
          <p>
            <strong>前端：</strong>React、Vite、Tailwind CSS、JavaScript<br />
            <strong>后端：</strong>Node.js、Python<br />
            <strong>工具：</strong>Git、VS Code、Codex<br />
            <strong>兴趣：</strong>AI Agent、CLI 工具、开源
          </p>

          <h2>关于本站</h2>
          <p>
            这个博客使用 React + Vite + Tailwind CSS 构建，所有文章以 Markdown
            文件存储，通过 Vite 在构建时内联为静态资源，部署于 GitHub Pages。
            无需数据库、无需后端服务器，极致轻量。
          </p>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-800 mb-3">联系我</h3>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <a
                  href={profile.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-600 transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={"mailto:" + profile.contact.email}
                  className="hover:text-indigo-600 transition-colors"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="font-semibold text-gray-800 mb-3">技术栈</h3>
            <div className="flex flex-wrap gap-1.5">
              {profile.skills.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 bg-indigo-50 text-indigo-700 text-xs rounded-md"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}