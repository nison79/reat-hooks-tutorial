import { useState ,useEffect } from 'react'
import {useForm} from './useForm'
import { useFetch } from './useFetch'
import './App.css';

function App() {
  const [values ,handleChange] = useForm({
    email: "" , 
    password: "" , 
    firstName:""
  });

  const [count , setCount] = useState( () =>JSON.parse(localStorage.getItem('count')));
  const { data , loading } = useFetch(`http://numbersapi.com/${count}/trivia`);
  

  useEffect(() => {
    localStorage.setItem('count' , JSON.stringify(count));
  },[count])
  return (
    <div className="App">

        <div>{ !data ? 'loading ....' : data}</div>
        <div>count: {count}</div>
        <button onClick={() => setCount(c => c+1)}>increment</button>
        <input 
        name="firstName"
        placeholder="first name"
        value={values.firstName}
        onChange={handleChange}
        ></input>
        <input 
        name="email" 
        placeholder="email"
        value ={values.email} 
        onChange={ handleChange}>
        </input>
        <input 
        type="password" 
        placeholder="password"
        name="password" 
        value={values.password}
        onChange={handleChange}>
        </input>
    </div>
  );
}

export default App;
