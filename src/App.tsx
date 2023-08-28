//import { decrement, incrementByAmount, increment } from "./redux/Features/Counter/counterSlice";

import { Outlet } from "react-router-dom";

import Header from "./components/shared/Header/Header";
import Footer from "./components/shared/Footer/Footer";
import { useAppDispatch } from "../redux/hooks/hooks";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { setLoading, setUser } from "../redux/features/users/usersSlice";
import { auth } from "./lib/Firebase";

//import { useAppDispatch, useAppSelector } from "./redux/hook/hook";
function App() {
  //const {count}=useAppSelector((state)=>state.counter)
  //const dispatch=useAppDispatch()

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setLoading(true));
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.email!));
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
      }
    });
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto ">
      <Header></Header>

      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}

export default App;
