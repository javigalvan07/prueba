import React from 'react'
import { sum } from '../utils/sum'
import { multi } from '../utils/multi'
import {validateText} from '../utils/validateText'
import {isApproved} from '../utils/isApproved'



function Componente(){

  let resultsum
  resultsum = sum(2,3)
  let resultmulti
  resultmulti = multi(2,3)


  const [value, setValue] = React.useState('')
  const [nota, setNota] = React.useState('')

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const handleChangeNota = (e) => {
    setNota(e.target.value)
  }
  const handleClick = () => {
    if (validateText(value)) {
      alert('El campo es válido.');
    } else {
      alert('El campo es inválido.');
    }   
    
  }
 
  const handleClickNota = () => {
    if (isApproved(nota)) {
      alert('Has aprobado');
    } else {
      if (isApproved(nota) == null){
        alert('Nota inválida');
      }
      else{
        alert('Has suspendido')
      }

    }   
  }
 


  return (
    <>
      <h2>Hola mundo</h2>
      <label>El resultado de 2 + 3 es: {resultsum}</label>
      <br />
      <label>El resultado de 2*3 es: {resultmulti} </label>
      <br />
      <input type="text" id="campo" name="campo" required onChange={handleChange} />
      <br />
      <button onClick={handleClick}>Validar texto</button>
      <br />
      <label>Introduce una nota: </label>
      <input type="number" id="nota" name="nota" required onChange={handleChangeNota} />
      <br />
      <button onClick={handleClickNota}>¿Estoy aprobado?</button>
      
    </>
  )

}

export default Componente

