import logo from "../assets/Avatar.png";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 text-white rounded-b-2xl bg-gray-200 backdrop-blur-3xl backdrop-opacity-50 max-w-[70%] mx-auto">
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
      <div className="space-x-6 text-sm bg-orange-400 p-3 rounded-xl">
        <button className="hover:text-orange-400">Dashboard</button>
      </div>
    </nav>
  );
}

export default Navbar;