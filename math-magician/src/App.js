import Calculator from "./Components/Calculator";
import {Routes, Route} from 'react-router-dom'
import Home from "./Components/Home";
import Quotes from "./Components/Quotes";

function App() {
  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/Quotes" element={<Quotes/>}/>
      </Routes>
    </>
  );
}

export default App;
