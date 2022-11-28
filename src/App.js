import React from "react"; 
import {RouterProvider} from 'react-router-dom';
import { router } from "./routes/root";
import { Provider } from "react-redux";
import { store } from './store/store'

const App = () => {
    return(
      <RouterProvider router={router} />
    )
}

export default App;