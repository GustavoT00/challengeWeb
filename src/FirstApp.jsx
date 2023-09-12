import PropTypes from 'prop-types';
import { useState } from 'react';

const title = "First App"

const FirstApp = ({title, value}) => {

  const [counter, setC] = useState(value)

  const handleAdd = () =>{
     setC(counter + 1)
  }

    return (
      <>
        <h1>Counter</h1>
        <h2>{title}</h2>
        <span><text>10</text></span>
        <br></br>
        <span>{counter}</span>
        <button onClick={() => handleAdd()}>+1</button>

      </>
    )

}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
  title: 'No hay titulo'
}


export default FirstApp