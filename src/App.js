import './App.css';
import Home from "./Home"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Singlepage from './Singlepage';
import Error from './Error';
function App() {
  return (
   <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='movie/:id' element={<Singlepage/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>
   </>
  );
}
export default App;
