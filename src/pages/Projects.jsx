import profile from "../data/profile";

export default function Projects() {
  return (
    <main className="flex-1 max-w-4xl mx-auto px-4 py-16 md:py-20">
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          项目展示
        </h1>
        <p className="text-gray-500">
          我的一些个人项目与技术实践。
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {profile.allProjects.map((proj) => (
          <div
            key={proj.name}
            className="bg-white rounded-xl border border-gray-200 p-6 md:p-8 hover:shadow-lg hover:border-indigo-200 transition-all flex flex-col"
          >
            <h2 className="text-xl font-bold text-gray-800 mb-3">
              {proj.name}
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">
              {proj.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-5">
              {proj.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-md border border-indigo-100"
                >
                  {t}
                </span>
              ))}
            </div>

            <a
              href={proj.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}