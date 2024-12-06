import "./App.css";
import Card from "./assets/components/Card";
import pic1 from "./image/flappy_bird.png"
import pic2 from "./image/cpsb.jpg"
import pic3 from "./image/OIP.jpeg"
import State3 from "./assets/components/State3"
import Color from "./assets/components/Color"
import Login from './components/Login'
import Dashboard from "./components/Dashboard";
import MainLayout from "./components/MainLayout";
import Registration from "./components/Registration";
import { useState } from "react";




import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  const [store,setStore]=useState("");
  return (
    // <div className="app">
    //   <Card name="ananya" pic={pic1} roll="1234"/>
    //   <Card name="CPS" pic={pic2} roll="Najibabad"/>
    //   <Card name="Flower" pic={pic3} roll="89087"/>
    // </div>
    // <State3 />
    // <Color />
    <div>
{JSON.stringify(store)}
<BrowserRouter>
<Routes>

<Route path="/" element={<MainLayout/>}>
<Route path="/login" element={<Login regDataLogin={store}/>}/>
<Route path="/registration" element={<Registration regdata={setStore}/>}/>
</Route>
</Routes>
</BrowserRouter>

    </div>
  );
}

export default App;