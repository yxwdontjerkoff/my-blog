import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white mt-auto">
      <div className="max-w-4xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-500">
          &copy; {year} YXW Blog. Built with React + Vite + Tailwind CSS.
        </div>
        <nav className="flex gap-4 text-sm">
          <Link to="/" className="text-gray-500 hover:text-indigo-600 transition-colors">
            首页
          </Link>
          <Link to="/blog" className="text-gray-500 hover:text-indigo-600 transition-colors">
            博客
          </Link>
          <Link to="/projects" className="text-gray-500 hover:text-indigo-600 transition-colors">
            项目
          </Link>
          <Link to="/about" className="text-gray-500 hover:text-indigo-600 transition-colors">
            关于
          </Link>
        </nav>
      </div>
    </footer>
  );
}
