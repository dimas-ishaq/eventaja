import { Inter } from 'next/font/google';
import '@/utils/styles/globals.css';
import SideNav from '@/components/dashboard/sidenav';
import Navbar from '@/components/dashboard/navbar';
import Provider from '@/components/context/Provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Event aja',
  description:
    'Event aja adalah website untuk menghubungkan ketiga belah pihak Event, Diantaranya Pemilik Event, Penyedian jasa dan terakhir Sponsor. Dengan even aja diharapkan ketiga belah pihak lebih mudah terhubung',
};

export default function RootLayout({ children }) {
  const links = [
    { name: 'Beranda', href: '/dashboard/admin' },
    {
      name: 'Manajemen Akun',
      href: '/dashboard/admin/account',
    },
    {
      name: 'Transaksi',
      href: '/dashboard/admin/transaction',
    },
    {
      name: 'Blogs',
      href: '/dashboard/admin/blogs',
    },
  ];
  return (
    <html lang="en" data-theme="light">
      <body>
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-slate-50">
          <Provider>
            <div className="w-full flex-none md:w-64 hidden sm:block">
              <SideNav links={links} />
            </div>
            <div className="flex-grow flex-col p-3 md:overflow-y-auto md:pt-5">
              <Navbar links={links} />
              {children}
            </div>
          </Provider>
        </div>
      </body>
    </html>
  );
}
