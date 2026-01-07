import logo from "../assets/Avatar.png";
import userAvatar from "../assets/User-Avatar.png";
import { colors } from './color';

function Navbar() {
  return (
    <nav
      className="
        flex items-center justify-between
        px-6 py-4
        max-w-[70%] mx-auto
        rounded-b-2xl
        bg-white/25
        backdrop-blur-xl
        border border-white/30
        shadow-lg
        pl-16
        pr-16
      "
    >
      {/* Brand */}
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="Expert Mama Logo"
          className="h-12 w-12 object-contain"
        />
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            Expert Mama
          </h1>
          <p className="text-sm text-gray-600">
            সমস্যা আপনার, সমাধান মামার।
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center space-x-4">
        <button
          style={{ backgroundColor: colors.orange }}
          className="text-white p-3 rounded-xl hover:opacity-90 transition"
        >
          Dashboard
        </button>

        <div className="h-10 w-10 rounded-full border border-gray-900 overflow-hidden">
          <img src={userAvatar} alt="User Avatar" className="h-full w-full object-cover" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
