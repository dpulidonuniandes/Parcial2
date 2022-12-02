import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Detail from "./components/bandas/bandaDetail";
import Bandas from "./components/bandas/bandas";
import NavBar from "./components/navbar";

function App() {
 return (
   <div className="App">
     <NavBar></NavBar>
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Bandas />} />
         <Route path="/bandas" element={<Bandas />} />
         <Route path="/bandas/:bandaId" element={<Detail />} />
       </Routes>
     </BrowserRouter>
   </div>
 );
}

export default App;