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
        <div className="container relative">
          <NavBar></NavBar>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
