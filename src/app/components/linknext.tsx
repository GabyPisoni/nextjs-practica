'use client'
import Link from 'next/link';
 
export default function LinkNext({path,children}:any) {
  return <Link href={path ? path : "/"}>{children}</Link>
}