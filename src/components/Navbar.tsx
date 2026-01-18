import logo from "../assets/Avatar.png";
import userAvatar from "../assets/User-Avatar.png";
import Button from "./Button";
import { useEffect, useRef, useState } from "react";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [avatarOpen, setAvatarOpen] = useState(false);

  const avatarBtnRef = useRef<HTMLButtonElement | null>(null);
  const avatarMenuRef = useRef<HTMLDivElement | null>(null);

  // Close avatar dropdown on outside click / ESC
  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (
        avatarMenuRef.current &&
        avatarBtnRef.current &&
        !avatarMenuRef.current.contains(e.target as Node) &&
        !avatarBtnRef.current.contains(e.target as Node)
      ) {
        setAvatarOpen(false);
      }
    };

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setAvatarOpen(false);
        setMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <nav className="glass navbar relative z-50 flex items-center px-4 md:px-10 py-4 w-[95%] md:max-w-[80%] lg:max-w-[70%] mx-auto rounded-b-2xl">

      {/* Brand */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="Logo" className="h-11 w-11 md:h-12 md:w-12 mt-1.5 object-contain"/>
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Expert Mama</h1>
          <p className="text-xs md:text-sm text-gray-600">
            সমস্যা আপনার, সমাধান মামার।
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="ml-auto flex items-center gap-3 md:gap-5">

        {/* Desktop dashboard */}
        <div className="hidden md:block">
          <Button variant="glass">Dashboard</Button>
        </div>

        {/* Avatar */}
        <div className="relative hidden md:block">
          <button
            ref={avatarBtnRef}
            onClick={() => {
              setAvatarOpen(!avatarOpen);
              setMobileOpen(false);
            }}
            className="h-10 w-10 rounded-full overflow-hidden border border-gray-900"
          >
            <img src={userAvatar} alt="User" className="h-full w-full object-cover" />
          </button>

          {avatarOpen && (
            <div
              ref={avatarMenuRef}
              className="flex flex-col items-start absolute right-0 mt-2 w-44 text-sm"
            >
              <button className="menu-item">Profile</button>
              <button className="menu-item">Settings</button>
              <div className="border-t" />
              <button className="menu-item text-red-600">Sign out</button>
            </div>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-2xl"
          onClick={() => {
            setMobileOpen(!mobileOpen);
            setAvatarOpen(false);
          }}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 w-full mt-2 glass-card p-4 md:hidden">
          <Button variant="glass" className="w-full mb-3">
            Dashboard
          </Button>

          <div className="flex flex-col gap-2 text-sm">
            <button className="text-left">Profile</button>
            <button className="text-left">Settings</button>
            <button className="text-left text-red-600">Sign out</button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
