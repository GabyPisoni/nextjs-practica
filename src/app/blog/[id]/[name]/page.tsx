"use client"
import { Suspense } from "react";
import Loading from "./loading";

const Page = ({params}:{params:{name:string, id:string}}) => {
    return ( <Suspense fallback={<Loading/>}><h1>Hola , el nombre recibido por parametro es : {params.name} y el id es {params.id}</h1></Suspense> );
}
 
export default Page;


