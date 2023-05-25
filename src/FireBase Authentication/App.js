// this has router

import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from './components/Home'
import Login from './Login'

function App () {// this is parent route
    return (
      //other routes
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    );
}
  export default App;