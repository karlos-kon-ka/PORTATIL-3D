import React from 'react'
import foto from './fotomia.png'

function Page() {
  return (
    <div className='pagina'>
        <h1>CARLOS PEREZ</h1>
        <h3>FRONTEND DEVELOPER</h3>
       
        <img src={foto} alt='foto' />
        <br/>
        <p>
            Animaciones 3d con THREE.js y THREE Fiber.
            Desarrollado con objetos importados de terceros.
        </p>
      
    </div>
  )
}

export default Page
