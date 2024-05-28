import Link from 'next/link';
import NavLinks from './nav-links';
import Image from 'next/image';
import Logo from '../../assets/img/logo/logo-event-aja.png'

const links = [
  { name: 'Beranda', href: '/dashboard/user', icon: 'IoHome' },
  {
    name: 'Event',
    href: '/dashboard/user/event',
    icon: 'IoPeopleSharp',
  },
  {
    name: 'Event Organizer',
    href: '/dashboard/user/event-organizer',
    icon: 'IoPeopleSharp',
  },
  {
    name: 'Sponsor',
    href: '/dashboard/user/sponsor',
    icon: 'IoPeopleSharp',
  },
];
export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-fuchsia-400 after: p-4 md:h-32"
        href="/"
      >
        <div className="w-32 text-white md:w-32">
          <Image src={Logo} width={80} />
          <p>Event Aja</p>
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks links={links} />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">

            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}
