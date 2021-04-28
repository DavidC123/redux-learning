import {useSelector, useDispatch} from 'react-redux';
import {decrement, increment, sign_in} from './actions/index';


function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <hr/>
      {isLogged ? <div><h3>Logged in</h3><button onClick={() => dispatch(sign_in())}>Logout</button></div> : <div><h3>Not Logged in</h3><button onClick={() => dispatch(sign_in())}>Sign In</button></div>}
    </div>
  );
}

export default App;
