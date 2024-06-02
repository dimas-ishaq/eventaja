import SideNav from "./dashboard/sidenav";
export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className="">
        <main>
          <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-64">
              <SideNav />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
