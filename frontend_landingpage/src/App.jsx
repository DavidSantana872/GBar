import { useEffect } from 'react'
import './App.css'
import anime from "animejs"
import Carrusel from './components/Carrusel'
import SolicitarPedido from './components/SolicitarPedido'
function App() {
  const MovimientoDesplazamiento = () => {
    let DivElementos = document.getElementsByClassName("Burbuja")
    DivElementos = Array.from(DivElementos)
    DivElementos.map((DivElemento) => {
      anime(
        {
          /* targets : DivElemento,
           top : "0%",
           duration : 4000,
           direction : "normal",
           */
          targets: DivElemento,
          top: `${Math.random() * (100)}%`,
          duration: 2500,
          direction: "normal",
          easing: "easeInOutQuad"

        }
      )
    })
  }
  useEffect(() => {
    setInterval(
      () => {
        MovimientoDesplazamiento()
      }, 2500
    )
  }, [])

  return (
    <>
      <header>
        <nav className='BarraNavegacion'>
          <ul>
            <li>
              <a href='#ViewInicio'>
                Inicio
              </a>
            </li>
            <li>
              <a href='#ViewProductos'>
                Productos
              </a>
            </li>

            <li>
              <a href='#ViewPedidos'>
                Pedidos
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div className='BackgroundDegradado'>

        </div>
        <section className='Inicio' id='ViewInicio'>

          <div className='InicioBoxLeft'>
            <p className='Title'>
              <span className='FirstTitle'>
                DESCUBRE EL
              </span>
              <span className="SecondTitle">
                Exquisito Sabor
              </span>
              <p className='ThirdTitle'>
                DE NUESTROS PRODUCTOS!
              </p>
            </p>
          </div>
          <div className='img-inicio' style={{ backgroundImage: "url('/lima_limon.png')", height: '100%', width: '100%', backgroundPosition: "center", backgroundRepeat: "no-repeat", rotate: "18deg", zIndex: "-2" }}>
          </div>

          <section className='animacionBox'>
            <div className='Burbuja' style={{ top: `${Math.random() * (100 - 0)}%` }}>
              <div className='BrilloBurbuja'>

              </div>
            </div>
            <div className='Burbuja' style={{ top: `${Math.random() * (100 - 0)}%` }}>
              <div className='BrilloBurbuja'>

              </div>
            </div>
            <div className='Burbuja' style={{ top: `${Math.random() * (100 - 0)}%` }}>
              <div className='BrilloBurbuja'>

              </div>
            </div>
            <div className='Burbuja' style={{ top: `${Math.random() * (100 - 0)}%` }}>
              <div className='BrilloBurbuja'>

              </div>
            </div>
            <div className='Burbuja' style={{ top: `${Math.random() * (100 - 0)}%` }}>
              <div className='BrilloBurbuja'>

              </div>
            </div>
            <div className='Burbuja' style={{ top: `${Math.random() * (100 - 30)}%` }}>
              <div className='BrilloBurbuja'>

              </div>
            </div>
            <div className='Burbuja' style={{ top: `${Math.random() * (100 - 30)}%` }}>
              <div className='BrilloBurbuja'>

              </div>
            </div>
            <div className='Burbuja' style={{ top: `${Math.random() * (100 - 30)}%` }}>
              <div className='BrilloBurbuja'>

              </div>
            </div>
          </section>
        </section>
        <Carrusel Imagen={"/carrusel.png"} Nombre="ADAN Y EVA" Sabor="Frutos Rojos" Descripcion="Bebida alcoholica carbonatada ligeramente saborizada frutos rojos" Pack="1 Paquete/4 Latas" Presentacion="355ml">

        </Carrusel>
        <SolicitarPedido>
          
        </SolicitarPedido>
      </main>
    </>
  )
}

export default App
