'use client';
import Link from 'next/link';
import { NavigationMenu, NavigationMenuList } from '@/components/ui/navigation-menu';
import '../app/globals.css';

const NavBar = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex gap-2">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/posts">Posts</Link>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavBar;
