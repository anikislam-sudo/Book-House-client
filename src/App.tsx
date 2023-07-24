
//import { decrement, incrementByAmount, increment } from "./redux/Features/Counter/counterSlice";

import { Outlet} from "react-router-dom";

import Header from "./components/shared/Header/Header";
import Footer from "./components/shared/Footer/Footer";


//import { useAppDispatch, useAppSelector } from "./redux/hook/hook";
function App() {
  //const {count}=useAppSelector((state)=>state.counter)
  //const dispatch=useAppDispatch()
  return (
    <div  className="max-w-screen-xl mx-auto ">
       <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
  
    </div>
  );
}

export default App;
