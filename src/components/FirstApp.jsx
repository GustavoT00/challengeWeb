import PropTypes from 'prop-types';
import { useState } from 'react';

const title = "First App"

const FirstApp = ({title, value, p}) => {

  const [counter, setC] = useState(value) //Estados, devuelve dos variables

  const fn = () =>{
    p = p+1
    console.log(p)
  }
  const handleAdd = () =>{
     setC(counter + 1) //setC es una función que cambia el valor a la primera variable
  }
  const handleSubstract = () =>{
  
    setC(counter - 1)
  }
  const handleReset = () =>{

    setC(value)
  }

    return (
      <>
        <h1>Counter</h1>
        <h2>{title}</h2>
        <br></br>
        <button onClick={() => handleAdd()}>+1</button>
        <br></br>
        <span>{counter}</span>
        <br></br>
        <button onClick={() => handleSubstract()}>-1</button>
        <br></br>
        <button onClick={() => handleReset()}>Reset</button>
        <br></br>
        

      </>
    )

}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
  title: 'No hay titulo'
}


export default FirstApp;