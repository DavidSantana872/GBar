import React, { useRef } from "react";

const InputBoxData = ({tituloInput}) => {
    const Status = useRef(null)
    const ActiveInput = () =>{
        Status.current.focus()
    }
    return (
        <div onClick={ActiveInput} className="box-input input-telefono">
            <p className="box-titulo">
                {tituloInput}
            </p>
            <input id={`input-${tituloInput}`} ref={Status} name={tituloInput} type={tituloInput == "Numero Telefonico" ? "number" : "text"} />
        </div>
    )
}
export default InputBoxData;