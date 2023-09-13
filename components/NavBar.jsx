'use client';
import Link from 'next/link';
import { NavigationMenu, NavigationMenuList } from '@/components/ui/navigation-menu';
import '../app/globals.css';

const NavBar = () => {
  return (
    <div className="flex items-center justify-center my-6">
      <NavigationMenu>
        <NavigationMenuList className="flex gap-6 w-fi">
          <Link href="/" className=" text-gray-600 hover:text-black focus:text-black">
            الرئيسية
          </Link>
          <Link href="/about" className=" text-gray-600 hover:text-black focus:text-black">
            اعرفني
          </Link>
          <Link href="/posts" className=" text-gray-600 hover:text-black focus:text-black">
            المقالات
          </Link>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default NavBar;
