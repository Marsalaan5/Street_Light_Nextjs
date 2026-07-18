import { Outfit } from 'next/font/google';
import './globals.css';
import "flatpickr/dist/flatpickr.css";
import { SidebarProvider } from '@/context/SidebarContext';
import { ThemeProvider } from '@/context/ThemeContext';
import 'remixicon/fonts/remixicon.css'
import QueryProvider from '@/providers/QueryProvider';
import { RolesProvider } from '@/views/user_mangement/role/RoleContext';
import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import '@/views/dashboard/grid/gridStyles.css'

const outfit = Outfit({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} dark:bg-gray-900`}>
        <QueryProvider>
          <RolesProvider>

            <ThemeProvider>
              <SidebarProvider>{children}</SidebarProvider>
            </ThemeProvider>

          </RolesProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
