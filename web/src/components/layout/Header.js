import React from 'react';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

export default function Header() {
  return (
    <div className="fixed z-20 w-full">
      <div className="hidden sm:block">
        <DesktopNavbar />
      </div>
      <div className="block sm:hidden">
        <MobileNavbar />
      </div>
    </div>
  );
}
