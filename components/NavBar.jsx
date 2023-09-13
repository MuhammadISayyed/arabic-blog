'use client';
import Link from 'next/link';
import { NavigationMenu, NavigationMenuList } from '@/components/ui/navigation-menu';
import '../app/globals.css';

const NavBar = () => {
  return (
    <div className="flex items-center justify-center my-6 font-serif text-xl">
      <NavigationMenu dir="rtl">
        <NavigationMenuList className="flex gap-6 w-fi">
          <Link href="/" className="hover:text-cherry focus:text-cherry">
            الرئيسية
          </Link>
          <Link href="/about" className="hover:text-cherry focus:text-cherry">
            اعرفني
          </Link>
          <Link href="/posts" className="hover:text-cherry focus:text-cherry">
            المقالات
          </Link>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default NavBar;
