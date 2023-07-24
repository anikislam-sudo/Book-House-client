import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Home from "../page/Home";

//import Home from "../page/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
   
    ],
  },
]);

export default routes;
