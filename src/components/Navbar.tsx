import logo from "../assets/Avatar.png";
import userAvatar from "../assets/User-Avatar.png";
import Button from "./Button";
import { colors } from './color';
import { useEffect, useRef, useState } from 'react';
import "../App.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null); 

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (!menuRef.current || !buttonRef.current) return;
      const target = e.target as Node;
      if (!menuRef.current.contains(target) && !buttonRef.current.contains(target)) {
        setOpen(false);
      }
    }
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKey);
    };
  }, []);

  return (
    <nav
      className="glass
        relative z-50
        flex items-center justify-between
        px-6 py-4
        max-w-[70%] mx-auto
        rounded-b-2xl
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
          className="h-12 w-12 object-contain duration-300 hover:scale-105 transition-transform cursor-pointer"
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
        <Button variant="glass">
          Dashboard
        </Button>

        <div className="relative transition-all duration-300 hover:-translate-y-1">
          <button
            ref={buttonRef}
            onClick={() => setOpen(!open)}
            className="h-10 w-10 rounded-full border border-gray-900 overflow-hidden focus:outline-none"
            aria-haspopup="true"
            aria-expanded={open}
          >
            <img src={userAvatar} alt="User Avatar" className="h-full w-full object-cover" />
          </button>

          {open && (
            <div
              ref={menuRef}
              className="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-lg border border-gray-200 z-[9999]"
              role="menu"
              aria-label="User menu"
            >
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-t-xl" role="menuitem" onClick={() => { /* navigate to profile */ setOpen(false); }}>Profile</button>
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100" role="menuitem" onClick={() => { /* navigate to settings */ setOpen(false); }}>Settings</button>
              <div className="border-t border-gray-100" />
              <button className="w-full text-left px-4 py-2 hover:bg-gray-100 rounded-b-xl text-red-600" role="menuitem" onClick={() => { /* sign out */ setOpen(false); }}>Sign out</button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
