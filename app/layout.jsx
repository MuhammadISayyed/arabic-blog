import './globals.css';
import NavBar from '@/components/NavBar';

export const metadata = {
  title: 'My Arabic Blog',
  description: 'Blginnn',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar></NavBar>
        {children}
      </body>
    </html>
  );
}
