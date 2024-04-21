
import React,{ useRef } from "react";
const SelectBoxData = ({tituloSelect, dataOption}) => {
    const Status = useRef(null)
    const ActiveSelect = () =>{
        Status.current.click()
    }
    return (
        <div onClick={ActiveSelect} className="box-input box-select">
            <p className="box-titulo">
                {tituloSelect}
            </p>
            <select required id={`select-${tituloSelect}`} ref={Status} name={tituloSelect}>
            <option value="" disabled selected>Seleccione</option>
                {
                    dataOption.map(
                        dOption => (
                            <option value={`${dOption.id}, ${dOption.nombre}, ${dOption.tamanio}`}>
                                {console.log(dOption)}
                                {dOption.nombre + " " + dOption.tamanio}
                            </option>
                        )
                    )
                }
            </select>
        </div>
    )
}
export default SelectBoxData;