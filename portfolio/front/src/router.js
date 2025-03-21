import { Route, Routes } from "react-router-dom";
import Home from "./home/home";
import Pro from "./pro/pro";
import Perso from "./perso/perso";

function Router() {
    return (
        <Routes>
            <Route exact path='/' element={ <Home></Home> } />
            <Route exact path='/defaultsite' element={<Home></Home>} />
            <Route exact path='/pro' element={<Pro></Pro>} />
            <Route exact path='/personnal' element={<Perso></Perso>} />
        </Routes>
    )
}

export default Router;