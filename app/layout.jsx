import './globals.css';
import NavBar from '@/components/NavBar';
import { aref_ruqaa, lateef } from './fonts';

export const metadata = {
  title: 'My Arabic Blog',
  description: 'Blginnn',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl" className={`${aref_ruqaa.variable} ${lateef.variable}`}>
      <body className="bg-offwhite text-gray-800">
        <div className="flex flex-col justify-between min-h-screen py-9">
          <div className="container relative">
            <NavBar></NavBar>
            <main>{children}</main>
          </div>
          <footer className="font-serif text-center mt-9 tracking-wide text-2xl relative bottom-0 w-full">
            جميع الحقوق يحفظها خالقها
          </footer>
        </div>
      </body>
    </html>
  );
}
