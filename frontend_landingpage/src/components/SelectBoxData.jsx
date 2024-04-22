import { counterContext } from "../context/counterContext";
import React, { useContext } from "react";

const SelectBoxData = ({ tituloSelect, dataOption, ModoRenderizado }) => {
  const { setIdEmpaquetado, setSourceImagen } = useContext(counterContext);

  const RenderizadoOpcion = (dOption) => {
    if (ModoRenderizado == "1") {
      return (
        <option
          value={`${dOption.ID_PRODUCTO}, ${dOption.NOMBRE}, ${dOption.TAMANIO}, ${dOption.IMAGEN}, ${dOption.ID_PACK}, ${dOption.SABOR}`}
        >
          {dOption.NOMBRE + " " + dOption.SABOR + " " + dOption.TAMANIO}
        </option>
      );
    } else if (ModoRenderizado == "2") {
      return (
        <option selected value={`${dOption.ID_PACK}, ${dOption.NOMBRE_PACK}, ${dOption.CANTIDAD}`}>
          {dOption.NOMBRE_PACK}
        </option>
      );
    }else{
        return (
            <option selected value={`${dOption}`}>
              {dOption}
            </option>
          );
    }
  };

  const CargarImagen = (e) => {
    let Lista = e.target.value;
    Lista = Lista.split(",");
    console.log(Lista);
    setSourceImagen(Lista[3]);
    setIdEmpaquetado(Lista[4])

  };

  return (
    <div className="box-input box-select">
      <p className="box-titulo">{tituloSelect.trim()}</p>
      <select
        required
        id={`select-${tituloSelect}`}
        name={tituloSelect}
        onChange={ModoRenderizado === "1" ? CargarImagen : undefined} // Asignación condicional de onChange
      >
        <option value="" disabled selected>
          Seleccione
        </option>
        {dataOption.map((dOption) => RenderizadoOpcion(dOption))}
      </select>
    </div>
  );
};
export default SelectBoxData;
