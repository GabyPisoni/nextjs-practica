import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Practica de ejemplo',
  description: 'Jugando con Next Js',
}

export default function RootLayout({
 children,
mensaje,
contacto,
  
}: {
  children: React.ReactNode,mensaje: React.ReactNode,
  contacto: React.ReactNode,
}) {
  return (
    <html lang="en">
      <body className={inter.className}>a
      
      
      
      
      {children}
      {mensaje}
      {contacto}
      </body>
    </html>
  )
}
