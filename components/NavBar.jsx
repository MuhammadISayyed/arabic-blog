'use client';
import Link from 'next/link';
import { NavigationMenu, NavigationMenuList } from '@/components/ui/navigation-menu';
import '../app/globals.css';

const NavBar = () => {
  return (
    <div className="flex items-center justify-center my-6 font-serif text-xl sticky top-4">
      <NavigationMenu
        dir="rtl"
        className="backdrop-filter backdrop-blur-md bg-gray-300/50  px-9 py-3 rounded-full"
      >
        <NavigationMenuList className="flex gap-7 w-fit">
          <Link
            href="/"
            className="hover:text-cherry focus:text-cherry hover:underline hover:underline-offset-8"
          >
            الرئيسية
          </Link>
          <Link
            href="/about"
            className="hover:text-cherry focus:text-cherry hover:underline hover:underline-offset-8"
          >
            اعرفني
          </Link>
          <Link
            href="/posts"
            className="hover:text-cherry focus:text-cherry hover:underline hover:underline-offset-8"
          >
            المقالات
          </Link>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default NavBar;
