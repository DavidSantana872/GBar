import React, { useState, useEffect, useContext } from "react";
import "./SolicitarPedido.css";
import InputBoxData from "./InputBoxData";
import SelectBoxData from "./SelectBoxData";
import {
  ApiProductosPedidosSolicitud,
  ApiCargarImagenes,
  ApiPacksProductos,
} from "../apis/apis";
import { counterContext } from "../context/counterContext";

const SolicitarPedido = () => {

  const { SourceImagen, IdEmpaquetado, setCantidadUnidad, CantidadUnidad } = useContext(counterContext);

  const [ImagenURL, setImagenURL] = useState("");

  const [Presentaciones, setPresentaciones] = useState([]);

  const [PedidoProductos, setPedidosProductos] = useState([]);

  const [ConteoUnidades, setConteoUnidades] = useState(0);

  const [Productos, SetProductos] = useState([]);

  useEffect(() => {
    let TemporalURL = `${ApiCargarImagenes.trim()}${SourceImagen.trim()}`;
    TemporalURL = TemporalURL.replace(/ /g, "_");
    console.log(TemporalURL);
    setImagenURL(TemporalURL);

    // SOLICITAR AHORA SUS PAQUETES Y PRESENTACIONES DEL PRODUCTO SELECCIONADO

    let TemporalURL_ID_pack = `${ApiPacksProductos.trim()}/${IdEmpaquetado.trim()}`;

    fetch(TemporalURL_ID_pack, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setPresentaciones([data]);
        setCantidadUnidad(data.CANTIDAD);
      });
  }, [SourceImagen]);

  useEffect(() => {
    fetch(ApiProductosPedidosSolicitud, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        SetProductos(data);
      });
  });

  useEffect(() => {
    setConteoUnidades(TotalUnidadesPedido());
  }, [PedidoProductos]);
  

  const LimpiarPedido = () => {
    setPedidosProductos([]);
  };

  const AgregarProducto = (e) => {
    e.preventDefault();
    let Nombre = document.getElementById("select-Producto").value.split(",");
    console.log(Nombre);
    let Presentacion = document
      .getElementById("select-Presentacion")
      .value.split(",");
    let Data = {
      idProducto: Nombre[0],
      nombreProducto: Nombre[1],
      tamanio: Nombre[2],
      sabor: Nombre[5],
      idPresentacion: Presentacion[0],
      nombrePresentacion: Presentacion[1],
      cantidadPresentacion: Presentacion[2],
    };
    setPedidosProductos([...PedidoProductos, Data]);
  };

  const TotalUnidadesPedido = () => {
    let Contador = 0;
    PedidoProductos.map((Pedido) => {
      Contador = parseInt(Pedido.cantidadPresentacion) + parseInt(Contador);
    });
    return Contador;
  };

  const EnviarPedido = (e) => {
    e.preventDefault()
    const formData = new FormData(e.target);  // Usa el objeto FormData
    const values = Object.fromEntries(formData.entries());  // Convierte FormData en un objeto de JavaScript
    values.Pedido = PedidoProductos
    console.log(values)
  }

  return (
    <section className="ViewSolicitarPedido" id="ViewPedidos">
      <p className="titulo-solicitud">Solicitud Pedido</p>
      <div className="box-column">
        <div>
          <p className="titulo-seccion">Datos Personales</p>
          <form id="form-informacion" onSubmit={EnviarPedido}>
            <div className="inputs-information">
              <InputBoxData tituloInput={"Nombre"}></InputBoxData>
              <InputBoxData tituloInput={"Apellidos"}></InputBoxData>
              <InputBoxData tituloInput={"Numero Telefonico"}></InputBoxData>
            </div>
          </form>
          {
            // Datos pedido
          }
          <p className="titulo-seccion">Datos Pedido</p>
          <form id="PedidoForm" onSubmit={AgregarProducto}>
            <div className="inputs-information">
              <SelectBoxData
                tituloSelect={"Producto"}
                dataOption={Productos}
                ModoRenderizado="1"
              ></SelectBoxData>

              <SelectBoxData
                tituloSelect={"Presentacion"}
                dataOption={Presentaciones}
                ModoRenderizado="2"
              ></SelectBoxData>

              <SelectBoxData
                tituloSelect={"Unidades"}
                dataOption={[CantidadUnidad]}
                ModoRenderizado="3"
              ></SelectBoxData>
            </div>
          </form>
          <div className="btns">
            <button onClick={LimpiarPedido}>Limpiar Pedido</button>
            <button form="PedidoForm" type="submit">
              Agregar
            </button>
          </div>
        </div>
        <div
          className="img-producto"
          style={{ backgroundImage: `url(${ImagenURL})` }}
        ></div>
      </div>
      <section className="table-pedido">
        <p className="titulo-seccion">Resumen Pedido</p>
        <table>
          <thead>
            <tr>
              <td>Nombre</td>
              <td>Tamaño</td>
              <td>Presentacion</td>
              <td>Unidades</td>
            </tr>
          </thead>
          <tbody>
            {PedidoProductos.map((producto) => (
              <tr>
                <td>
                  {producto.nombreProducto + " " + producto.sabor}
                </td>
                <td>{producto.tamanio}</td>
                <td>{producto.nombrePresentacion}</td>
                <td>{producto.cantidadPresentacion}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td></td>
              <td>TOTAL</td>
              <td>{ConteoUnidades}</td>
            </tr>
          </tfoot>
        </table>
      </section>
      <div className="box-btn-enviar">
        <button className="btn-enviar"type="submit" form="form-informacion">
          Enviar
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="17"
            viewBox="0 0 16 17"
            fill="none"
          >
            <path
              d="M15.964 0.84695C16.0004 0.756084 16.0093 0.656543 15.9896 0.560665C15.9699 0.464787 15.9226 0.376789 15.8534 0.307582C15.7842 0.238374 15.6962 0.191 15.6003 0.171332C15.5044 0.151665 15.4049 0.160568 15.314 0.196939L0.767713 6.01603H0.766713L0.314735 6.19603C0.229129 6.23018 0.154628 6.28733 0.0994607 6.36117C0.0442935 6.435 0.0106073 6.52265 0.00212312 6.61443C-0.00636102 6.70621 0.0106871 6.79855 0.0513843 6.88125C0.0920815 6.96394 0.154844 7.03378 0.232739 7.08305L0.642719 7.34305L0.643719 7.34505L5.63848 10.5231L7.22841 13.0211C8.00037 14.1612 8.00037 13.1611 8.00037 12.6611C8.00025 12.0257 8.13469 11.3975 8.39485 10.8178C8.655 10.238 9.03497 9.71999 9.50975 9.29771C9.98452 8.87543 10.5433 8.55849 11.1494 8.36775C11.7555 8.17701 12.3951 8.11679 13.0261 8.19107L15.964 0.84695ZM14.1311 2.73698L6.63743 10.2311L6.42244 9.89309C6.38305 9.83107 6.33047 9.77848 6.26845 9.73909L5.93047 9.52409L13.4241 2.02997L14.6021 1.55896L14.1311 2.73698Z"
              fill="white"
            />
            <path
              d="M16 12.6611C16 13.5893 15.6312 14.4796 14.9749 15.136C14.3185 15.7924 13.4284 16.1611 12.5001 16.1611C11.5719 16.1611 10.6817 15.7924 10.0254 15.136C9.36904 14.4796 9.00031 13.5893 9.00031 12.6611C9.00031 11.7328 9.36904 10.8425 10.0254 10.1862C10.6817 9.52977 11.5719 9.16101 12.5001 9.16101C13.4284 9.16101 14.3185 9.52977 14.9749 10.1862C15.6312 10.8425 16 11.7328 16 12.6611ZM12.5001 10.661C12.3675 10.661 12.2404 10.7137 12.1466 10.8075C12.0528 10.9013 12.0002 11.0284 12.0002 11.161V12.1611H11.0002C10.8676 12.1611 10.7404 12.2137 10.6467 12.3075C10.5529 12.4013 10.5002 12.5285 10.5002 12.6611C10.5002 12.7937 10.5529 12.9209 10.6467 13.0146C10.7404 13.1084 10.8676 13.1611 11.0002 13.1611H12.0002V14.1611C12.0002 14.2937 12.0528 14.4209 12.1466 14.5146C12.2404 14.6084 12.3675 14.6611 12.5001 14.6611C12.6327 14.6611 12.7599 14.6084 12.8537 14.5146C12.9474 14.4209 13.0001 14.2937 13.0001 14.1611V13.1611H14.0001C14.1327 13.1611 14.2598 13.1084 14.3536 13.0146C14.4474 12.9209 14.5 12.7937 14.5 12.6611C14.5 12.5285 14.4474 12.4013 14.3536 12.3075C14.2598 12.2137 14.1327 12.1611 14.0001 12.1611H13.0001V11.161C13.0001 11.0284 12.9474 10.9013 12.8537 10.8075C12.7599 10.7137 12.6327 10.661 12.5001 10.661Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};
export default SolicitarPedido;
