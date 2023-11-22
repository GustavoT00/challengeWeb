import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { increment } from './store/slices/counterSlice';


export const App = () => {

  const {counter} = useSelector(state => state.counter)
  const dispatch = useDispatch()
  return (
    <>
      <h1>Hola Mundo</h1> 
      <span>El Contador es: {counter} </span>
      <button
        className='btn btn-primary'
        onClick={() => dispatch(increment())}
      >+1</button>
    </>
  )
}



