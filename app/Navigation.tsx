'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="bg-[#2E2E2E] text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Nextandot</Link>
        <div className="space-x-4">
          <Link href="/members" className={pathname === '/members' ? 'text-[#FD674C]' : ''}>Members</Link>
          <Link href="/apps" className={pathname === '/apps' ? 'text-[#FD674C]' : ''}>Apps</Link>
          <Link href="/blogs" className={pathname === '/blogs' ? 'text-[#FD674C]' : ''}>Blogs</Link>
          <Link href="/contact" className={pathname === '/contact' ? 'text-[#FD674C]' : ''}>Contact</Link>
        </div>
      </div>
    </nav>
  )
}