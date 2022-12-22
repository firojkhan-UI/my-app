
import './App.css';
import styled from 'styled-components';
import { createContext, useContext } from 'react';

const dataSharing = createContext(null)

const Heading = styled.div`
font-size: 2rem;
`
let des = {name:'firoj',loc: 'Bengaluru',add:'HSR Layout',arr:[1,2,3,4,5,6]}

function App() {
  return (
    <dataSharing.Provider value={des}>
    <h1>Context API</h1>
      <Test1 />
      <Test2 />
    </dataSharing.Provider>
  );
}

export default App;

const Test1 = () => {
  const { name, loc,arr } = useContext(dataSharing)
  console.log(name,"::::",loc)
  return <>
    <h1>
     
    </h1>
  </>
}

const Test2 = () => {
  const {name,loc,arr} = useContext(dataSharing)
  return <>
    <h1>
     {name}
    </h1>
    <ul>
      {arr?.map((item) => <li>{loc}</li>)}
    </ul>
  </>
}
