import logo from "../assets/Avatar.png";
import userAvatar from "../assets/User-Avatar.png";
import Colors from "./color";

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
        pl-16 pr-16
      "
    >
      {/* Brand */}
      <div className="flex items-center gap-2">
        <img
          src={logo}
          alt="Expert Mama Logo"
          className="h-12 w-12 object-contain mr-2"
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
      <div className="space-x-6 text-sm flex">
        <button style={{ backgroundColor: Colors.orange }} className="hover:text-orange-400 p-3 rounded-xl">Dashboard</button>
        <div className="h-10 w-10 object-contain my-auto rounded-full border border-gray-900">
          <img
            src={userAvatar}
            alt="User Avatar"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;