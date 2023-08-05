import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <h2>No encontrado</h2>
      <p>Recurso desconocido</p>
      <p>
        Volver <Link href="/ruta">IR</Link>
      </p>
    </div>
  )
}