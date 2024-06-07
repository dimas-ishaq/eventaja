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
    { name: 'Dashboard', href: '/dashboard/user' },
    {
      name: 'Event',
      href: '/dashboard/user/event',
    },
    {
      name: 'Event Organizer',
      href: '/dashboard/user/event-organizer',
    },
    {
      name: 'Sponsor',
      href: '/dashboard/user/sponsor',
    },
    {
      name: 'Transaksi',
      href: '/dashboard/user/transaction',
    },
  ];
  return (
    <html lang="en" data-theme="light">
      <body>
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden bg-slate-50">
          <Provider>
            <div className="w-full flex-none md:w-64 hidden md:block">
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
