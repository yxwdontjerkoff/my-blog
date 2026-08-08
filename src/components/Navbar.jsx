import { NavLink } from "react-router-dom";

const linkClass = ({ isActive }) =>
  isActive
    ? "text-indigo-600 font-semibold transition-colors"
    : "text-gray-600 hover:text-indigo-600 transition-colors";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-4xl mx-auto px-4 h-14 flex items-center justify-between">
        <NavLink to="/" className="text-lg font-bold text-gray-800 hover:text-indigo-600 transition-colors">
          YXW Blog
        </NavLink>
        <ul className="flex gap-6 text-sm font-medium">
          <li><NavLink to="/" end className={linkClass}>首页</NavLink></li>
          <li><NavLink to="/blog" className={linkClass}>博客</NavLink></li>
          <li><NavLink to="/projects" className={linkClass}>项目</NavLink></li>
          <li><NavLink to="/about" className={linkClass}>关于</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}
