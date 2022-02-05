import React from 'react'
import RouterApp from "./Router/RouterApp";
import Navibar from "./components/Navbar/Navibar";
import {useSelector} from "react-redux";

function App() {

    const auth = useSelector(state => state.user.authorization)

    return (
    <div>
        <Navibar/>
        <RouterApp/>
    </div>
  );
}

export default App;
