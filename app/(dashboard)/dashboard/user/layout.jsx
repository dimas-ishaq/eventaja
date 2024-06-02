import { Inter } from 'next/font/google';
import '@/utils/styles/globals.css';
import SideNav from '@/components/dashboard/sidenav-users';
import Navbar from '@/components/dashboard/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Event aja',
  description:
    'Event aja adalah website untuk menghubungkan ketiga belah pihak Event, Diantaranya Pemilik Event, Penyedian jasa dan terakhir Sponsor. Dengan even aja diharapkan ketiga belah pihak lebih mudah terhubung',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body>
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-slate-50">
          <div className="w-full flex-none md:w-64 hidden md:block">
            <SideNav />
          </div>
          <div className="flex-grow flex-col p-3 md:overflow-y-auto md:pt-5">
            <Navbar />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

