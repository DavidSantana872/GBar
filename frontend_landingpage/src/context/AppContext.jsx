import React, {useState} from "react";
import { counterContext } from "./counterContext";
const AppContext = ({children}) => {

const [SourceImagen, setSourceImagen] = useState("")

const [IdEmpaquetado, setIdEmpaquetado] = useState("")


const [CantidadUnidad, setCantidadUnidad] = useState("")

    return(
        <counterContext.Provider value = {{SourceImagen, setSourceImagen, IdEmpaquetado, setIdEmpaquetado, CantidadUnidad, setCantidadUnidad}}>
            {children}
        </counterContext.Provider>
    )
}
export default AppContext;