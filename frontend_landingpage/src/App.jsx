import { useEffect } from "react";
import "./App.css";
import anime from "animejs";
import Carrusel from "./components/Carrusel";
import SolicitarPedido from "./components/SolicitarPedido";
function App() {
  window.addEventListener("scroll", (event) => {
  if( window.scrollY > 3){
    anime({
      targets : "#box-main",
      scrollHeigth : 1550,
      duration : 100
    })
  }
  
  });


  const MovimientoDesplazamiento = (Burbuja) => {
    let DivElementos = document.getElementsByClassName(Burbuja);
    DivElementos = Array.from(DivElementos);
    let CambiarPatron = Math.round(Math.random())
    DivElementos.map((DivElemento, index) => {
      anime({
        /* targets : DivElemento,
           top : "0%",
           duration : 4000,
           direction : "normal",
           */
        targets: DivElemento,
        top: `${0}%`,
        duration: 2500,
        direction: "normal",
        easing: "linear",
        complete: () => {

          DivElemento.style.top = (index % 2 == CambiarPatron ? "100%" : "120%")
          anime({
            targets: DivElemento,
            opacity: 1,
            duration: 10,  // Duración más corta para la opacidad
            easing: "linear"
          });
          
        }
      });

      // transparencia y desaparecer div 
      anime({
        targets: DivElemento,
        opacity: 0,
        duration: 1300,  // Duración más corta para la opacidad
        easing: "linear"
      });
    });
  };

useEffect(
  () => {
    MovimientoDesplazamiento("Burbuja")

    setTimeout(() => {
      MovimientoDesplazamiento("Burbuja2")
    },1200)
  }, []
)

useEffect(() => {
  // Este es el ID del intervalo que queremos mantener y limpiar
  const intervalId = setInterval(() => {
    MovimientoDesplazamiento("Burbuja");

    // Establece un timeout dentro del intervalo
    const timeoutId = setTimeout(() => {
      MovimientoDesplazamiento("Burbuja2");
    }, 1200);

    // Limpia el timeout al final del ciclo del intervalo
    return () => clearTimeout(timeoutId);

  }, 2600);

  // Función de limpieza que React llamará cuando el componente se desmonte
  return () => clearInterval(intervalId);

}, []);  // Los corchetes vacíos aseguran que este efecto solo se ejecute una vez

  return (
    <>
      <header>
        <nav className="BarraNavegacion">
          <ul>
            <li>
              <a onClick={() => {
                MovimientoDesplazamiento()
              }} href="#ViewInicio">Inicio</a>
            </li>
            <li>
              <a href="#ViewProductos">Productos</a>
            </li>

            <li>
              <a href="#ViewPedidos">Pedidos</a>
            </li>
          </ul>
        </nav>
      </header>
      <main >
      <div>
      <div className="BackgroundDegradado"></div>
        <section className="Inicio" id="ViewInicio">
          <div className="InicioBoxLeft">
            <p className="Title">
              <span className="FirstTitle">DESCUBRE EL</span>
              <span className="SecondTitle">Exquisito Sabor</span>
              <p className="ThirdTitle">DE NUESTROS PRODUCTOS!</p>
            </p>
          </div>
          <div
            className="img-inicio"
            style={{
              backgroundImage: "url('/lima_limon.png')",
              height: "100%",
              width: "100%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              rotate: "18deg",
              zIndex: "-2",
            }}
          ></div>
<section className="animacionBox">
            <div
              className="Burbuja2"
              style={{ top: `121%` }}
            >
              <div className="BrilloBurbuja"></div>
            </div>
            <div
              className="Burbuja2"
              style={{ top: `101%` }}
            >
              <div className="BrilloBurbuja"></div>
            </div>
            <div
              className="Burbuja2"
              style={{ top: `121%` }}
            >
              <div className="BrilloBurbuja"></div>
            </div>
            <div
              className="Burbuja2"
              style={{ top: `101%` }}
            >
              <div className="BrilloBurbuja"></div>
            </div>
            <div
              className="Burbuja2"
              style={{ top: `121%` }}
            >
              <div className="BrilloBurbuja"></div>
            </div>
            <div
              className="Burbuja2"
              style={{ top: `101%` }}
            >
              <div className="BrilloBurbuja"></div>
            </div>
            <div
              className="Burbuja2"
              style={{ top: `121%` }}
            >
              <div className="BrilloBurbuja"></div>
            </div>
            <div
              className="Burbuja2"
              style={{ top: `101%` }}
            >
              <div className="BrilloBurbuja"></div>
            </div>
          </section>
          <section className="animacionBox">
            <div
              className="Burbuja"
              style={{ top: "120%" }}
            >
              <div className="BrilloBurbuja"></div>
            </div>
            <div
              className="Burbuja"
              style={{ top: "100%" }}
            >
              <div className="BrilloBurbuja"></div>
            </div>
            <div
              className="Burbuja"
              style={{ top: "120%" }}
            >
              <div className="BrilloBurbuja"></div>
            </div>
            <div
              className="Burbuja"
              style={{ top: "100%" }}
            >
              <div className="BrilloBurbuja"></div>
            </div>
            <div
              className="Burbuja"
              style={{ top: "120%" }}
            >
              <div className="BrilloBurbuja"></div>
            </div>
            <div
              className="Burbuja"
              style={{ top: "100%" }}
            >
              <div className="BrilloBurbuja"></div>
            </div>
            <div
              className="Burbuja"
              style={{ top: "120%" }}
            >
              <div className="BrilloBurbuja"></div>
            </div>
            <div
              className="Burbuja"
              style={{ top: "100%" }}
            >
              <div className="BrilloBurbuja"></div>
            </div>
          </section>
        </section>
        <Carrusel
          Imagen={"/carrusel.png"}
          Nombre="ADAN Y EVA"
          Sabor="Frutos Rojos"
          Descripcion="Bebida alcoholica carbonatada ligeramente saborizada frutos rojos"
          Pack="1 Paquete/4 Latas"
          Presentacion="355ml"
        ></Carrusel>
        <SolicitarPedido></SolicitarPedido>
      </div>
      </main>
      <footer>
        <div className="box-footer-data">
          <ul>
            <li className="box-direccion">
              <div className="footer-titulo">
                <img className= "footer-img"src="/icon/ubicacion_icon.svg" alt="Ubicacion" /> Direccion
              </div>
              <p className="direccion">De la calle real 4 cuadras al norte, cuadra y media al sur</p>
            </li>
            <li>
              <img className= "footer-img"src="/icon/telefono_icon.svg" alt="Telefono" />
              2311 - 1234
            </li>
          </ul>
        </div>
        <div className="separator"></div>
        <div className="box-footer-data">
          <img src="/footer_img.svg" alt="" />
        </div>
        <div className="separator"></div>
        <div className="box-footer-data">
          <ul>
            <li className="footer-titulo">Redes Sociales</li>
            <li className="titulo-red-social">
              <img className= "footer-img"src="/icon/instagram_icon.svg" alt="Img" /> Instagram
            </li>
            <li className="titulo-red-social">
              <img className= "footer-img"src="/icon/whatsapp_icon.svg" alt="Img" /> Whatsapp
            </li>
            <li className="titulo-red-social">
              <img className= "footer-img"src="/icon/facebook_icon.svg" alt="Img" /> Facebook
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default App;
