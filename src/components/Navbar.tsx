import logo from "../assets/Avatar.png";
import userAvatar from "../assets/User-Avatar.png";
import Button from "./button";
import React, { useEffect, useRef, useState } from "react";
import "../App.css";
import "../index.css";
import { Link } from "react-router-dom";

function Navbar() {
  // --- AUTH STATE (Change this to true/false to test) ---
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
      {/* Brand - Always Visible */}
      <Link to="/" className="flex items-center gap-3 no-underline">
        {/* Logo */}
        <div className="flex items-center gap-3 hover:opacity-80 transition-opacity cursor-pointer">
          <img
            src={logo}
            alt="Logo"
            className="h-11 w-11 md:h-12 md:w-12 mt-1.5 object-contain"
          />
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Expert Mama</h1>
            <p className="text-xs md:text-sm text-gray-600">
              সমস্যা আপনার, সমাধান মামার।
            </p>
          </div>
        </div>
      </Link>

      {/* --- CONDITIONAL RENDERING --- */}
      {isLoggedIn ? (
        /* 1. LOGGED IN UI */
        <div className="flex-grow flex justify-end items-center gap-3 md:gap-5">
          <div className="ml-auto flex items-center gap-3 md:gap-5">
            {/* Desktop dashboard */}
            <div className="hidden md:block">
              <Button variant="glass">Dashboard</Button>
            </div>

            {/* Avatar Dropdown */}
            <div className="relative hidden md:block">
              <button
                ref={avatarBtnRef}
                onClick={() => {
                  setAvatarOpen(!avatarOpen);
                  setMobileOpen(false);
                }}
                className="h-10 w-10 rounded-full overflow-hidden border border-gray-900"
              >
                <img
                  src={userAvatar}
                  alt="User"
                  className="h-full w-full object-cover"
                />
              </button>

              {avatarOpen && (
                <div
                  ref={avatarMenuRef}
                  className="flex flex-col items-start absolute right-0 mt-2 w-44 text-sm bg-white/90 backdrop-blur-md rounded-lg shadow-xl border border-gray-200 p-1"
                >
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-md">
                    Profile
                  </button>
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-md">
                    Settings
                  </button>
                  <div className="border-t w-full my-1" />
                  <button
                    onClick={() => setIsLoggedIn(false)}
                    className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 rounded-md"
                  >
                    Sign out
                  </button>
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

          {/* Mobile menu content */}
          {mobileOpen && (
            <div className="absolute top-full left-0 w-full mt-2 glass-card p-4 md:hidden bg-white/80 backdrop-blur-lg rounded-xl shadow-lg border border-gray-200">
              <Button variant="glass" className="w-full mb-3">
                Dashboard
              </Button>
              <div className="flex flex-col gap-2 text-sm">
                <button className="text-left p-2 hover:bg-gray-100 rounded">
                  Profile
                </button>
                <button className="text-left p-2 hover:bg-gray-100 rounded">
                  Settings
                </button>
                <button
                  onClick={() => setIsLoggedIn(false)}
                  className="text-left p-2 text-red-600 hover:bg-red-50 rounded"
                >
                  Sign out
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* 2. LOGGED OUT UI */
        <div className="ml-auto flex items-center gap-3 md:gap-5">
          <Button variant="glass" onClick={() => setIsLoggedIn(true)}>
            Login
          </Button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
