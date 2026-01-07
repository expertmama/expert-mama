import logo from "../assets/Avatar.png";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white border-b border-slate-700 max-w-380 mx-auto">
      {/* Brand */}
      <div className="flex items-center gap-2">
        <img
          src={logo}
          alt="Expert Mama Logo"
          className="h-12 w-12 object-contain mr-2"
        />
        <div>
          <h1 className="text-3xl font-bold text-white">
            Expert Mama
          </h1>
          <p className="text-sm text-gray-400">
            সমস্যা আপনার, সমাধান মামার।
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="space-x-6 text-sm">
        <button className="hover:text-orange-400">Dashboard</button>
      </div>
    </nav>
  );
}

export default Navbar;