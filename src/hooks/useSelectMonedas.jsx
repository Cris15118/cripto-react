import { useState } from "react"
import styled from "@emotion/styled"

const Label = styled.label `
    color: #fff;
    display: block;
    font-family: 'Lato', sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 10px 0;
`
const Select = styled.select `
    width: 100%;
    padding: 14px;
    border-radius:10px ;
    font-family: 'Lato', sans-serif;
    font-size: 14px;
    font-weight: 400;
    
`

const useSelectMonedas = (label, opciones) => {

    const [state, setState]= useState('')

  const SelectMonedas = ()=>(
<>
    <Label >{label}</Label>
    <Select
    value={state}
    onChange={e => setState(e.target.value)}
    >
        <option value=""> Selecciones</option>
        {opciones.map(opcion=>(
            <option  value={opcion.id} key={opcion.id} >{opcion.nombre}</option>
            
            
        ))}
    </Select>
</>

  )
    
  
  return [state, SelectMonedas]
}

export default useSelectMonedas