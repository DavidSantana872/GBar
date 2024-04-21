import React from "react";
import "./Carrusel.css"
const Carrusel = ({Imagen, Nombre, Sabor, Descripcion, Pack, Presentacion}) => {
    return(
        <section className='productos' id="ViewProductos">
          <div>
            <button className="btn-cambiar-productos">
              <img src="/btn_producto.svg" alt="" />
            </button>
            <div className="box-producto-informacion">
              <img src={Imagen} alt="Ups!" />
              <div className="box-descripcion-informacion">
                <p className="titulo">
                  {Nombre}
                </p>
               
                <p className="sabor">
                  {Sabor}
                </p>
               
                <p className="descripcion">
                  {Descripcion}
                </p>
               
                <p className="pack">
                  {Pack}
                </p>
               
                <p className="presentacion">
                  {Presentacion}
                </p>
              </div>
            </div>
            <button className="btn-cambiar-productos">
              <img src="/btn_producto.svg" alt="" style={{rotate : "180deg"}} />
            </button>
          </div>
        </section>
    )
}
export default Carrusel;