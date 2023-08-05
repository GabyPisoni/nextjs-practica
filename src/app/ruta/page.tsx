"use client"
import React from 'react';
import LinkNext from '../components/linknext';
import { useRouter } from 'next/navigation';

export default function Page(props:{children:React.ReactNode
  mensaje:React.ReactNode
  contacto:React.ReactNode
}) {
  const route = useRouter();
  return <>
     
    <ul>
    <li><LinkNext>Inicio</LinkNext></li>
    <li><LinkNext path={"dashboard"} >Dashboard</LinkNext></li>
    <li><LinkNext path={"details"} >Details</LinkNext></li>
    </ul>
<button onClick={()=> {
  route.push("/")
}}>Volviendo al inicio</button>
  </>
}